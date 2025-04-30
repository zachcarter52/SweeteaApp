package org.example.sweetea.database

import org.example.sweetea.Modifier
import org.example.sweetea.database.ModifierSchema.Modifiers.choiceID
import org.example.sweetea.database.ModifierSchema.Modifiers.databaseModifierID
import org.example.sweetea.database.ModifierSchema.Modifiers.modifiedProductID
import org.example.sweetea.database.ModifierSchema.Modifiers.modifierID
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

class ModifierSchema(database: Database): ModifierRepository, DatabaseSchema() {
    object Modifiers: Table(){
        val databaseModifierID = ulong("databaseModifierID").autoIncrement()
        val modifiedProductID = ulong("modifiedProductID")
        val modifierID = varchar("modifierID", 32)
        val choiceID = varchar("choiceID", 32)

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
                    modifiedProductID,
                    it[modifierID],
                    it[choiceID],
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
                    databaseModifierID,
                    it[modifiedProductID],
                    it[modifierID],
                    it[choiceID],
                )
            }.single()
        }
    }

    override suspend fun getIdenticalModifierIDs(modifier: Modifier): List<ULong> {
        return dbQuery {
            return@dbQuery Modifiers.selectAll().where {
                (modifierID eq modifier.modifierID) and
                        (choiceID eq modifier.choiceID)
            }.map { it[modifiedProductID] }
        }
    }

    override suspend fun getDatabaseModifierID(modifier: Modifier): ULong?{
        return dbQuery {
            return@dbQuery Modifiers.selectAll().where{
                (modifiedProductID eq modifier.modifiedProductID)
                (modifierID eq modifier.modifierID) and
                        (choiceID eq modifier.choiceID)
            }.map{ it[databaseModifierID] }.singleOrNull()
        }
    }

    override suspend fun addModifier(modifier: Modifier): ULong{
        return dbQuery {
            Modifiers.insert{
                it[modifiedProductID] = modifier.modifiedProductID
                it[modifierID] = modifier.modifierID
                it[choiceID] = modifier.choiceID
            }[databaseModifierID]
        }
    }

    override suspend fun removeProductModifiers(modifiedProductID: ULong): Boolean {
        return dbQuery {
           return@dbQuery Modifiers.deleteWhere {
               Modifiers.modifiedProductID eq modifiedProductID
           } > 0
        }

    }
}