package org.example.sweetea.database

import org.example.sweetea.ModifiedProduct
import org.example.sweetea.database.model.ModifiedProductRepository
import org.example.sweetea.database.model.ModifierRepository

class FakeModifiedProductRepository(
    val modifierRepository: ModifierRepository
): ModifiedProductRepository{
    val modifiedProducts = mutableMapOf(
        1UL to ModifiedProduct(
            1UL,
            "KEFJ4H4VTXASMKKZTAM6YFB5",
            listOf()
        ),
        2UL to ModifiedProduct(
            2UL,
            "KEFJ4H4VTXASMKKZTAM6YFB5",
            listOf()
        ),
        3UL to ModifiedProduct(
            3UL,
            "KEFJ4H4VTXASMKKZTAM6YFB5",
            listOf()
        )
    )
    override suspend fun allModifiedProducts(): List<ModifiedProduct> {
        return modifiedProducts.values.toList()
    }

    override suspend fun saveProduct(product: ModifiedProduct): ULong {
        val existingModifiedProduct = getModifiedProduct(product)
        if(existingModifiedProduct != null){
            return existingModifiedProduct.modifiedProductID
        } else {
            val newModifiedProductID = modifiedProducts.size.toULong() + 1UL
            modifiedProducts[newModifiedProductID] = product.copy(newModifiedProductID = newModifiedProductID)
            product.modifiers.forEach {
                modifierRepository.addModifier(it.copy(modifiedProductID = newModifiedProductID))
            }
            return newModifiedProductID
        }
    }

    override suspend fun getModifiedProduct(modifiedProductID: ULong): ModifiedProduct? {
        return modifiedProducts[modifiedProductID]
    }

    override suspend fun getModifiedProduct(product: ModifiedProduct): ModifiedProduct? {
        if(product.modifiedProductID == 0UL) {
            val potentialDatabaseModifierIDLists = product.modifiers.map {
                modifierRepository.getIdenticalModifierIDs(it)
            }
            if (potentialDatabaseModifierIDLists.isEmpty()) return null
            val potentialDatabaseModifierIDs = potentialDatabaseModifierIDLists[0]
            potentialDatabaseModifierIDLists.forEachIndexed { index, it ->
                if(index > 0) potentialDatabaseModifierIDs.intersect(it.toSet())
            }
            if(potentialDatabaseModifierIDs.isNotEmpty()){
                return getModifiedProduct(potentialDatabaseModifierIDs[0])
            }
            return null
        } else {
            return getModifiedProduct(product.modifiedProductID)
        }
    }

    override suspend fun getProducts(productID: String): List<ModifiedProduct> {
        return modifiedProducts.values.mapNotNull { other ->
            if(other.productID == productID){
                other
            } else {
                null
            }
        }
    }

    override suspend fun removeProduct(productID: String): Int {
        var count = 0
        modifiedProducts.forEach{ (key, modifiedProduct) ->
            if(modifiedProduct.productID == productID){
                modifiedProducts.remove(key)
                count++
            }
        }
        return count
    }
}