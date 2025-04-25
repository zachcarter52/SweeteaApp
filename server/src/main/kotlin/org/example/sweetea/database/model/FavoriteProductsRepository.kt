package org.example.sweetea.database.model

import org.example.sweetea.Favorites
import org.example.sweetea.ModifiedProduct

interface FavoriteProductsRepository {
    suspend fun getFavorites(emailAddress: String): Favorites
    suspend fun addFavoriteProduct(emailAddress: String, modifiedProduct: ModifiedProduct): ULong
    suspend fun removeFavorite(emailAddress: String, modifiedProductID: ULong): Boolean
    suspend fun removeFavorite(emailAddress: String, modifiedProduct: ModifiedProduct): Boolean
}