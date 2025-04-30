package org.example.sweetea

import kotlinx.serialization.Serializable

@Serializable
data class OrderedProduct (
    val orderedProductID: ULong = 0UL,
    val orderID: ULong = 0UL,
    val modifiedProduct: ModifiedProduct,
    val quantity: Int,
    val price: Float,
)