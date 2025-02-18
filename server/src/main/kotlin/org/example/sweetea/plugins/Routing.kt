package org.example.sweetea.plugins

import io.ktor.http.ContentDisposition
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.respond
import io.ktor.server.response.respondBytes
import io.ktor.server.response.respondText
import io.ktor.server.routing.*
import io.ktor.util.cio.writeChannel
import io.ktor.utils.io.copyTo
import java.io.File
import java.util.Date

fun Application.configureRouting() {
    val l = File.separator
    routing {
        get("/uploads/{filename}"){
            val name = call.parameters["filename"]!!
            val file = File("uploads$l$name")
            if(file.exists()) {
                call.respondBytes(file.readBytes())
            }
            call.respond(HttpStatusCode.NotFound)
        }
        post("/upload/"){
            if(call.request.contentType().match(ContentType.Image.Any)){
                //regex testing done here:
                // https://regex101.com/r/vhsAZl/1
                val dispositionRegex = Regex("""filename[^;=\n]*=[ \t]*(?:(\\?['"])?((?:[^;=\n]|\\\1)*)\1|(?:[^;=\s]+'.*?')?([^;=\s]*))""", )
                val disposition = call.request.header("Content-Disposition")
                val dateString = Date().time.toString() + ".jpg"
                var name = ""
                if (disposition != null) {
                    val recievedFileName:String =
                        dispositionRegex.find(disposition)?.groups?.get(2)?.value.toString()
                    if(recievedFileName != "null") name = recievedFileName
                } else {
                    name = dateString
                }
                /*"".toRegex().
                if(contentDisposition != null && contentDisposition.contains("filename")){
                    println(contentDisposition)
                    contentDisposition = contentDisposition.substring(contentDisposition.indexOf("filename"), contentDisposition.length)
                    contentDisposition = contentDisposition.substring(contentDisposition.indexOf("\"", contentDisposition.length))
                    name = contentDisposition.substring(0, contentDisposition.indexOf("\""))
                }*/
                val file = File("uploads$l$name")
                if(!file.exists()) {
                    file.createNewFile()
                    call.receiveChannel().copyTo(file.writeChannel())
                    call.respondText("Upload Completed")
                } else {
                    call.respond(HttpStatusCode.Conflict)
                }
            } else {
                call.respondText("Upload failed")
            }
        }
    }
}
