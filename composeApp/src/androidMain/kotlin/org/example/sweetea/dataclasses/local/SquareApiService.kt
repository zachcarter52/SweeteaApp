package org.example.sweetea.dataclasses.local

import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.LocationData
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.dataclasses.retrieved.SquareApiRequest

interface SquareApiService {
    suspend fun getLocations(): Result<SquareApiRequest<LocationData>>
    suspend fun getCategories(): Result<SquareApiRequest<CategoryData>>
    suspend fun getProducts(locationID: String): Result<SquareApiRequest<ProductData>>
}