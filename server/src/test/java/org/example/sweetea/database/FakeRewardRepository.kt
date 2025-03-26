package org.example.sweetea.database

import org.example.sweetea.database.model.RewardRepository

class FakeRewardRepository : RewardRepository {
    private var bearValue = 75
    override suspend fun getBearValue(): Int {
        return bearValue
    }

    override suspend fun setBearValue(value: Int) {
        if(value > 0){
            bearValue = value
        }
    }
}