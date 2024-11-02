package org.example.sweetea.database

import org.example.sweetea.database.model.Account
import org.example.sweetea.database.model.AccountRepository
import kotlinx.coroutines.Dispatchers
import kotlinx.datetime.Clock
import kotlinx.datetime.LocalDate
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import org.example.sweetea.Constants
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.SqlExpressionBuilder.greater
import org.jetbrains.exposed.sql.kotlin.datetime.date
import org.jetbrains.exposed.sql.transactions.experimental.newSuspendedTransaction
import org.jetbrains.exposed.sql.transactions.transaction

class AccountSchema(database: Database) : AccountRepository {
    object Accounts : Table(){
        val accountID = ulong("accountID").autoIncrement()
        val emailAddress = varchar("emailAddress", length = 254)
        val phoneNumber = varchar("phoneNumber", length = 15)
        val dateClosed = date("dateClosed").nullable()
        override val primaryKey = PrimaryKey(accountID)
    }

    init {
        transaction(database) {
            SchemaUtils.create(Accounts)
        }
    }

    suspend fun createAccount( account: Account): ULong? = dbQuery {
        if(Accounts.selectAll().where{ Accounts.emailAddress eq account.emailAddress}.singleOrNull() != null){
            return@dbQuery null;
        } else {
            println(account.emailAddress)
            return@dbQuery Accounts.insert {
                it[emailAddress] = account.emailAddress
                it[phoneNumber] = account.phoneNumber
                it[dateClosed] = null
            }[Accounts.accountID]
        }
    }

    override suspend fun allAccounts(): List<Account> {
        return dbQuery{
            Accounts.selectAll().map{
                Account(
                    it[Accounts.accountID],
                    it[Accounts.emailAddress],
                    it[Accounts.phoneNumber],
                    it[Accounts.dateClosed]
                )
            }
        }
    }


    override suspend fun getAccount(accountID: ULong): Account? {
       return dbQuery {
           Accounts.selectAll().where { Accounts.accountID eq accountID}
               .map { Account(
                   it[Accounts.accountID],
                   it[Accounts.emailAddress],
                   it[Accounts.phoneNumber],
                   it[Accounts.dateClosed]
               )}
               .singleOrNull()
       }
    }

    suspend fun updateAccount(accountID: ULong, newEmailAddress: String?, newPhoneNumber: String?): Boolean{
        val rowsChanged = dbQuery {
            Accounts.update({Accounts.accountID eq accountID}) {
                if(newEmailAddress!=null) it[emailAddress] = newEmailAddress
                if(newPhoneNumber!=null) it[phoneNumber] = newPhoneNumber
            }
        }
        return rowsChanged > 0

    }

    override suspend fun updateEmail(accountID: ULong, newEmailAddress: String): Boolean{
        return updateAccount(accountID, newEmailAddress, null)
    }

    override suspend fun updatePhoneNumber(accountID: ULong, newPhoneNumber: String): Boolean{
        return updateAccount(accountID, null, newPhoneNumber)
    }

    override suspend fun deleteAccount(accountID: ULong): Boolean {
        return dbQuery {
            val dateClosed = Accounts.selectAll()
                .where{ Accounts.accountID eq accountID }
                .map {
                    it[Accounts.dateClosed]
                }
                .singleOrNull()
            if(dateClosed != null){
                val safeToCloseDate = LocalDate.fromEpochDays(
                    dateClosed.toEpochDays() + Constants.ACCOUNT_SAFE_PERIOD_DAYS
                )
                val rowsChanged = Accounts.deleteWhere {
                    Accounts.accountID eq accountID and Accounts.dateClosed.greater(safeToCloseDate)
                }
                return@dbQuery rowsChanged > 0
            } else {
                Accounts.update({Accounts.accountID eq accountID}) {
                    it[Accounts.dateClosed] = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()).date
                }
                return@dbQuery false
            }
        }
    }

    suspend fun closeAccount(accountID: ULong): Boolean {
        val rowsChanged = dbQuery {
            Accounts.update({Accounts.accountID eq accountID}) {
                it[Accounts.dateClosed] = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()).date
            }
        }
        return rowsChanged > 0
    }

    suspend fun <T> dbQuery(block: suspend () -> T): T =
        newSuspendedTransaction(Dispatchers.IO) { block() }

}