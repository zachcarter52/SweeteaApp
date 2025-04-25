package org.example.sweetea.database.model

import org.example.sweetea.ModifiedProduct

interface ModifiedProductRepository {
    suspend fun allModifiedProducts(): List<ModifiedProduct>
    suspend fun saveProduct(product: ModifiedProduct): ULong
    suspend fun getModifiedProduct(modifiedProductID: ULong): ModifiedProduct?
    suspend fun getModifiedProduct(product: ModifiedProduct): ModifiedProduct?
    suspend fun getProducts(productID: String): List<ModifiedProduct>
    suspend fun removeProduct(productID: String): Int
}