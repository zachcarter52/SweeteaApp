package org.example.sweetea.database.repository

import org.example.sweetea.Favorites
import org.example.sweetea.ModifiedProduct
import org.example.sweetea.database.model.FavoriteProductsRepository
import org.example.sweetea.database.model.ModifiedProductRepository

class FakeFavoriteProductRepository(
    private val modifiedProductRepository: ModifiedProductRepository,
): FavoriteProductsRepository {

    class FavoriteInfo(
        val favoriteProductID: ULong,
        val emailAddress: String,
        val modifiedProductID: ULong
    )

    private val favoriteProducts = mutableMapOf(
        1UL to FavoriteInfo(
            1UL,
            "test@mail.com",
            1UL
        ),
    )

    override suspend fun getFavorites(emailAddress: String): Favorites {
        return Favorites(
            emailAddress,
            favoriteProducts.values.mapNotNull {value->
                if(value.emailAddress == emailAddress){
                    value.modifiedProductID
                } else {
                    null
                }
            }.map{
                modifiedProductRepository.getModifiedProduct(it)
            }
        )
    }

    override suspend fun addFavoriteProduct(
        emailAddress: String,
        modifiedProduct: ModifiedProduct
    ): ULong {
        val newID = favoriteProducts.size.toULong() + 1UL
        favoriteProducts[newID] = FavoriteInfo(
            newID,
            emailAddress,
            modifiedProductRepository.saveProduct(modifiedProduct)
        )
        return newID
    }

    override suspend fun removeFavorite(emailAddress: String, modifiedProductID: ULong): Boolean {
        var returnValue = false
        favoriteProducts.forEach{ (key, value) ->
            if(value.emailAddress == emailAddress &&
                value.modifiedProductID == modifiedProductID){
                favoriteProducts.remove(key)
                returnValue = true
                return@forEach
            }
        }
        return returnValue
    }

    override suspend fun removeFavorite(
        emailAddress: String,
        modifiedProduct: ModifiedProduct
    ): Boolean {
        val existingProduct = modifiedProductRepository.getModifiedProduct(modifiedProduct)
            ?: return false
        return removeFavorite(emailAddress, existingProduct.modifiedProductID)
    }
}