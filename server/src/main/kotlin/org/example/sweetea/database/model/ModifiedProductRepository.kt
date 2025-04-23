package org.example.sweetea.database.model

import org.example.sweetea.ModifiedProduct

interface ModifiedProductRepository {
    suspend fun saveProduct(product: ModifiedProduct): ULong
    suspend fun getProduct(modifiedProductID: ULong): ModifiedProduct?
    suspend fun getProduct(product: ModifiedProduct): ModifiedProduct?
    suspend fun allSavedProducts(): List<ModifiedProduct>
    suspend fun removeProduct(product: ModifiedProduct): Int
}