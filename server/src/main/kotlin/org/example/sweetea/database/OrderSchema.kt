package org.example.sweetea.database

import org.example.sweetea.ProductOrder
import org.example.sweetea.database.OrderSchema.ProductOrders.dateOfSale
import org.example.sweetea.database.OrderSchema.ProductOrders.orderID
import org.example.sweetea.database.OrderSchema.ProductOrders.restaurantName
import org.example.sweetea.database.model.DatabaseSchema
import org.example.sweetea.database.model.OrderRepository
import org.example.sweetea.database.model.OrderedProductRepository
import org.example.sweetea.database.model.RewardRepository
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.kotlin.datetime.date
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction

class OrderSchema(
    database: Database,
    private val orderedProductRepository: OrderedProductRepository,
    private val rewardRepository: RewardRepository
): OrderRepository, DatabaseSchema(){
    object ProductOrders: Table(){
        val orderID = ulong("orderID").autoIncrement()
        val emailAddress = varchar("emailAddress", length = 255)
        val restaurantName = varchar("restaurantName", length = 255)
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
            val newID = ProductOrders.insert {
                it[emailAddress] = order.emailAddress
                it[dateOfSale] = order.date
                it[restaurantName] = order.restaurantName
            }[orderID]
            var totalPrice = 0f
            order.orderedProducts.forEach{
                orderedProductRepository.saveProduct(it.copy(orderID = newID))
                totalPrice += (it.price * it.quantity)
            }
            if(order.emailAddress.isNotEmpty()) {
                rewardRepository.updateBearValue(order.emailAddress, totalPrice.toInt())
            }
            return@dbQuery newID
        }
    }

    override suspend fun allOrders(emailAddress: String): List<ProductOrder> {
        return dbQuery{
            ProductOrders.selectAll().where{
                ProductOrders.emailAddress eq emailAddress
            }.map {
                ProductOrder(
                    it[orderID],
                    it[ProductOrders.emailAddress],
                    it[restaurantName],
                    orderedProductRepository.allOrderedProducts(it[orderID]),
                    it[dateOfSale]
                )
            }
        }
    }


}