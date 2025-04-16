package org.example.sweetea.model

data class Order(
    val id: String,
    val restaurantName: String,
    val items: List<String>,
    val totalAmount: Double,
    val orderDate: String // maybe other data types
)