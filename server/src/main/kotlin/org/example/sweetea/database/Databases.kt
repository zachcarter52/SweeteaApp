package org.example.sweetea.database

import com.sun.jna.platform.win32.Advapi32Util
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.coroutines.Dispatchers
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.experimental.newSuspendedTransaction
import org.example.sweetea.Constants
import org.example.sweetea.database.model.Account

fun Application.configureDatabases() {
    val database = Database.connect(
        url = "jdbc:mariadb://"+Constants.DATABASE_HOST+":3306/"+Constants.DATABASE_NAME,
//        user = Constants.DATABASE_USERNAME,
//        password = Constants.DATABASE_PASSWORD,
        driver = "org.mariadb.jdbc.Driver",
    )
    val userService = UserService(database)
    val accountSchema = AccountSchema(database)

    routing {
        route("/accounts"){
            get(""){
                call.respond(accountSchema.allAccounts())
            }

            post("") {
                val account = call.receive<Account>()
                val accountID = accountSchema.createAccount(account)
                if(accountID != null){
                    call.respond(HttpStatusCode.Created, accountID)
                } else {
                    call.respond(HttpStatusCode.Conflict)
                }
            }

           put("/{accountID}") {
               println(call)
               val accountID = call.parameters["accountID"]?.toULong()
               val emailAddress = call.request.queryParameters["emailAddress"]?.toString()
               val phoneNumber = call.request.queryParameters["phoneNumber"]?.toString()
               var updatedAccount = false;
               if(accountID != null){
                   if(accountSchema.updateAccount(accountID, emailAddress, phoneNumber)){
                       call.respond(HttpStatusCode.OK)
                   } else {
                       call.respond(HttpStatusCode.NotAcceptable)
                   }
               } else {
                   call.respond(HttpStatusCode.NotFound)
               }
           }
            delete("/{accountID}"){
                val accountID = call.parameters["accountID"]?.toULong()
                if(accountID != null){
                    accountSchema.deleteAccount(accountID)
                    call.respond(HttpStatusCode.OK)
                } else {
                    call.respond(HttpStatusCode.NotFound)
                }

            }
        }


        // Create user
        post("/users") {
            val user = call.receive<ExposedUser>()
            val id = userService.create(user)
            call.respond(HttpStatusCode.Created, id)
        }

        // Read user
        get("/users/{id}") {
            val id = call.parameters["id"]?.toInt() ?: throw IllegalArgumentException("Invalid ID")
            val user = userService.read(id)
            if (user != null) {
                call.respond(HttpStatusCode.OK, user)
            } else {
                call.respond(HttpStatusCode.NotFound)
            }
        }

        // Update user
        put("/users/{id}") {
            val id = call.parameters["id"]?.toInt() ?: throw IllegalArgumentException("Invalid ID")
            val user = call.receive<ExposedUser>()
            userService.update(id, user)
            call.respond(HttpStatusCode.OK)
        }


        // Delete user
        delete("/users/{id}") {
            val id = call.parameters["id"]?.toInt() ?: throw IllegalArgumentException("Invalid ID")
            userService.delete(id)
            call.respond(HttpStatusCode.OK)
        }
    }
}
