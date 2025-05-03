package org.example.sweetea.database

import kotlinx.datetime.*
import org.example.sweetea.ProductOrder
import org.example.sweetea.database.model.OrderRepository
import org.example.sweetea.database.model.OrderedProductRepository
import org.example.sweetea.database.model.RewardRepository

class FakeOrderRepository(
    private val orderedProductRepository: OrderedProductRepository,
    private val rewardRepository: RewardRepository
): OrderRepository {
    class OrderInfo(
        val orderID: ULong,
        val emailAddress: String,
        val restaurantName: String,
        val date: LocalDate = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()).date,
    ) {
        suspend fun toOrder(orderedProductRepository: OrderedProductRepository) = ProductOrder(
            orderID,
            emailAddress,
            restaurantName,
            orderedProductRepository.allOrderedProducts(orderID),
            date
        )
    }
    private val orders = mutableMapOf(
        1UL to OrderInfo(
            1UL,
            "test@mail.com",
            "Roseville",
        ),
        2UL to OrderInfo(
            2UL,
            "test@mail.com",
            "Auburn"
        )
    )
    override suspend fun addOrder(order: ProductOrder): ULong {
        val newID = orders.size.toULong() + 1UL
        orders[newID] = OrderInfo(
            newID,
            order.emailAddress,
            order.restaurantName,
            order.date
        )
        order.orderedProducts.forEach {
            orderedProductRepository.saveProduct(it)
        }
        rewardRepository.updateBearValue(order.emailAddress, order.orderedProducts.map{it.price}.sum().toInt())
        return newID
    }

    override suspend fun allOrders(emailAddress: String): List<ProductOrder> {
        return orders.values.mapNotNull { value ->
            if(value.emailAddress == emailAddress){
                value.toOrder(orderedProductRepository)
            } else {
                null
            }
        }
    }
}