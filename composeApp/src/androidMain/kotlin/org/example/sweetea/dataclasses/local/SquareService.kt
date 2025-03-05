package org.example.sweetea.dataclasses.local

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.get
import org.example.sweetea.Constants
import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.LocationData
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.dataclasses.retrieved.SquareApiRequest

class SquareService(private val ktor: HttpClient): SquareApiService{
    private val BASEURL = Constants.BASE_URL
    override suspend fun getLocations(): Result<SquareApiRequest<LocationData>> {
        return runCatching {
            println("Locations URL:\n $BASEURL${Constants.LOCATIONS_ENDPOINT}")
            ktor.get("$BASEURL${Constants.LOCATIONS_ENDPOINT}").body()
        }
    }

    override suspend fun getCategories(): Result<SquareApiRequest<CategoryData>> {
        return runCatching {
            ktor.get("$BASEURL${Constants.CATEGORY_ENDPOINT}").body()
        }
    }

    override suspend fun getProducts(locationID: String): Result<SquareApiRequest<ProductData>> {
        return runCatching {
            ktor.get("$BASEURL${Constants.LOCATIONS_ENDPOINT}${locationID}/${Constants.PRODUCTS_ENDPOINT}").body()
        }
    }

}