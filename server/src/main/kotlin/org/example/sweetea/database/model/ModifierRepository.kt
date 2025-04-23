package org.example.sweetea.database.model

import org.example.sweetea.Modifier
import org.example.sweetea.database.ModifierSchema
import org.jetbrains.exposed.sql.Table

interface ModifierRepository {
    suspend fun getModifier(databaseModifierID: ULong): Modifier
    suspend fun getExistingDatabaseModifierID(modifier: Modifier): ULong
    suspend fun getModifiers(modifiedProductID: ULong): List<Modifier>
    suspend fun addModifier(modifier: Modifier): ULong
    suspend fun removeModifier(modifier: Modifier): Boolean
}