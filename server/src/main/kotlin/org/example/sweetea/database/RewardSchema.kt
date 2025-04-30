package org.example.sweetea.database

import org.example.sweetea.Constants
import org.example.sweetea.RewardValues
import org.example.sweetea.database.RewardSchema.Rewards.earnedDrinks
import org.example.sweetea.database.RewardSchema.Rewards.value
import org.example.sweetea.database.model.DatabaseSchema
import org.example.sweetea.database.model.RewardRepository
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.update

class RewardSchema(database: Database): RewardRepository, DatabaseSchema() {
    object Rewards: Table(){
        val emailAddress = varchar("emailAddress", 255)
        val value = integer("value")
        val earnedDrinks = integer("earnedDrinks")

        override val primaryKey = PrimaryKey(emailAddress)
    }
    init{
        transaction(database) {
            SchemaUtils.create(Rewards)
            if(Rewards.selectAll().where{Rewards.emailAddress eq ""}.singleOrNull() == null){
                Rewards.insert{
                    it[emailAddress] = ""
                    it[value] = Constants.DEFAULT_BEAR_VALUE
                    it[earnedDrinks] = 0
                }
            }
        }
    }

    override suspend fun getBearValue(): Int {
        return dbQuery {
            Rewards.selectAll().where{Rewards.emailAddress eq ""}.map{ it[value]}.first()
        }
    }

    override suspend fun getRewards(emailAddress: String): RewardValues {
        return dbQuery{
            val existingRewards = Rewards.selectAll().where{Rewards.emailAddress eq emailAddress}.map{
                RewardValues(
                    it[value],
                    it[earnedDrinks]
                )
            }.singleOrNull()
            if(existingRewards == null){
                Rewards.insert{
                    it[Rewards.emailAddress] = emailAddress
                    it[Rewards.value] = 0
                    it[Rewards.earnedDrinks] = 0
                }
                RewardValues()
            } else {
                existingRewards
            }
        }


    }

    override suspend fun updateBearValue(emailAddress: String, value: Int) {
        return dbQuery {
            if(emailAddress != ""){
                val currentBearValue = getBearValue()
                var currentValue = getRewards(emailAddress)
                if(currentValue == null){
                    Rewards.insert{
                        it[Rewards.emailAddress] = emailAddress
                        it[Rewards.value] = 0
                        it[Rewards.earnedDrinks] = 0
                    }
                    currentValue = RewardValues()
                }
                Rewards.update({ Rewards.emailAddress eq emailAddress }) {
                    it[Rewards.value] = (currentValue.bears + value) % currentBearValue
                    it[earnedDrinks] = currentValue.freeDrinks + ((currentValue.bears + value) / currentBearValue)
                }
            } else {
                Rewards.update({ Rewards.emailAddress eq emailAddress }) {
                    it[Rewards.value] = value
                }
            }
        }
    }

}