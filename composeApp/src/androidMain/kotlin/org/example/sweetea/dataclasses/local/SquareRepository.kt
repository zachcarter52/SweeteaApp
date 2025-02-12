package org.example.sweetea.dataclasses.local

import android.content.Context
import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.LocationData
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.dataclasses.retrieved.SquareApiRequest


class SquareRepository(
    val internetStatus: Boolean
){
    private val squareApiService = RetrofitServiceHandler(internetStatus).squareService
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