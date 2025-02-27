package org.example.sweetea.dataclasses.local

import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.LocationData
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.dataclasses.retrieved.SquareApiRequest


class SquareRepository {
    private val squareService = KtorServiceHandler().squareService
    suspend fun getLocations(): List<LocationData>?{
        return squareService.getLocations().onFailure{println(it)}.getOrNull()?.data
    }
    suspend fun getCategories(): List<CategoryData>?{
        return squareService.getCategories().onFailure{println(it)}.getOrNull()?.data
    }
    suspend fun getProducts(locationID: String): List<ProductData>?{
        return squareService.getProducts(locationID).onFailure{println(it)}.getOrNull()?.data
    }

}