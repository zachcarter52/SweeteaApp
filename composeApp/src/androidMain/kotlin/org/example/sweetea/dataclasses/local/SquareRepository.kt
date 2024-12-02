package org.example.sweetea.dataclasses.local

import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.LocationData
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.dataclasses.retrieved.SquareApiRequest


class SquareRepository{
    private val squareApiService = RetrofitServiceHandler.squareService
    suspend fun getLocations(): List<LocationData>{
        return squareApiService.getLocations().data
    }
    suspend fun getCategories(): List<CategoryData>{
        return squareApiService.getCategories().data
    }
    suspend fun getProducts(locationID: String): List<ProductData>{
        return squareApiService.getProducts(locationID).data
    }

}