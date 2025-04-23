package org.example.sweetea.database.model

import org.example.sweetea.ProductOrder

interface OrderRepository {
    suspend fun addOrder(order: ProductOrder): ULong
    suspend fun allOrders(emailAddress: String): List<ProductOrder?>
}
