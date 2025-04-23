package org.example.sweetea.database

import org.example.sweetea.Modifier
import org.example.sweetea.database.ModifiedProductSchema.ModifiedProducts
import org.example.sweetea.database.ModifierSchema.Modifiers.choiceID
import org.example.sweetea.database.ModifierSchema.Modifiers.databaseModifierID
import org.example.sweetea.database.ModifierSchema.Modifiers.modifiedProductID
import org.example.sweetea.database.ModifierSchema.Modifiers.modifierID
import org.example.sweetea.database.ModifierSchema.Modifiers.popularity
import org.example.sweetea.database.model.DatabaseSchema
import org.example.sweetea.database.model.ModifierRepository
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.deleteWhere
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.update

class ModifierSchema(database: Database): ModifierRepository, DatabaseSchema() {
    object Modifiers: Table(){
        val databaseModifierID = ulong("databaseModifierID").autoIncrement()
        val modifiedProductID = ulong("modifiedProductID")
        val modifierID = varchar("modifierID", 24)
        val choiceID = varchar("choiceID", 24)
        val popularity = integer("popularity")

        override val primaryKey = PrimaryKey(databaseModifierID)
    }

    init {
        transaction(database) {
            SchemaUtils.create(Modifiers)
        }
    }

    override suspend fun getModifiers(modifiedProductID: ULong): List<Modifier> {
        return dbQuery {
            return@dbQuery Modifiers.selectAll().where{
                Modifiers.modifiedProductID eq modifiedProductID
            }.map{
                Modifier(
                    it[databaseModifierID],
                    it[Modifiers.modifiedProductID],
                    it[modifierID],
                    it[choiceID],
                    it[popularity]
                )
            }
        }
    }

    override suspend fun getModifier(databaseModifierID: ULong): Modifier{
        return dbQuery {
            return@dbQuery Modifiers.selectAll().where{
                Modifiers.databaseModifierID eq databaseModifierID
            }.map{
                Modifier(
                    it[Modifiers.databaseModifierID],
                    it[modifiedProductID],
                    it[modifierID],
                    it[choiceID],
                    it[popularity]
                )
            }.single()
        }
    }

    override suspend fun getExistingDatabaseModifierID(modifier: Modifier): ULong{
        return dbQuery {
            val existingModifierID = Modifiers.selectAll().where{
                (modifierID eq modifier.modifierID) and
                        (choiceID eq modifier.choiceID)
            }.map{ it[databaseModifierID] }.singleOrNull()
            return@dbQuery existingModifierID ?: 0UL
        }
    }

    override suspend fun addModifier(modifier: Modifier): ULong{
        val existingDatabaseModifierID = getExistingDatabaseModifierID(modifier)
        if(existingDatabaseModifierID != 0UL) {
            val existingModifier = getModifier(existingDatabaseModifierID)
            dbQuery {
                Modifiers.update({ Modifiers.databaseModifierID eq existingDatabaseModifierID}) {
                    it[popularity] = existingModifier.popularity + 1
                }
            }
            return existingDatabaseModifierID
        }
        return dbQuery {
            Modifiers.insert{
                it[modifiedProductID] = modifier.modifiedProductID
                it[modifierID] = modifier.modifierID
                it[choiceID] = modifier.choiceID
            }[databaseModifierID]
        }
    }

    override suspend fun removeModifier(modifier: Modifier): Boolean {
        if(modifier.databaseModifierID == 0UL) return false
        return dbQuery {
           Modifiers.deleteWhere { databaseModifierID eq modifier.databaseModifierID } == 1
        }

    }
}