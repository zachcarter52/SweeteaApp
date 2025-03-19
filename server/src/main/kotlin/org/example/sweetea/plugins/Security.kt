package org.example.sweetea.plugins

import io.ktor.server.application.*
import io.ktor.server.auth.Authentication
import io.ktor.server.auth.authenticate
import io.ktor.server.auth.form
import io.ktor.server.auth.principal
import io.ktor.server.auth.session
import io.ktor.server.response.respondRedirect
import io.ktor.server.response.respondText
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.routing
import io.ktor.server.sessions.*
import io.ktor.server.sessions.cookie
import io.ktor.server.sessions.maxAge
import kotlinx.serialization.Serializable
import org.example.sweetea.database.adminAccountSchema
import org.mindrot.jbcrypt.BCrypt
import java.util.TreeMap
import kotlin.time.DurationUnit
import kotlin.time.toDuration

@Serializable
data class AdminSession(val name: String, val salt: String){
    public fun getHashedValue() = BCrypt.hashpw(name, salt)
}
fun Application.configureSecurity() {
    val hashes = TreeMap<String, String>()
    install(Sessions){
        cookie<AdminSession>("admin_session"){
            cookie.path = "/"
            //let cookies last a day
            cookie.maxAge = 12.toDuration(DurationUnit.HOURS)
        }

    }
    install(Authentication){
        form("auth-form"){
            userParamName = "email-address"
            passwordParamName = "hashed-password"
            validate { credentials ->
                println("DEBUGLOG:   mail: ${credentials.name}, password: ${credentials.password}")
                if(adminAccountSchema.validateLogin(credentials.name, credentials.password)){
                    val salt = BCrypt.gensalt()
                    hashes[credentials.name] = BCrypt.hashpw(credentials.name, salt)
                    println("DEBUGLOG:  hashes[\"${credentials.name}\"] = ${hashes[credentials.name]}, salt: $salt")
                    return@validate AdminSession(credentials.name, salt)
                } else {
                    return@validate null
                }
            }
            challenge{
                call.respondRedirect("/login")
            }
        }
        session<AdminSession>("admin-auth-session"){
            validate { session ->
                println("DEBUGLOG:  hashes[\"${session.name}\"] = ${hashes[session.name]}, salt: ${session.salt}")
                if(hashes[session.name] == BCrypt.hashpw(session.name, session.salt)){
                    println("DEBUGLOG:  LOGIN SUCCESSFULL")
                    return@validate session
                } else {
                    null
                }
            }
            challenge{
                call.respondRedirect("/login")
            }
        }
    }
    routing {
        authenticate("auth-form"){
            post("/login"){
                val session = call.principal<AdminSession>()
                if(session != null){
                    call.sessions.set(session)
                    call.respondText("/index")
                }
            }
        }
        get("/logout"){
            call.sessions.clear<AdminSession>()
            call.respondRedirect("/login")
        }
    }
}

