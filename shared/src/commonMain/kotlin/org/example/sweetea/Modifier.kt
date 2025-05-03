package org.example.sweetea

import kotlinx.serialization.Serializable

@Serializable
data class Modifier(
    val databaseModifierID: ULong = 0UL,
    val modifiedProductID: ULong = 0UL,
    val modifierID: String,
    val choiceID: String,
): Comparable<Modifier>{
    override fun compareTo(other: Modifier): Int {
        if(databaseModifierID == 0UL || other.databaseModifierID == 0UL){
            val modifiedProductIDComp = modifiedProductID.compareTo(other.modifiedProductID)
            if(modifiedProductIDComp != 0) return modifiedProductIDComp
            val modifierIDComp = modifierID.compareTo(other.modifierID)
            if(modifierIDComp != 0) return modifierIDComp
            val choiceIDComp = choiceID.compareTo(other.choiceID)
            return choiceIDComp

        } else {
            return databaseModifierID.compareTo(databaseModifierID)
        }
    }
}