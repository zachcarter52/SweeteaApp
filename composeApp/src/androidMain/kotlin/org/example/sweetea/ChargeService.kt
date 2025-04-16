package org.example.sweetea

import com.squareup.moshi.JsonClass
import retrofit2.Call;
import retrofit2.http.Body
import retrofit2.http.POST

interface ChargeService {
    @POST("/chargeForCookie")
    fun charge(@Body request: ChargeRequest): Call<Void>

    @JsonClass(generateAdapter = true)
    data class ChargeRequest(val nonce: String)

    @JsonClass(generateAdapter = true)
    data class ChargeErrorResponse(
        val errorMessage: String
    )
}