package org.example.sweetea.dataclasses.local

import org.example.sweetea.Constants
import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.LocationData
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.dataclasses.retrieved.SquareApiRequest
import retrofit2.http.GET
import retrofit2.http.Path

interface SquareApiService {
    @GET(Constants.LOCATIONS_ENDPOINT)
    suspend fun getLocations(): SquareApiRequest<LocationData>
    @GET(Constants.CATEGORY_ENDPOINT)
    suspend fun getCategories(): SquareApiRequest<CategoryData>
    @GET("${Constants.LOCATIONS_ENDPOINT}{location}/${Constants.PRODUCTS_ENDPOINT}")
    suspend fun getProducts(@Path("location") locationID: String): SquareApiRequest<ProductData>
}
