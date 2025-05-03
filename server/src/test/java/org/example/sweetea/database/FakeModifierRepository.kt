package org.example.sweetea.database

import org.example.sweetea.Modifier
import org.example.sweetea.database.model.ModifierRepository

class FakeModifierRepository: ModifierRepository{
    private val modifiers = mutableMapOf(
        1UL to Modifier(
            1UL,
            1UL,
            "11ec613d0a3912fab861cad5a4459078",
            "11ec613d0a393f46a3d1cad5a4459078"
        ),
        2UL to Modifier(
            2UL,
            1UL,
            "11ec613d0a061a44a7740ada63924dc7",
            "11ec613d0a06586a81700ada63924dc7"
        ),
        3UL to Modifier(
            3UL,
            1UL,
            "11ec613d0a6f35ce80f0863ccc46ef26",
            "11ec613d0a6f978ab9f4863ccc46ef26"
        ),
        4UL to Modifier(
            4UL,
            1UL,
            "11ec613d0aa9f524b9962a21262f26d9",
            "11ec613d0aaa15eaab402a21262f26d9"
        ),
        5UL to Modifier(
            5UL,
            1UL,
            "11ec613d09d20aa683dfcaaf38e65cd4",
            "11ec613d09d2827e9a38caaf38e65cd4"
        ),
        6UL to Modifier(
            6UL,
            1UL,
            "11ec613d09d20aa683dfcaaf38e65cd4",
            "11ec613d09d276d080e1caaf38e65cd4"
        ),
        7UL to Modifier(
            7UL,
            1UL,
            "11ec613d09d20aa683dfcaaf38e65cd4",
            "11ec613d09d270eaa84fcaaf38e65cd4"
        ),
        8UL to Modifier(
            8UL,
            1UL,
            "11ec613d0a3912fab861cad5a4459078",
            "11ec613d0a393f46a3d1cad5a4459078"
        ),
        9UL to Modifier(
            9UL,
            2UL,
            "11ec613d0a061a44a7740ada63924dc7",
            "11ec613d0a06586a81700ada63924dc7"
        ),
        10UL to Modifier(
            10UL,
            2UL,
            "11ec613d0a6f35ce80f0863ccc46ef26",
            "11ec613d0a6f978ab9f4863ccc46ef26"
        ),
        11UL to Modifier(
            11UL,
            2UL,
            "11ec613d0aa9f524b9962a21262f26d9",
            "11ec613d0aaa15eaab402a21262f26d9"
        ),
        12UL to Modifier(
            12UL,
            3UL,
            "11ec613d0a061a44a7740ada63924dc7",
            "11ec613d0a06586a81700ada63924dc7"
        ),
        13UL to Modifier(
            13UL,
            3UL,
            "11ec613d0a6f35ce80f0863ccc46ef26",
            "11ec613d0a6f978ab9f4863ccc46ef26"
        ),
        14UL to Modifier(
            14UL,
            3UL,
            "11ec613d0aa9f524b9962a21262f26d9",
            "11ec613d0aaa15eaab402a21262f26d9"
        ),
        15UL to Modifier(
            15UL,
            3UL,
            "11ec613d09d20aa683dfcaaf38e65cd4",
            "11ec613d09d2827e9a38caaf38e65cd4"
        ),
    )
    override suspend fun getModifier(databaseModifierID: ULong): Modifier? {
        return modifiers[databaseModifierID]
    }

    override suspend fun getIdenticalModifierIDs(modifier: Modifier): List<ULong> {
        return modifiers.mapNotNull{ (key, other) ->
            if(modifier.modifierID == other.modifierID &&
                modifier.choiceID == other.choiceID){
                key
            } else {
                null
            }
        }
    }

    override suspend fun getDatabaseModifierID(modifier: Modifier): ULong? {
        modifiers.forEach{ (key, other) ->
            if(modifier.databaseModifierID == other.databaseModifierID &&
                modifier.modifierID == other.modifierID &&
                modifier.choiceID == other.choiceID){
                return key
            }
        }
        return null
    }

    override suspend fun getModifiers(modifiedProductID: ULong): List<Modifier> {
        return modifiers.values.mapNotNull { other ->
            if(other.modifiedProductID == modifiedProductID){
                other
            } else {
                null
            }

        }
    }

    override suspend fun addModifier(modifier: Modifier): ULong {
        val newID = modifiers.size.toULong() + 1UL
        modifiers[newID] = modifier.copy(databaseModifierID = newID)
        return newID
    }

    override suspend fun removeProductModifiers(modifiedProductID: ULong): Boolean {
        var deletedItems = false
        modifiers.forEach{(key, other) ->
            if(other.modifiedProductID == modifiedProductID){
                modifiers.remove(key)
                deletedItems = true
            }
        }
        return deletedItems
    }
}