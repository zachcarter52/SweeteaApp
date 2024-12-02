package org.example.sweetea.dataclasses.local

import org.example.sweetea.Constants.Companion
import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.LocationData
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.dataclasses.retrieved.SquareApiRequest
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory


object RetrofitServiceHandler {
    private val retrofit:Retrofit by lazy {
        Retrofit.Builder()
            .baseUrl(Companion.BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }
    val squareService: SquareApiService by lazy {
        retrofit.create(SquareApiService::class.java)
    }
}