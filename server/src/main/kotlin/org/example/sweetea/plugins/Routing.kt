package org.example.sweetea.plugins

import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.PartData
import io.ktor.http.content.forEachPart
import io.ktor.server.application.*
import io.ktor.server.auth.authenticate
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.util.cio.writeChannel
import io.ktor.utils.io.copyTo
import org.example.sweetea.ResponseClasses.AppStatus
import org.example.sweetea.database.model.EventRepository
import org.example.sweetea.database.model.RewardRepository
import java.io.File
import java.util.Date

fun Application.configureRouting(
    eventSchema: EventRepository,
    rewardSchema: RewardRepository
) {
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
                    eventSchema.getSelectedEvents().map{it.toEventResponse()},
                    rewardSchema.getBearValue()
                )
            )
        }
        route("/bear-value") {
            get("") {
                call.respond(rewardSchema.getBearValue().toString())
            }
            authenticate("admin-auth-session"){
                put("/{value}") {
                    val newBearValue = call.parameters["value"]!!.toInt()
                    rewardSchema.setBearValue(newBearValue)
                    call.respond(HttpStatusCode.OK)
                }
            }
        }
        route("/events"){
            get("/selected") {
                call.respond(eventSchema.getSelectedEvents().map{it.toEventResponse()})
            }
            put("/decrement/{selectionIndex}"){
                val selectionIndex = call.parameters["selectionIndex"]!!.toInt()
                call.respond(eventSchema.swapSelections(selectionIndex, selectionIndex-1))
            }
            put("/increment/{selectionIndex}"){
                val selectionIndex = call.parameters["selectionIndex"]!!.toInt()
                call.respond(eventSchema.swapSelections(selectionIndex, selectionIndex+1))
            }
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
