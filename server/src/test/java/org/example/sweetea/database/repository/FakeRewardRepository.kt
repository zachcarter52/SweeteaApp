package org.example.sweetea.database.repository

import org.example.sweetea.RewardValues
import org.example.sweetea.database.model.RewardRepository

class FakeRewardRepository : RewardRepository {
    val rewards = mutableMapOf(
        "" to RewardValues(75, 0),
    )
    override suspend fun getBearValue(): Int {
        return rewards[""]!!.bears
    }

    override suspend fun getRewards(emailAddress: String): RewardValues {
        val existingValue = rewards[emailAddress]
        if(existingValue != null){
            return existingValue
        } else {
            rewards[emailAddress] = RewardValues()
            return RewardValues()
        }
    }

    override suspend fun updateBearValue(emailAddress: String, value: Int) {
        val bearLimit = getBearValue()
        val existingValue = rewards[emailAddress] ?: RewardValues()
        if(emailAddress.isEmpty()) {
            rewards[emailAddress] = rewards[emailAddress]!!.copy(bears = value)
        } else {
            rewards[emailAddress] = RewardValues(
                existingValue.bears + value % bearLimit,
                existingValue.freeDrinks + ((existingValue.bears + value) / bearLimit)
            )
        }
    }

}