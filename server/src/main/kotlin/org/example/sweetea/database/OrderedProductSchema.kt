package org.example.sweetea.database

import org.example.sweetea.OrderedProduct
import org.example.sweetea.database.OrderedProductSchema.OrderedProducts.modifiedProductID
import org.example.sweetea.database.OrderedProductSchema.OrderedProducts.orderID
import org.example.sweetea.database.OrderedProductSchema.OrderedProducts.orderedProductID
import org.example.sweetea.database.OrderedProductSchema.OrderedProducts.price
import org.example.sweetea.database.OrderedProductSchema.OrderedProducts.quantity
import org.example.sweetea.database.model.DatabaseSchema
import org.example.sweetea.database.model.ModifiedProductRepository
import org.example.sweetea.database.model.OrderedProductRepository
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.deleteWhere
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction

class OrderedProductSchema(
    database: Database,
    private val modifiedProductRepository: ModifiedProductRepository,
): OrderedProductRepository, DatabaseSchema() {
    object OrderedProducts: Table(){
        val orderedProductID = ulong("orderedProductID").autoIncrement()
        val orderID = ulong("orderID")
        val modifiedProductID = ulong("modifiedProductID")
        val quantity = integer("quantity")
        val price = float("price")

        override val primaryKey = PrimaryKey(orderedProductID)
    }

    init {
        transaction(database) {
            SchemaUtils.create(OrderedProducts)
        }
    }

    override suspend fun allOrderedProducts(orderID: ULong): List<OrderedProduct> {
        return dbQuery {
            OrderedProducts.selectAll().where{
                OrderedProducts.orderID eq orderID
            }.map{
                OrderedProduct(
                    it[orderedProductID],
                    it[OrderedProducts.orderID],
                    modifiedProductRepository.getModifiedProduct(it[modifiedProductID])!!,
                    it[quantity],
                    it[price]
                )
            }
        }
    }

    override suspend fun saveProduct(product: OrderedProduct): ULong {
        return dbQuery {
            val modifiedProductID = if(product.modifiedProduct.modifiedProductID == 0UL) {
                modifiedProductRepository.getModifiedProduct(product.modifiedProduct)?.modifiedProductID
                    ?: modifiedProductRepository.saveProduct(product.modifiedProduct)
            } else {
                product.modifiedProduct.modifiedProductID
            }
            OrderedProducts.insert {
                it[orderedProductID] = product.orderedProductID
                it[orderID] = product.orderID
                it[OrderedProducts.modifiedProductID] = modifiedProductID!!
                it[quantity] = product.quantity
                it[price] = product.price
            }[orderedProductID]
        }
    }

    override suspend fun getProduct(orderedProductID: ULong): OrderedProduct? {
        return dbQuery {
            return@dbQuery OrderedProducts.selectAll().where{
                OrderedProducts.orderedProductID eq orderedProductID
            }.map{
                OrderedProduct(
                    it[OrderedProducts.orderedProductID],
                    it[orderID],
                    modifiedProductRepository.getModifiedProduct(it[modifiedProductID])!!,
                    it[quantity],
                    it[price]
                )
            }.singleOrNull()
        }
    }

    override suspend fun removeOrderProducts(orderID: ULong): Int {
        return dbQuery {
            OrderedProducts.deleteWhere {
                OrderedProducts.orderID eq orderID
            }
        }
    }
}