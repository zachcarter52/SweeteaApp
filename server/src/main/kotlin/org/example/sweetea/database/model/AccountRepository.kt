package org.example.sweetea.database.model

interface AccountRepository {
    suspend fun allAccounts(): List<Account>
    suspend fun getAccount(accountID: ULong): Account?
    suspend fun updateEmail(accountID: ULong, newEmailAddress: String): Boolean
    suspend fun updatePhoneNumber(accountID: ULong, newPhoneNumber: String): Boolean
    suspend fun deleteAccount(accountID: ULong): Boolean
}