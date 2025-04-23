package org.example.sweetea.database

import org.example.sweetea.ProductOrder
import org.example.sweetea.database.OrderedProductSchema.ProductOrders.dateOfSale
import org.example.sweetea.database.OrderedProductSchema.ProductOrders.modifiedProductIDs
import org.example.sweetea.database.OrderedProductSchema.ProductOrders.orderID
import org.example.sweetea.database.OrderedProductSchema.ProductOrders.prices
import org.example.sweetea.database.OrderedProductSchema.ProductOrders.quantities
import org.example.sweetea.database.model.DatabaseSchema
import org.example.sweetea.database.model.ModifiedProductRepository
import org.example.sweetea.database.model.OrderRepository
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.kotlin.datetime.date
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction

class OrderedProductSchema(
    database: Database,
    private val modifiedProductRepository: ModifiedProductRepository
): OrderRepository, DatabaseSchema(){
    object ProductOrders: Table(){
        val orderID = ulong("orderID").autoIncrement()
        val emailAddress = varchar("emailAddress", length = 255)
        val modifiedProductIDs = array<ULong>("modifiedProductIDs")
        val quantities = array<Int>("quantities")
        val prices = array<String>("prices")
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
                it[modifiedProductIDs] = order.modifiedProductIDs
                it[quantities] = order.quantities
                it[prices] = order.prices
                it[dateOfSale] = order.date
            }[orderID]
        }
    }

    override suspend fun allOrders(emailAddress: String): List<ProductOrder?> {
        return ProductOrders.selectAll().where{
            ProductOrders.emailAddress eq emailAddress
        }.map { orderedProduct ->
            orderedProduct[modifiedProductIDs].map{ modifiedProductID ->
                modifiedProductRepository.getProduct(modifiedProductID)
            }.let { modifiedProducts ->
                ProductOrder(
                    orderedProduct[orderID],
                    orderedProduct[ProductOrders.emailAddress],
                    modifiedProducts,
                    orderedProduct[quantities],
                    orderedProduct[prices],
                    orderedProduct[dateOfSale]
                )
            }
        }.toList()
    }


}