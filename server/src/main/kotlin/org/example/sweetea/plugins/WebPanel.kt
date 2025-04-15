package org.example.sweetea.plugins

import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.auth.authenticate
import io.ktor.server.response.*
import io.ktor.server.thymeleaf.*
import org.example.sweetea.database.model.EventRepository
import org.example.sweetea.database.model.RewardRepository
import org.thymeleaf.templateresolver.*

fun Application.configureWebPanel(
    eventSchema: EventRepository,
    rewardSchema: RewardRepository,
) {
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
                            "events" to eventSchema.getEventsBySelected(),
                            "currentBearValue" to rewardSchema.getBearValue().toString(),
                            "selectedEventCount" to eventSchema.getSelectedEventCount().toString(),
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