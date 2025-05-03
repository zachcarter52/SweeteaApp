package org.example.sweetea.database.model

import org.example.sweetea.Modifier
import org.example.sweetea.database.ModifierSchema
import org.jetbrains.exposed.sql.Table

interface ModifierRepository {
    suspend fun getModifier(databaseModifierID: ULong): Modifier?
    suspend fun getIdenticalModifierIDs(modifier: Modifier): List<ULong>
    suspend fun getDatabaseModifierID(modifier: Modifier): ULong?
    suspend fun getModifiers(modifiedProductID: ULong): List<Modifier>
    suspend fun addModifier(modifier: Modifier): ULong
    suspend fun removeProductModifiers(modifiedProductID: ULong): Boolean
}