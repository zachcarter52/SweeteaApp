package org.example.sweetea.dataclasses.local

import org.example.sweetea.Favorites
import org.example.sweetea.ModifiedProduct
import org.example.sweetea.ResponseClasses.AppStatus

interface ServerApiService {
    suspend fun getAppStatus(): Result<AppStatus>
    suspend fun getFavorites(emailAddress: String): Result<Favorites>
    suspend fun addFavorite(emailAddress: String, modifiedProduct: ModifiedProduct)
    suspend fun removeFavorite(emailAddress: String, modifiedProduct: ModifiedProduct)
}