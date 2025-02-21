package org.example.sweetea.plugins

import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.thymeleaf.*
import org.example.sweetea.database.eventSchema
import org.example.sweetea.database.selectedEventFile
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
        //pageRoutes are manually copied from composeApp/src/androidMain/kotlin/org/example/sweetea/Destinations
        get("/index") {
            call.respond(ThymeleafContent(template = "index", model = mapOf(
                "events" to eventSchema.allEvents(),
                "selectedEventName" to selectedEventFile.readLines()[0],
                "pageRoutes" to listOf("home", "menu", "subMenu", "rewards", "account", "login", "signup")
            )))
        }
    }

}