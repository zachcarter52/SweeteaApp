package org.example.sweetea.database.model

interface RewardRepository {
    suspend fun getBearValue(): Int
    suspend fun setBearValue(value: Int)
}