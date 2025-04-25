package org.example.sweetea.database

import org.example.sweetea.ProductOrder
import org.example.sweetea.database.OrderSchema.ProductOrders.dateOfSale
import org.example.sweetea.database.OrderSchema.ProductOrders.orderID
import org.example.sweetea.database.model.DatabaseSchema
import org.example.sweetea.database.model.ModifiedProductRepository
import org.example.sweetea.database.model.OrderRepository
import org.example.sweetea.database.model.OrderedProductRepository
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.kotlin.datetime.date
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction

class OrderSchema(
    database: Database,
    private val orderedProductRepository: OrderedProductRepository
): OrderRepository, DatabaseSchema(){
    object ProductOrders: Table(){
        val orderID = ulong("orderID").autoIncrement()
        val emailAddress = varchar("emailAddress", length = 255)
        val dateOfSale = date("dateOfSale")

        override val primaryKey = PrimaryKey(orderID)
    }

    init{
        transaction(database){
            SchemaUtils.create(ProductOrders)
        }
    }

    override suspend fun addOrder(order: ProductOrder): ULong {
        return dbQuery {
            return@dbQuery ProductOrders.insert {
                it[emailAddress] = order.emailAddress
                it[dateOfSale] = order.date
            }[orderID]
        }
    }

    override suspend fun allOrders(emailAddress: String): List<ProductOrder> {
        return ProductOrders.selectAll().where{
            ProductOrders.emailAddress eq emailAddress
        }.map {
            ProductOrder(
                it[orderID],
                it[ProductOrders.emailAddress],
                orderedProductRepository.allOrderedProducts(it[orderID]),
                it[dateOfSale]
            )
        }
    }


}