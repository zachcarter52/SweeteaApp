package org.example.sweetea.database

import org.example.sweetea.database.model.DatabaseSchema
import org.example.sweetea.ModifiedProduct
import org.example.sweetea.database.ModifiedProductSchema.ModifiedProducts.modifiedProductID
import org.example.sweetea.database.ModifiedProductSchema.ModifiedProducts.productID
import org.example.sweetea.database.ModifiedProductSchema.ModifiedProducts.popularity
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
import org.jetbrains.exposed.sql.update

class ModifiedProductSchema(
    database: Database,
    private val modifierRepository: ModifierRepository
) : ModifiedProductRepository, DatabaseSchema(){
    object ModifiedProducts: Table(){
        val modifiedProductID = ulong("modifiedProductID").autoIncrement()
        val productID = varchar("drinkID", 24)
        val popularity = integer("popularity")

        override val primaryKey = PrimaryKey(modifiedProductID)
    }

    init {
        transaction(database) {
            SchemaUtils.create(ModifiedProducts)
        }
    }

    override suspend fun getProduct(modifiedProductID: ULong): ModifiedProduct? {
        return dbQuery {
            return@dbQuery ModifiedProducts.selectAll().where{
                ModifiedProducts.modifiedProductID eq modifiedProductID
            }.map {
                ModifiedProduct(
                    modifiedProductID,
                    it[productID],
                    modifierRepository.getModifiers(modifiedProductID),
                    it[popularity]
                )
            }.singleOrNull()
        }
    }
    override suspend fun getProduct(product: ModifiedProduct): ModifiedProduct? {
        return dbQuery {
            if(product.modifiedProductID == 0UL)  {
                var modifierID = 0UL
                product.modifiers.forEach {
                    if(modifierID == 0UL) {
                        val existingModifierID = modifierRepository.getExistingDatabaseModifierID(it)
                        if (existingModifierID > 0UL) modifierID = existingModifierID
                    }
                }
                if(modifierID > 0UL){
                    return@dbQuery getProduct(modifierRepository.getModifier(modifierID).modifiedProductID)
                } else {
                    return@dbQuery null
                }

            } else {
                return@dbQuery getProduct(product.modifiedProductID)
            }
        }
    }

    override suspend fun saveProduct(product: ModifiedProduct): ULong {
        val existingModifiedProduct = getProduct(product)
        if(existingModifiedProduct != null){
            dbQuery {
                ModifiedProducts.update({ modifiedProductID eq existingModifiedProduct.modifiedProductID }) {
                    it[popularity] = existingModifiedProduct.popularity + 1
                }
            }
            return existingModifiedProduct.modifiedProductID
        } 
        return dbQuery {
            product.modifiers.forEach {
                modifierRepository.addModifier(it)
            }
            return@dbQuery ModifiedProducts.insert{
                it[productID] = product.productID
                it[popularity] = 1
            }[modifiedProductID]
        }
    }


    override suspend fun allSavedProducts(): List<ModifiedProduct> {
        return dbQuery {
            ModifiedProducts.selectAll().map{
                ModifiedProduct(
                    it[modifiedProductID],
                    it[productID],
                    modifierRepository.getModifiers(it[modifiedProductID]),
                    it[popularity]
                )
            }
        }
    }

    override suspend fun removeProduct(product: ModifiedProduct): Int{
        val existingModifiedProduct = getProduct(product)
        if(existingModifiedProduct != null){
            if(existingModifiedProduct.popularity > 1) {
                ModifiedProducts.update({ modifiedProductID eq existingModifiedProduct.modifiedProductID }) {
                    it[popularity] = existingModifiedProduct.popularity - 1
                }
                return existingModifiedProduct.popularity - 1
            } else {
                return dbQuery {
                    ModifiedProducts.deleteWhere {
                        modifiedProductID eq product.modifiedProductID
                    }
                    return@dbQuery 0
                }
            }
        } else {
            return -1
        }
    }
}