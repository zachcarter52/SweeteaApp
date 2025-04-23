package org.example.sweetea.database.model

import org.example.sweetea.Favorites
import org.example.sweetea.ModifiedProduct

interface FavoritesRepository {
    suspend fun getFavorites(emailAddress: String): Favorites?
    suspend fun addFavorite(emailAddress: String, modifiedProduct: ModifiedProduct): Favorites
    suspend fun removeFavorite(emailAddress: String, modifiedProductID: ULong): Boolean
    suspend fun removeFavorite(emailAddress: String, modifiedProduct: ModifiedProduct): Boolean
}