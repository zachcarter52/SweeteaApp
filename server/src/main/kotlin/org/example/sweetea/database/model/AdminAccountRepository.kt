package org.example.sweetea.database.model

interface AdminAccountRepository {
    suspend fun allAccounts(): List<AdminAccount>
    suspend fun getAccount(accountID: Long): AdminAccount?
    suspend fun getSalt(email: String): String?
    suspend fun createAccount(email: String, hashedPassword: String, salt: String): Long?
    suspend fun validateLogin(email: String, hashedPassword: String): Boolean
    suspend fun updatePassword(email: String, oldHashedPassword: String, newPassword: String): Boolean
}