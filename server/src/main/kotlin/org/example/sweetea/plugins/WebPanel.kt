package org.example.sweetea.plugins

import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.thymeleaf.*
import org.thymeleaf.templateresolver.*

data class User(
    val id:Int,
    val name: String,
)
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
       get("/index") {
           val sampleUser = User(1, "John")
           call.respond(ThymeleafContent("index", mapOf("user" to sampleUser)))
       }
    }

}