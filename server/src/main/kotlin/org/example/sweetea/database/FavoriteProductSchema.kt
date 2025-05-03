package org.example.sweetea.database

import org.example.sweetea.Favorites
import org.example.sweetea.ModifiedProduct
import org.example.sweetea.database.FavoriteProductSchema.FavoriteProductsTable.favoriteProductID
import org.example.sweetea.database.FavoriteProductSchema.FavoriteProductsTable.modifiedProductID
import org.example.sweetea.database.model.DatabaseSchema
import org.example.sweetea.database.model.FavoriteProductsRepository
import org.example.sweetea.database.model.ModifiedProductRepository
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

class FavoriteProductSchema(
    database: Database,
    private val modifiedProductRepository: ModifiedProductRepository,
): FavoriteProductsRepository, DatabaseSchema(){

    object FavoriteProductsTable: Table(){
        val favoriteProductID = ulong("favoriteProductID").autoIncrement()
        val emailAddress = varchar("emailAddress", 255)
        val modifiedProductID = ulong("modifiedProductIDs")

        override val primaryKey = PrimaryKey(favoriteProductID)
    }

    init{
        transaction(database){
            SchemaUtils.create(FavoriteProductsTable)
        }
    }

    override suspend fun getFavorites(emailAddress: String): Favorites {
        return dbQuery {
            return@dbQuery Favorites(
                emailAddress,
                FavoriteProductsTable.selectAll().where{
                    FavoriteProductsTable.emailAddress eq emailAddress
                }.map{
                    modifiedProductRepository.getModifiedProduct(it[modifiedProductID])
                }
            )
        }
    }

    private suspend fun getFavoriteProductID(
        emailAddress: String,
        modifiedProduct: ModifiedProduct
    ):ULong{
        return dbQuery {
            FavoriteProductsTable.selectAll().where{
                (FavoriteProductsTable.emailAddress eq emailAddress) and
                        (modifiedProductID eq modifiedProduct.modifiedProductID)
            }.singleOrNull()?.get(favoriteProductID) ?: 0UL
        }
    }


    override suspend fun addFavoriteProduct(
        emailAddress: String,
        modifiedProduct: ModifiedProduct
    ): ULong{
        var actualModifiedProductID = modifiedProduct.modifiedProductID
        if(actualModifiedProductID == 0UL) {
            val existingProduct = modifiedProductRepository.getModifiedProduct(modifiedProduct)
            actualModifiedProductID = existingProduct?.modifiedProductID
                ?: modifiedProductRepository.saveProduct(modifiedProduct)
        }
        val existingFavoriteProductID = getFavoriteProductID(
            emailAddress,
            ModifiedProduct(
                actualModifiedProductID,
                modifiedProduct.productID,
                modifiedProduct.modifiers
            )
        )
        if(existingFavoriteProductID != 0UL) return existingFavoriteProductID
        return dbQuery {
            FavoriteProductsTable.insert {
                it[FavoriteProductsTable.emailAddress] = emailAddress
                it[modifiedProductID] = actualModifiedProductID
            }[favoriteProductID]
        }
    }

    override suspend fun removeFavorite(emailAddress: String, modifiedProductID: ULong): Boolean {
        return dbQuery {
            return@dbQuery FavoriteProductsTable.deleteWhere {
                (FavoriteProductsTable.emailAddress eq emailAddress) and
                        (FavoriteProductsTable.modifiedProductID eq modifiedProductID)
            } > 0
        }
    }

    override suspend fun removeFavorite(
        emailAddress: String,
        modifiedProduct: ModifiedProduct
    ): Boolean {
        if(modifiedProduct.modifiedProductID == 0UL){
            val actualModifiedProduct = modifiedProductRepository.getModifiedProduct(modifiedProduct)!!
            return removeFavorite(emailAddress, actualModifiedProduct.modifiedProductID)
        } else {
            return removeFavorite(emailAddress, modifiedProduct.modifiedProductID)
        }
    }
}