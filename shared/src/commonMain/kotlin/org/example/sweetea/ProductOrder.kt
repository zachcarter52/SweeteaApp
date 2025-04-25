package org.example.sweetea

import kotlinx.serialization.Serializable
import kotlinx.datetime.*

@Serializable
open class ProductOrder(
    val orderID: ULong,
    val emailAddress: String,
    val orderedProducts: List<OrderedProduct>,
    val date: LocalDate = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()).date,
): Comparable<ProductOrder>{
    val modifiedProductIDs: List<ULong>
        get() = orderedProducts.map {it.modifiedProduct.modifiedProductID}
    override fun compareTo(other: ProductOrder): Int {
        return orderID.compareTo(other.orderID)
    }
}