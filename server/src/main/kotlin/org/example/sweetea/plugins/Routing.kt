package org.example.sweetea.plugins

import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.PartData
import io.ktor.http.content.forEachPart
import io.ktor.server.application.Application
import io.ktor.server.auth.authenticate
import io.ktor.server.request.contentType
import io.ktor.server.request.header
import io.ktor.server.request.receiveChannel
import io.ktor.server.request.receiveMultipart
import io.ktor.server.response.respond
import io.ktor.server.response.respondBytes
import io.ktor.server.response.respondText
import io.ktor.server.routing.RoutingCall
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.put
import io.ktor.server.routing.route
import io.ktor.server.routing.routing
import io.ktor.util.cio.writeChannel
import io.ktor.utils.io.copyTo
import org.example.sweetea.ResponseClasses.AppStatus
import org.example.sweetea.database.getSelectedEvent
import org.example.sweetea.database.rewardSchema
import java.io.File
import java.util.Date

fun Application.configureRouting() {
    val l: String = File.separator
    suspend fun RoutingCall.respondFile(filepath: String){
        //${l} is equivalent to "/" on linux and "\" on windows
        //makes it platform agnostic
        val file = File(filepath.replace("/",l))
        if(file.exists()){
            this.respondBytes(file.readBytes())
        } else {
            this.respond(HttpStatusCode.NotFound)
        }
    }
    routing {
        get("/status") {
            call.respond(
                AppStatus(
                    getSelectedEvent().toEventResponse(),
                    rewardSchema.getBearValue()
                )
            )
        }
        route("/bear-value") {
            get("") {
                call.respond(rewardSchema.getBearValue())
            }
            put("/{value}") {
                val newBearValue = call.parameters["value"]!!.toInt()
                rewardSchema.setBearValue(newBearValue)
                call.respond(HttpStatusCode.OK)
            }
        }
        get("/events/selected") {
            call.respond(getSelectedEvent().toEventResponse())
        }
        get("/{filename}") {
            val filename = call.parameters["filename"]!!
            call.respondFile("src/main/resources/templates/${filename}")
        }
        get("/uploads/{filename}") {
            val filename = call.parameters["filename"]!!
            call.respondFile("uploads/${filename}")
        }
        authenticate("admin-auth-session") {
            post("/upload/") {
                if (call.request.contentType().match(ContentType.Image.Any)) {
                    //regex testing done here:
                    // https://regex101.com/r/vhsAZl/1
                    //extracts the file name from Content-Disposition response header, into regex group 2
                    val dispositionRegex =
                        Regex("""filename[^;=\n]*=[ \t]*(?:(\\?['"])?((?:[^;=\n]|\\\1)*)\1|(?:[^;=\s]+'.*?')?([^;=\s]*))""",)
                    val disposition = call.request.header("Content-Disposition")
                    val dateString = Date().time.toString() + ".jpg"
                    var name = ""
                    if (disposition != null) {
                        val receivedFileName: String =
                            dispositionRegex.find(disposition)?.groups?.get(2)?.value.toString()
                        if (receivedFileName != "null") name = receivedFileName
                    } else {
                        name = dateString
                    }
                    val file = File("uploads$l$name")
                    if (!file.exists()) {
                        file.createNewFile()
                        call.receiveChannel().copyTo(file.writeChannel())
                        call.respondText("Upload Completed")
                    } else {
                        call.respond(HttpStatusCode.Conflict)
                    }
                } else if (call.request.contentType().match(ContentType.MultiPart.FormData)) {
                    call.receiveMultipart().forEachPart { part ->
                        if (part is PartData.FileItem) {
                            val name = part.originalFileName!!
                            val file = File("uploads$l$name")
                            if (!file.exists()) {
                                file.createNewFile()
                                part.provider.invoke().copyTo(file.writeChannel())
                                call.respond(HttpStatusCode.OK)
                            } else {
                                call.respond(HttpStatusCode.Conflict)
                            }
                        } else if (part is PartData.FormItem) {
                            println("${part.name}: ${part.value}")
                        } else {
                            println(part.toString())
                        }
                    }
                } else {
                    println("Upload Failed")
                    call.respondText("Upload failed")
                }
            }
        }
    }
}
