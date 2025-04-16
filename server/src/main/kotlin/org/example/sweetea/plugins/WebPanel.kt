package org.example.sweetea.plugins

import io.ktor.server.application.Application
import io.ktor.server.application.install
import io.ktor.server.auth.authenticate
import io.ktor.server.response.respond
import io.ktor.server.routing.get
import io.ktor.server.routing.routing
import io.ktor.server.thymeleaf.Thymeleaf
import io.ktor.server.thymeleaf.ThymeleafContent
import org.example.sweetea.database.eventSchema
import org.example.sweetea.database.getSelectedEvent
import org.example.sweetea.database.rewardSchema
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver
import org.thymeleaf.templateresolver.FileTemplateResolver

fun Application.configureWebPanel() {
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
        get("/login"){
            call.respond(ThymeleafContent(template = "login", model = mapOf()))
        }
        authenticate("admin-auth-session") {
            get("/index") {
                call.respond(
                    ThymeleafContent(
                        template = "index", model = mapOf(
                            "events" to eventSchema.allEvents(),
                            "currentBearValue" to rewardSchema.getBearValue().toString(),
                            "selectedEventName" to getSelectedEvent().name,
                            "pageRoutes" to listOf(
                                "home",
                                "menu",
                                /* "subMenu",*/
                                "rewards",
                                "account",
                                "login",
                                "signup"
                            )
                        )
                    )
                )
            }
        }
    }

}