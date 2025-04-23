package org.example.sweetea

import kotlinx.serialization.Serializable
import kotlinx.datetime.*

@Serializable
open class ProductOrder(
    val orderID: ULong = 0UL,
    val emailAddress: String,
    val modifiedProducts: List<ModifiedProduct?>,
    val quantities: List<Int>,
    val prices: List<String>,
    val date: LocalDate = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()).date,
): Comparable<ProductOrder>{
    val modifiedProductIDs: List<ULong>
        get() = modifiedProducts.map { it -> it?.modifiedProductID ?: 0UL }
    override fun compareTo(other: ProductOrder): Int {
        return orderID.compareTo(other.orderID)
    }
}