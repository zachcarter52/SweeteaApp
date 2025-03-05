package org.example.sweetea.plugins

import io.ktor.http.HttpStatusCode
import io.ktor.server.application.*
import io.ktor.server.auth.Authentication
import io.ktor.server.auth.UserIdPrincipal
import io.ktor.server.auth.form
import io.ktor.server.response.respond
import io.ktor.server.thymeleaf.Thymeleaf
import io.ktor.server.thymeleaf.ThymeleafContent
import org.example.sweetea.database.adminAccountSchema

fun Application.configureSecurity() {
    install(Authentication){
        form("auth-form"){
            userParamName = "email-address"
            passwordParamName = "password"
            validate {
                credentials ->
                if(adminAccountSchema.validateLogin(credentials.name, credentials.password)){
                    UserIdPrincipal(credentials.name)
                } else {
                    null
                }
            }
            challenge {
                call.respond(ThymeleafContent(
                    template = "login", model = mapOf()
                ))
            }
        }
    }
}

