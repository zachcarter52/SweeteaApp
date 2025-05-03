package org.example.sweetea.database.repository

import org.example.sweetea.TestConstants
import org.example.sweetea.database.model.AdminAccount
import org.example.sweetea.database.model.AdminAccountRepository
import org.mindrot.jbcrypt.BCrypt

class FakeAdminAccountRepository : AdminAccountRepository {
    private val adminAccounts = mutableMapOf(
        1L to AdminAccount(
            1L,
            TestConstants.ADMIN_EMAIL,
            TestConstants.ADMIN_SALT,
            TestConstants.ADMIN_HASHED_PASSWORD
        )
    )
    override suspend fun allAccounts(): List<AdminAccount> {
        return adminAccounts.values.toList()
    }

    private fun getAccount(email: String): AdminAccount? {
        return adminAccounts.values.mapNotNull{ account ->
            if(account.emailAddress == email){
                account
            } else {
                null
            }
        }.singleOrNull()
    }

    override suspend fun getAccount(accountID: Long): AdminAccount? {
        return adminAccounts[accountID]
    }

    override suspend fun getSalt(email: String): String? {
        return adminAccounts.values.mapNotNull{ account ->
            if(account.emailAddress == email){
                account.salt
            } else {
                null
            }
        }.singleOrNull()
    }

    override suspend fun createAccount(email: String, hashedPassword: String, salt: String): Long? {
        val newAccount = AdminAccount(
            adminAccounts.size + 1L,
            email,
            salt,
            hashedPassword
        )
        adminAccounts[newAccount.adminID] = newAccount
        return newAccount.adminID
    }

    override suspend fun validateLogin(email: String, hashedPassword: String): Boolean {
        val account = getAccount(email)
        if(account != null){
            return account.hashedPassword == hashedPassword
        }
        return false
    }

    override suspend fun updatePassword(
        email: String,
        oldHashedPassword: String,
        newPassword: String
    ): Boolean {
        if(validateLogin(email, oldHashedPassword)){
            val account = getAccount(email)
            if (account != null) {
                val newSalt = BCrypt.gensalt()
                adminAccounts[account.adminID] = account.copy(salt = newSalt, hashedPassword = BCrypt.hashpw(newSalt, newPassword))
                return true;
            }
        }
        return false;
    }
}