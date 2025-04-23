package org.example.sweetea

import kotlinx.serialization.Serializable

@Serializable
open class ModifiedProduct (
    val modifiedProductID: ULong = 0UL,
    val productID: String,
    //Modifier format is "ModifierID:ChoiceID"
    val modifiers: List<Modifier>,
    val popularity: Int = 1,
): Comparable<ModifiedProduct>{
    override fun compareTo(other: ModifiedProduct): Int {
        val drinkIDComp = productID.compareTo(other.productID)
        if(drinkIDComp != 0) return drinkIDComp
        val modifierCountComp = modifiers.size.compareTo(other.modifiers.size)
        if(modifierCountComp != 0) return modifierCountComp
        modifiers.forEachIndexed{ index, modifier ->
            val modifierComp = modifier.compareTo(other.modifiers[index])
            if(modifierComp != 0) return modifierComp
        }
        return 0
    }
}