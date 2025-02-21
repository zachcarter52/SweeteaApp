package org.example.sweetea.plugins

import io.ktor.client.request.forms.FormPart
import io.ktor.client.request.forms.MultiPartFormDataContent
import io.ktor.client.request.forms.formData
import io.ktor.http.ContentDisposition
import io.ktor.http.ContentType
import io.ktor.http.Headers
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.PartData
import io.ktor.http.content.forEachPart
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.util.cio.writeChannel
import io.ktor.utils.io.copyTo
import io.ktor.utils.io.core.buildPacket
import io.ktor.utils.io.core.writeFully
import org.example.sweetea.Constants
import org.example.sweetea.EventResponse
import org.example.sweetea.database.selectedEventFile
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
        get("/events/selected"){
            val eventFile = selectedEventFile.readLines()
            println("${eventFile}, ${eventFile.size}")
            if(eventFile.size == 5){
                call.respond(EventResponse(eventFile[0], eventFile[1], eventFile[2], eventFile[3], eventFile[4]=="true"))
            }
        }
        get("/{filename}"){
            val filename = call.parameters["filename"]!!
            call.respondFile("src/main/resources/templates/${filename}")
        }
        get("/uploads/{filename}"){
            val filename = call.parameters["filename"]!!
            call.respondFile("uploads/${filename}")
        }
        post("/upload/"){
            if(call.request.contentType().match(ContentType.Image.Any)){
                //regex testing done here:
                // https://regex101.com/r/vhsAZl/1
                //extracts the file name from Content-Disposition response header, into regex group 2
                val dispositionRegex = Regex("""filename[^;=\n]*=[ \t]*(?:(\\?['"])?((?:[^;=\n]|\\\1)*)\1|(?:[^;=\s]+'.*?')?([^;=\s]*))""", )
                val disposition = call.request.header("Content-Disposition")
                val dateString = Date().time.toString() + ".jpg"
                var name = ""
                if (disposition != null) {
                    val receivedFileName:String =
                        dispositionRegex.find(disposition)?.groups?.get(2)?.value.toString()
                    if(receivedFileName != "null") name = receivedFileName
                } else {
                    name = dateString
                }
                val file = File("uploads$l$name")
                if(!file.exists()) {
                    file.createNewFile()
                    call.receiveChannel().copyTo(file.writeChannel())
                    call.respondText("Upload Completed")
                } else {
                    call.respond(HttpStatusCode.Conflict)
                }
            } else if(call.request.contentType().match(ContentType.MultiPart.FormData)){
                call.receiveMultipart().forEachPart { part ->
                    if(part is PartData.FileItem) {
                        val name = part.originalFileName!!
                        val file = File("uploads$l$name")
                        if (!file.exists()) {
                            file.createNewFile()
                            part.provider.invoke().copyTo(file.writeChannel())
                            call.respond(HttpStatusCode.OK)
                        } else {
                            call.respond(HttpStatusCode.Conflict)
                        }
                    } else if(part is PartData.FormItem){
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
