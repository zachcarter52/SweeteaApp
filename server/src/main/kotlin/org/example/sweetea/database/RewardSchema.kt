package org.example.sweetea.database

import org.example.sweetea.Constants
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
        val id = integer("rewardID").autoIncrement()
        val value = integer("value")

        override val primaryKey = PrimaryKey(id)
    }
    init{
        transaction(database) {
            SchemaUtils.create(Rewards)
            if(Rewards.selectAll().singleOrNull() == null){
                Rewards.insert{
                    it[id]= 1
                    it[value] = Constants.DEFAULT_BEAR_VALUE
                }
            }
        }
    }

    override suspend fun getBearValue(): Int {
        return dbQuery {
            Rewards.selectAll().map{it[Rewards.value]}.first()
        }
    }
    override suspend fun setBearValue(value: Int) {
        return dbQuery {
            Rewards.update({Rewards.id eq 1}){
                it[Rewards.value] = value
            }
            Rewards.selectAll().map{it[Rewards.value]}.first()
        }
    }

}