package org.example.sweetea.dataclasses.local

import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.LocationData
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.dataclasses.retrieved.SquareApiRequest


class SquareRepository {
    private val squareService = KtorServiceHandler().squareService
    suspend fun getLocations(): List<LocationData>?{
        val locationResult = squareService.getLocations()
        println("Successfully got location: ${locationResult.isSuccess}")
        return locationResult.onFailure{println(it)}.getOrNull()?.data
    }
    suspend fun getCategories(): List<CategoryData>?{
        val categoryResult = squareService.getCategories()
        println("Successfully got category: ${categoryResult.isSuccess}")
        return categoryResult.onFailure{println(it)}.getOrNull()?.data
    }
    suspend fun getProducts(locationID: String): List<ProductData>?{
        val productsResult = squareService.getProducts(locationID)
        println("Successfully got products: ${productsResult.isSuccess}")
        return productsResult.onFailure{println(it)}.getOrNull()?.data
    }

}