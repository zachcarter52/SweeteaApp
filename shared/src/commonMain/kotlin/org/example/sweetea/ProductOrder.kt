package org.example.sweetea

import kotlinx.serialization.Serializable
import kotlinx.datetime.*
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

@Serializable
open class ProductOrder(
    val orderID: ULong = 0UL,
    val emailAddress: String,
    val restaurantName: String,
    val orderedProducts: List<OrderedProduct>,
    val date: LocalDate = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()).date,
): Comparable<ProductOrder>{
    val modifiedProductIDs: List<ULong>
        get() = orderedProducts.map {it.modifiedProduct.modifiedProductID}
    override fun compareTo(other: ProductOrder): Int {
        return orderID.compareTo(other.orderID)
    }
    fun encodeToString():String {
        return Json.encodeToString(this)
    }
}