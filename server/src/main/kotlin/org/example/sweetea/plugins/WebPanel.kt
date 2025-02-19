package org.example.sweetea.plugins

import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.thymeleaf.*
import org.example.sweetea.database.eventSchema
import org.jetbrains.exposed.sql.Database
import org.thymeleaf.templateresolver.*

fun Application.configureWebPanel(database: Database) {
    install(Thymeleaf){
        setTemplateResolver((if (developmentMode) {
            FileTemplateResolver().apply{
                cacheManager = null
                prefix = "src/main/resources/templates/"
            }
        } else {
            ClassLoaderTemplateResolver().apply{
                prefix = "templates"
            }
        }).apply{
            suffix = ".html"
            characterEncoding = "utf-8"
        })
    } 
    routing {
       get("/index") {
           call.respond(ThymeleafContent("index", mapOf("events" to eventSchema.allEvents())))
       }
    }

}