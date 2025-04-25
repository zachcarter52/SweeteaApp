package org.example.sweetea.dataclasses.local

import org.example.sweetea.Favorites
import org.example.sweetea.ModifiedProduct
import org.example.sweetea.ResponseClasses.AppStatus

class ServerRepository {
    private val serverService = KtorServiceHandler().serverService
    suspend fun getAppStatus(): AppStatus? {
        val statusResult = serverService.getAppStatus()
        println("Successfully got appStatus: ${statusResult.isSuccess}")
        return statusResult.getOrNull()
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
    ) = serverService.addFavorite(emailAddress, modifiedProduct)

    suspend fun removeFavorite(
        emailAddress: String,
        modifiedProduct: ModifiedProduct
    ) = serverService.removeFavorite(emailAddress, modifiedProduct)
}