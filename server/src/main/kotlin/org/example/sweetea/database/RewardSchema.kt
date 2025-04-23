package org.example.sweetea.database

import org.example.sweetea.Constants
import org.example.sweetea.database.RewardSchema.Rewards.emailAddress
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
        override val primaryKey = PrimaryKey(emailAddress)
    }
    init{
        transaction(database) {
            SchemaUtils.create(Rewards)
            if(Rewards.selectAll().singleOrNull() == null){
                Rewards.insert{
                    it[emailAddress] = ""
                    it[value] = Constants.DEFAULT_BEAR_VALUE
                }
            }
        }
    }

    override suspend fun getBearValue(emailAddress: String): Int {
        return dbQuery {
            Rewards.selectAll().where{Rewards.emailAddress eq emailAddress}.map{it[Rewards.value]}.first()
        }
    }
    override suspend fun setBearValue(emailAddress: String, value: Int) {
        return dbQuery {
            Rewards.update({Rewards.emailAddress eq emailAddress}){
                it[Rewards.value] = value
            }
            Rewards.selectAll().map{it[Rewards.value]}.first()
        }
    }

}