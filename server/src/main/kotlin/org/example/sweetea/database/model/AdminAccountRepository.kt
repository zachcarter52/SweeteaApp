package org.example.sweetea.database.model

interface AdminAccountRepository {
    suspend fun allAccounts(): List<AdminAccount>
    suspend fun getAccount(accountID: Long): AdminAccount?
    suspend fun createAccount(email: String, password: String): Long?
    suspend fun validateLogin(email: String, password: String): Boolean
    suspend fun updatePassword(email: String, oldPassword: String, newPassword: String): Boolean
}