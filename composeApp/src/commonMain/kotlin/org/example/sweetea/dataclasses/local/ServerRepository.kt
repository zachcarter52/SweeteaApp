package org.example.sweetea.dataclasses.local

import org.example.sweetea.Favorites
import org.example.sweetea.ModifiedProduct
import org.example.sweetea.ProductOrder
import org.example.sweetea.ResponseClasses.AppStatus

class ServerRepository {
    private val serverService = KtorServiceHandler().serverService
    suspend fun getAppStatus(emailAddress: String? = null): AppStatus? {
        val statusResult = serverService.getAppStatus(emailAddress)
        println("Successfully got appStatus: ${statusResult.isSuccess}")
        return statusResult.getOrNull()
    }

    suspend fun saveOrder(
        order: ProductOrder
    ): ULong?{
        val newOrderID = serverService.saveOrder(order);
        println("Successfully saved order; ${newOrderID.isSuccess}")
        return newOrderID.getOrNull()
    }

    suspend fun getOrders(emailAddress: String): List<ProductOrder>?{
        val orders = serverService.getOrders(emailAddress)
        println("Successfully got orders; ${orders.isSuccess}")
        return orders.getOrNull()
    }

    suspend fun getFavorites(
        emailAddress: String
    ): Favorites?{
        val favoritesResult = serverService.getFavorites(emailAddress)
        println("Successfully got appStatus: ${favoritesResult.isSuccess}")
        return favoritesResult.getOrNull()
    }

    suspend fun addFavorite(
        emailAddress: String,
        modifiedProduct: ModifiedProduct
    ): ULong? = serverService.addFavorite(emailAddress, modifiedProduct).getOrNull()

    suspend fun removeFavorite(
        emailAddress: String,
        modifiedProduct: ModifiedProduct
    ) = serverService.removeFavorite(emailAddress, modifiedProduct)
}