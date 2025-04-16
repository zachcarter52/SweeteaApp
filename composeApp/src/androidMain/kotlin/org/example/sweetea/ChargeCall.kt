package org.example.sweetea

import kotlinx.io.IOException
import okhttp3.ResponseBody
import sqip.Call
import java.lang.reflect.Type
import retrofit2.Response
import retrofit2.Converter
import retrofit2.Retrofit

class ChargeCall(private val factory: Factory, private val nonce: String) : Call<ChargeResult> {
    private val call: retrofit2.Call<Void> = factory.service.charge(ChargeService.ChargeRequest(nonce))

    override fun cancel() {
        call.cancel()
    }

    override fun clone(): Call<ChargeResult> {
        return factory.create(nonce)
    }

    override fun enqueue(callback: sqip.Callback<ChargeResult>) {
        // We will only be using synchronous calls at the moment ...
    }

    override fun execute(): ChargeResult {
        val response: Response<Void>
        try{
            response = call.execute()
        }catch (e: IOException){
            return ChargeResult.networkError()
        }
        return responseToResult(response)
    }

    override fun isCanceled(): Boolean {
        return call.isCanceled()
    }

    override fun isExecuted(): Boolean {
        return call.isExecuted()
    }

    fun responseToResult(response: Response<Void>): ChargeResult{
        if(response.isSuccessful()){
            return ChargeResult.success()
        }

        try{
            val errorBody: ResponseBody? = response.errorBody()
            val errorResponse: ChargeService.ChargeErrorResponse? = factory.errorConverter.convert(errorBody)
            if(errorResponse?.errorMessage != null){
                return ChargeResult.error(errorResponse.errorMessage)
            } else {
                return ChargeResult.networkError()
            }
        }catch (e: IOException){
            println("ChargeCall: Error while parsing error response: " + response.toString())
            return ChargeResult.networkError()
        }
    }

    class Factory(retroFit: Retrofit){
        internal val service: ChargeService = retroFit.create(ChargeService::class.java)
        val noAnnotations: Array<Annotation> = emptyArray()
        val errorResponseType: Type = ChargeService.ChargeErrorResponse::class.java
        internal val errorConverter: Converter<ResponseBody, ChargeService.ChargeErrorResponse> = retroFit.responseBodyConverter(errorResponseType, noAnnotations)

        fun create(nonce: String): Call<ChargeResult> {
            return ChargeCall(this, nonce)
        }
    }
}