package org.example.sweetea

import kotlinx.serialization.Serializable

@Serializable
data class Favorites (
    val emailAddress: String,
    val modifiedProducts: List<ModifiedProduct?>
): Comparable<Favorites>{
    val modifiedProductIDs: List<ULong>
        get() = modifiedProducts.map{it!!.modifiedProductID}

    override fun compareTo(other: Favorites): Int {
        return emailAddress.compareTo(other.emailAddress)
    }

    fun isFavorited(modifiedProduct: ModifiedProduct):Boolean {
        modifiedProducts.forEach {
            if(it!!.compareTo(modifiedProduct) == 0) return true
        }
        return false
    }

}