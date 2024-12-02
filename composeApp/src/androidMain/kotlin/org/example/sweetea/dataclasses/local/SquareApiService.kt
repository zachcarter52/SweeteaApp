package org.example.sweetea.dataclasses.local

import org.example.sweetea.Constants.Companion
import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.LocationData
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.dataclasses.retrieved.SquareApiRequest
import retrofit2.http.GET
import retrofit2.http.Path

interface SquareApiService {
    @GET(Companion.LOCATIONS_ENDPOINT)
    suspend fun getLocations(): SquareApiRequest<LocationData>
    @GET(Companion.CATEGORY_ENDPOINT)
    suspend fun getCategories(): SquareApiRequest<CategoryData>
    @GET("${Companion.LOCATIONS_ENDPOINT}{location}/${Companion.PRODUCTS_ENDPOINT}")
    suspend fun getProducts(@Path("location") locationID: String): SquareApiRequest<ProductData>
}
