package org.example.sweetea.database

import org.example.sweetea.database.model.DatabaseSchema
import org.example.sweetea.ModifiedProduct
import org.example.sweetea.Modifier
import org.example.sweetea.database.ModifiedProductSchema.ModifiedProducts.modifiedProductID
import org.example.sweetea.database.ModifiedProductSchema.ModifiedProducts.productID
import org.example.sweetea.database.model.ModifiedProductRepository
import org.example.sweetea.database.model.ModifierRepository
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.deleteWhere
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction

class ModifiedProductSchema(
    database: Database,
    private val modifierRepository: ModifierRepository
) : ModifiedProductRepository, DatabaseSchema(){
    object ModifiedProducts: Table(){
        val modifiedProductID = ulong("modifiedProductID").autoIncrement()
        val productID = varchar("drinkID", 24)

        override val primaryKey = PrimaryKey(modifiedProductID)
    }

    init {
        transaction(database) {
            SchemaUtils.create(ModifiedProducts)
        }
    }

    override suspend fun getProducts(productID: String): List<ModifiedProduct>{
        return dbQuery {
            return@dbQuery ModifiedProducts.selectAll().where{
                ModifiedProducts.productID eq productID
            }.map{
                ModifiedProduct(
                    it[modifiedProductID],
                    productID,
                    modifierRepository.getModifiers(it[modifiedProductID]),
                )
            }
        }

    }

    override suspend fun getModifiedProduct(modifiedProductID: ULong): ModifiedProduct? {
        return dbQuery {
            return@dbQuery ModifiedProducts.selectAll().where{
                ModifiedProducts.modifiedProductID eq modifiedProductID
            }.map {
                ModifiedProduct(
                    modifiedProductID,
                    it[productID],
                    modifierRepository.getModifiers(modifiedProductID),
                )
            }.getOrNull(0)
        }
    }
    override suspend fun getModifiedProduct(product: ModifiedProduct): ModifiedProduct? {
        return dbQuery {
            if(product.modifiedProductID == 0UL) {
                val potentialDatabaseModifierIDLists = product.modifiers.map {
                    modifierRepository.getIdenticalModifierIDs(it)
                }
                if (potentialDatabaseModifierIDLists.isEmpty()) return@dbQuery null
                val potentialDatabaseModifierIDs = potentialDatabaseModifierIDLists[0]
                potentialDatabaseModifierIDLists.forEachIndexed { index, it ->
                    if(index > 0) potentialDatabaseModifierIDs.intersect(it.toSet())
                }
                if(potentialDatabaseModifierIDs.isNotEmpty()){
                    return@dbQuery getModifiedProduct(potentialDatabaseModifierIDs[0])
                }
                return@dbQuery null
            } else {
                return@dbQuery getModifiedProduct(product.modifiedProductID)
            }
        }
    }

    override suspend fun saveProduct(product: ModifiedProduct): ULong {
        val existingModifiedProduct = getModifiedProduct(product)
        if(existingModifiedProduct != null){
            return existingModifiedProduct.modifiedProductID
        } else {
            return dbQuery {
                val newModifiedProductID = ModifiedProducts.insert {
                    it[productID] = product.productID
                }[modifiedProductID]
                product.modifiers.forEach {
                    modifierRepository.addModifier(
                        Modifier(
                            it.databaseModifierID,
                            newModifiedProductID,
                            it.modifierID,
                            it.choiceID
                        )
                    )
                }
                return@dbQuery newModifiedProductID
            }
        }
    }


    override suspend fun allModifiedProducts(): List<ModifiedProduct> {
        return dbQuery {
            ModifiedProducts.selectAll().map{
                ModifiedProduct(
                    it[modifiedProductID],
                    it[productID],
                    modifierRepository.getModifiers(it[modifiedProductID]),
                )
            }
        }
    }

    override suspend fun removeProduct(productID: String): Int{
        return dbQuery {
            getProducts(productID).forEach {
                modifierRepository.removeProductModifiers(it.modifiedProductID)
            }
            return@dbQuery ModifiedProducts.deleteWhere {
                ModifiedProducts.productID eq productID
            }
        }
    }
}