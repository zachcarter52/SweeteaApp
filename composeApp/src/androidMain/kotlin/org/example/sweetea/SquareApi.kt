package org.example.sweetea

import org.example.sweetea.Constants.Companion
import org.example.sweetea.dataclasses.*
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET
import retrofit2.http.Path
import kotlin.coroutines.suspendCoroutine

interface SquareApiService {
    @GET(Companion.LOCATIONS_ENDPOINT)
    fun getLocations(): Call<SquareApiRequest<LocationData>>
    @GET(Companion.CATEGORY_ENDPOINT)
    fun getCategories(): Call<SquareApiRequest<CategoryData>>
    @GET("${Companion.LOCATIONS_ENDPOINT}{location}/${Companion.PRODUCTS_ENDPOINT}")
    fun getProducts(@Path("location") locationID: String): Call<SquareApiRequest<ProductData>>
}
object SquareApi {
    private val retrofit = Retrofit.Builder()
        .baseUrl(Companion.BASE_URL)
        .addConverterFactory(GsonConverterFactory.create())
        .build()
    private val retrofitService: SquareApiService = retrofit.create(SquareApiService::class.java)
    private var locationRequest: SquareApiRequest<LocationData>? = null
    private var defaultLocation: LocationData? = null
    var currentLocation: LocationData? = null

    private var categoryData: List<CategoryData>? = null

    private var currentProductData: List<ProductData>? = null
    private var locationData: List<LocationData>? = null

    fun getLocations(): List<LocationData>? {
        if(locationRequest == null) {
            retrofitService.getLocations().enqueue(
                object : Callback<SquareApiRequest<LocationData>> {
                    override fun onResponse(
                        call: Call<SquareApiRequest<LocationData>>,
                        response: Response<SquareApiRequest<LocationData>>
                    ) {
                        if (response.isSuccessful && response.body() != null) {
                            locationRequest = response.body()!!
                            locationData = response.body()!!.data
                            locationData!!.forEach { location ->
                                if (location.address.data.is_primary) {
                                    defaultLocation = location
                                }
                            }
                            //println(response.body())
                        }
                    }

                    override fun onFailure(
                        call: Call<SquareApiRequest<LocationData>>,
                        t: Throwable
                    ) {
                        println("Failed to find locations: ${t.message}")
                    }
                }
            )
        }
        return locationData
    }

    fun getCategories(): List<CategoryData>? {
        if (categoryData == null) {
            retrofitService.getCategories().enqueue(
                object : Callback<SquareApiRequest<CategoryData>> {
                    override fun onResponse(
                        call: Call<SquareApiRequest<CategoryData>>,
                        response: Response<SquareApiRequest<CategoryData>>
                    ) {
                        if (response.isSuccessful && response.body() != null) {
                            categoryData = response.body()!!.data
                            ///println(response.body())
                        }
                    }

                    override fun onFailure(
                        call: Call<SquareApiRequest<CategoryData>>,
                        t: Throwable
                    ) {
                        println("Failed to find categories: ${t.message}")
                    }

                }
            )
        }
        return categoryData
    }

    fun getProducts(location: LocationData? = defaultLocation): List<ProductData>? {
        if (location == null) return null
        if (location != currentLocation || currentProductData == null) {
            retrofitService.getProducts(location.id).enqueue(
                object : Callback<SquareApiRequest<ProductData>> {
                    override fun onResponse(
                        call: Call<SquareApiRequest<ProductData>>,
                        response: Response<SquareApiRequest<ProductData>>
                    ) {
                        if (response.isSuccessful && response.body() != null) {
                            currentProductData = response.body()!!.data
                            ///println(response.body())
                        }
                    }

                    override fun onFailure(
                        call: Call<SquareApiRequest<ProductData>>,
                        t: Throwable
                    ) {
                        println("Failed to find products: ${t.message}")
                    }

                }
            )
        }
        return currentProductData
    }
}