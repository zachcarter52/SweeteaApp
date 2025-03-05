package org.example.sweetea.database

import org.example.sweetea.Constants
import org.example.sweetea.PrivateConstants
import org.example.sweetea.database.model.AdminAccount
import org.example.sweetea.database.model.AdminAccountRepository
import org.example.sweetea.database.model.DatabaseSchema
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.mindrot.jbcrypt.BCrypt


class AdminAccountSchema(database: Database) : AdminAccountRepository, DatabaseSchema() {
    object AdminAccounts: Table(){
        val adminID = long("adminID").autoIncrement()
        val emailAddress = varchar("emailAddress", length = 255)
        val passwordSalt = varchar("salt", length = 29)
        val hashedPassword = varchar("hashedPassword", length = 60)

        override val primaryKey = PrimaryKey(adminID)
    }

    init{
        transaction(database) {
            SchemaUtils.create(AdminAccounts)
            if(AdminAccounts.selectAll().map { it -> it }.isEmpty()){
                val salt = BCrypt.gensalt()
                AdminAccounts.insert {
                    it[emailAddress] = "${Constants.DATABASE_USERNAME}@${Constants.DATABASE_DEFAULT_EMAIL_DOMAIN}"
                    it[passwordSalt] = salt
                    it[hashedPassword] = BCrypt.hashpw(Constants.DATABASE_PASSWORD, salt)
                }[AdminAccounts.adminID]
            }
        }
    }

    override suspend fun allAccounts(): List<AdminAccount> {
        return dbQuery {
            AdminAccounts.selectAll().map {
                AdminAccount(
                    it[AdminAccounts.adminID],
                    it[AdminAccounts.emailAddress],
                    it[AdminAccounts.passwordSalt],
                    it[AdminAccounts.hashedPassword]
                )
            }
        }
    }

    override suspend fun getAccount(accountID: Long): AdminAccount? {
        return dbQuery {
            AdminAccounts.selectAll().where { AdminAccounts.adminID eq accountID }.map {
                AdminAccount(
                    it[AdminAccounts.adminID],
                    it[AdminAccounts.emailAddress],
                    it[AdminAccounts.passwordSalt],
                    it[AdminAccounts.hashedPassword],
                )
            }.singleOrNull()
        }
    }

    private suspend fun getAccount(email: String): AdminAccount? {
        return dbQuery {
            AdminAccounts.selectAll().where { AdminAccounts.emailAddress eq email }.map {
                AdminAccount(
                    it[AdminAccounts.adminID],
                    it[AdminAccounts.emailAddress],
                    it[AdminAccounts.passwordSalt],
                    it[AdminAccounts.hashedPassword],
                )
            }.singleOrNull()
        }
    }

    override suspend fun createAccount(email: String, password: String): Long? {
        return dbQuery {
            if(getAccount(email) != null) return@dbQuery null
            val salt = BCrypt.gensalt()
            return@dbQuery AdminAccounts.insert {
                it[emailAddress] = email
                it[passwordSalt] = salt
                it[hashedPassword] = BCrypt.hashpw(password, salt)
            }[AdminAccounts.adminID]
        }
    }

    private fun validatePassword(password: String, salt: String, hashToCompare: String): Boolean{
        return BCrypt.hashpw(password, salt) == hashToCompare
    }

    override suspend fun validateLogin(email: String, password: String): Boolean {
        return dbQuery {
            val account = getAccount(email)
            if(account != null){
                return@dbQuery validatePassword(password, account.salt, account.hashedPassword)
            }
            return@dbQuery false
        }
    }

    override suspend fun updatePassword(email:String, oldPassword: String, newPassword: String): Boolean {
        return dbQuery {
            val account = getAccount(email)
            if(account != null && validatePassword(oldPassword, account.salt, account.hashedPassword)){
                AdminAccounts.update({AdminAccounts.adminID eq account.adminID}){
                    it[hashedPassword] = BCrypt.hashpw(newPassword, account.salt)
                }
                return@dbQuery true
            }
            return@dbQuery false
        }

    }
}