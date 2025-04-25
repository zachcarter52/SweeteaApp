package org.example.sweetea.database.model

import org.example.sweetea.OrderedProduct

interface OrderedProductRepository {
    suspend fun allOrderedProducts(orderID: ULong): List<OrderedProduct>
    suspend fun saveProduct(product: OrderedProduct): ULong
    suspend fun getProduct(orderedProductID: ULong): OrderedProduct?
    suspend fun removeOrderProducts(orderID: ULong): Int
}