package org.example.sweetea.database.repository

import org.example.sweetea.OrderedProduct
import org.example.sweetea.database.model.ModifiedProductRepository
import org.example.sweetea.database.model.OrderedProductRepository

class FakeOrderedProductRepository(
    private val modifiedProductRepository: ModifiedProductRepository,
): OrderedProductRepository {
    class OrderedProductInfo(
        val orderedProductID: ULong,
        val orderID: ULong,
        val modifiedProductID: ULong,
        val quantity: Int,
        val price: Float
    ){
        suspend fun toOrderedProduct(modifiedProductRepository: ModifiedProductRepository): OrderedProduct{
            return OrderedProduct(
                orderedProductID,
                orderID,
                modifiedProductRepository.getModifiedProduct(modifiedProductID)!!,
                quantity,
                price
            )
        }
    }
    val orderedProducts = mutableMapOf(
        1UL to OrderedProductInfo(
            1UL,
            1UL,
            2UL,
            2,
            5.99f
        ),
        2UL to OrderedProductInfo(
            2UL,
            1UL,
            3UL,
            1,
            6.99f
        ),
        3UL to OrderedProductInfo(
            3UL,
            2UL,
            1UL,
            1,
            7.99f
        )
    )
    override suspend fun allOrderedProducts(orderID: ULong): List<OrderedProduct> {
        return orderedProducts.mapNotNull { (key, value) ->
            if(value.orderID == orderID){
                value.toOrderedProduct(modifiedProductRepository)
            } else {
                null
            }
        }
    }

    override suspend fun saveProduct(product: OrderedProduct): ULong {
        val modifiedProductID = if(product.modifiedProduct.modifiedProductID == 0UL) {
            modifiedProductRepository.getModifiedProduct(product.modifiedProduct)?.modifiedProductID
                ?: modifiedProductRepository.saveProduct(product.modifiedProduct)
        } else {
            product.modifiedProduct.modifiedProductID
        }
        val newID = orderedProducts.size.toULong() + 1UL
        orderedProducts[newID] = OrderedProductInfo(
            product.orderedProductID,
            product.orderID,
            modifiedProductID,
            product.quantity,
            product.price
        )
        return newID
    }

    override suspend fun getProduct(orderedProductID: ULong): OrderedProduct? {
        val existingProduct = orderedProducts[orderedProductID]
        return existingProduct?.toOrderedProduct(modifiedProductRepository)
    }

    override suspend fun removeOrderProducts(orderID: ULong): Int {
        var count = 0
        orderedProducts.forEach{ (key, value) ->
            if(value.orderID == orderID){
                orderedProducts.remove(key)
                count++
            }
        }
        return count
    }
}