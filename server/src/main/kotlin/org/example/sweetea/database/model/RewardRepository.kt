package org.example.sweetea.database.model

interface RewardRepository {
    suspend fun getBearValue(emailAddress: String = ""): Int
    suspend fun setBearValue(emailAddress: String = "", value: Int)
}