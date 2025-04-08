package org.example.sweetea

import kotlinx.io.IOException
import okhttp3.ResponseBody
import org.example.sweetea.pages.LineItem
import retrofit2.Converter
import retrofit2.Response
import retrofit2.Retrofit
import sqip.Call
import java.lang.reflect.Type

class ChargeCall(private val factory: Factory, private val nonce: String, private val lineItems: List<LineItem>) : Call<ChargeResult> {
    private val call: retrofit2.Call<Void> = factory.service.charge(ChargeService.ChargeRequest(nonce, lineItems))

    override fun cancel() {
        call.cancel()
    }

    override fun clone(): Call<ChargeResult> {
        return factory.create(nonce, lineItems)
    }

    override fun enqueue(callback: sqip.Callback<ChargeResult>) {
        // We will only be using synchronous calls at the moment ...
    }

    override fun execute(): ChargeResult {
        val response: Response<Void>
        try{
            response = call.execute()
        }catch (e: IOException){
            println("DBG: " + e)
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
                println("DBG: " + errorBody)
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

        fun create(nonce: String, lineItems: List<LineItem>): Call<ChargeResult> {
            return ChargeCall(this, nonce, lineItems)
        }
    }
}