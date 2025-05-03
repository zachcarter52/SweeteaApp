package org.example.sweetea.database.model

import org.example.sweetea.RewardValues

interface RewardRepository {
    suspend fun getBearValue(): Int
    suspend fun getRewards(emailAddress: String): RewardValues
    suspend fun updateBearValue(emailAddress: String = "", value: Int)
}