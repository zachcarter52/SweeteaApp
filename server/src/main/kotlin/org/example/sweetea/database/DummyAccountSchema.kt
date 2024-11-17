package org.example.sweetea.database;

import org.example.sweetea.database.model.Account;
import org.example.sweetea.database.model.AccountRepository;
import kotlinx.datetime.LocalDate;

class DummyAccountSchema : AccountRepository {
    override suspend fun allAccounts(): List<Account> = Companion.tempAccounts;
    override suspend fun getAccount(accountID: ULong): Account? = Companion.tempAccounts.find {
        it.accountID == accountID
    }

    override suspend fun updateEmail(accountID: ULong, newEmailAddress: String): Boolean {
        val account = getAccount(accountID)
        if (account != null) {
            account.emailAddress = newEmailAddress
            return true
        } else {
            return false
        }
    }

    override suspend fun updatePhoneNumber(accountID: ULong, newPhoneNumber: String): Boolean {
        val account = getAccount(accountID)
        if (account != null) {
            account.phoneNumber = newPhoneNumber
            return true
        } else {
            return false
        }
    }

    override suspend fun deleteAccount(accountID: ULong): Boolean {
        val account = getAccount(accountID)
        if( account != null){
            return Companion.tempAccounts.remove(account);
        } else {
            return false;
        }
    }

    companion object {
        val tempAccounts = mutableListOf(
            Account(0u, "test@mail.com", "19165551234", null),
            Account(1u, "test2@othermail.net", "12555551234", null),
            Account(2u, "user@yawho.com", "19165556381", LocalDate(2015, 4, 12))
        )
    }
}
