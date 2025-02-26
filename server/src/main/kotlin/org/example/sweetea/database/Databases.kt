package org.example.sweetea.database

import io.ktor.http.*
import io.ktor.http.content.PartData
import io.ktor.http.content.forEachPart
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.util.cio.writeChannel
import io.ktor.utils.io.copyTo
import kotlinx.coroutines.Dispatchers
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.experimental.newSuspendedTransaction
import org.example.sweetea.Constants
import org.example.sweetea.database.model.Account
import org.example.sweetea.database.model.Event
import java.io.File

private val database = Database.connect(
    url = "jdbc:mariadb://"+Constants.DATABASE_HOST+":3306/"+Constants.DATABASE_NAME,
    user = Constants.DATABASE_USERNAME,
    password = Constants.DATABASE_PASSWORD,
    driver = "org.mariadb.jdbc.Driver",
)

val accountSchema = AccountSchema(database)
val eventSchema = EventSchema(database)

internal fun getSelectedEventFile(): File{
    val selectedEventFile = File("selectedEvent")
    if(!selectedEventFile.exists()) selectedEventFile.createNewFile()
    return selectedEventFile

}
internal fun updateSelectedEventFile(event: Event){
    val selectedEventFile = getSelectedEventFile()
    selectedEventFile.writeText("${event.name}\n")
    selectedEventFile.appendText("${event.buttonText}\n")
    selectedEventFile.appendText("${Constants.TEST_URL}:${Constants.SERVER_PORT}/uploads/${event.filename}\n")
    selectedEventFile.appendText("${event.link}\n")
    selectedEventFile.appendText(event.linkIsRoute.toString())
}

fun Application.configureDatabases(){
    val l: String = File.separator
    routing {
        route("/events"){
            get(""){
                call.respond(eventSchema.allEvents())
            }
            get("/{eventID}"){
                val eventID = call.parameters["accountID"]?.toLong()
                if(eventID != null){
                    val event = eventSchema.getEvent(eventID)
                    if(event != null) {
                        call.respond(event)
                    } else {
                        call.respond(HttpStatusCode.NotFound)
                    }
                } else {
                    call.respond(HttpStatusCode.BadRequest)
                }
            }
            delete("/{eventID}"){
                val eventID = call.parameters["eventID"]?.toLong()
                if(eventID != null){
                    val deletedEvent = eventSchema.deleteEvent(eventID)
                    if(deletedEvent != null) {
                        File("uploads$l${deletedEvent.filename}").delete()
                        call.respond(HttpStatusCode.OK)
                    } else {
                        call.respond(HttpStatusCode.NotFound)
                    }
                } else {
                    call.respond(HttpStatusCode.BadRequest)
                }
            }
            put("/select/{eventID}"){
                val eventID = call.parameters["eventID"]?.toLong()
                if(eventID != null){
                    val event = eventSchema.selectEvent(eventID)
                    if(event != null) {
                        call.respond(event)
                    } else {
                        call.respond(HttpStatusCode.NotFound)
                    }
                } else {
                    call.respond(HttpStatusCode.BadRequest)
                }

            }
            post(""){
                if(call.request.contentType().match(ContentType.MultiPart.FormData)){
                    var eventname = ""
                    var filename = ""
                    var buttonText = ""
                    var linkURL = ""
                    var linkIsRoute = false
                    var fileWasCreated = false
                    var file = File("")
                    call.receiveMultipart().forEachPart { part ->
                        if(part is PartData.FormItem){
                            if(part.name == "event-name") eventname = part.value
                            if(part.name == "event-button-text") buttonText = part.value
                            if(part.name == "link-url") linkURL = part.value
                            if(part.name == "link-is-route") linkIsRoute = part.value == "true"
                            println("${part.name}: ${part.value}")
                        } else if(part is PartData.FileItem) {
                            println("recieved a file")
                            filename = part.originalFileName!!
                            if(filename.split(".")[1]=="svg") {
                                call.respond(HttpStatusCode.NotAcceptable, "SVG files are not allowed")
                            } else {
                                file = File("uploads$l$filename")
                                if (!file.exists()) {
                                    file.createNewFile()
                                    part.provider.invoke().copyTo(file.writeChannel())
                                    fileWasCreated = true
                                } else {
                                    println("File Conflict")
                                    call.respond(HttpStatusCode.Conflict)
                                }
                            }
                        } else {
                            println(part.toString())
                        }
                    }
                    if(eventname.isNotBlank() && fileWasCreated){
                        if(buttonText.isBlank()) buttonText = eventname
                        println("adding Event to Database")
                        println("$eventname, $buttonText, $filename, false, $linkURL, $linkIsRoute")
                        val event = Event(0L, eventname, buttonText, filename, false, linkURL, linkIsRoute)
                        val eventID = eventSchema.createEvent(event)
                        if(eventID == 1L) {
                            updateSelectedEventFile(event)
                        }
                        if(eventID != null) call.respond(HttpStatusCode.Created)
                    } else {
                        call.respond(HttpStatusCode.BadRequest)
                    }
                    if(eventname.isBlank() && fileWasCreated){
                        println("Created unnecessary file, deleting")
                        file.delete()
                    }
                } else {
                    println("Upload Failed")
                    call.respond(HttpStatusCode.BadRequest,"Upload failed")
                }
            }
        }
        route("/accounts"){
            get(""){
                call.respond(accountSchema.allAccounts())
            }

            post("") {
                val account = call.receive<Account>()
                val accountID = accountSchema.createAccount(account)
                if(accountID != null){
                    call.respond(HttpStatusCode.Created, accountID)
                } else {
                    call.respond(HttpStatusCode.Conflict)
                }
            }

           put("/{accountID}") {
               println(call)
               val accountID = call.parameters["accountID"]?.toULong()
               val emailAddress = call.request.queryParameters["emailAddress"]?.toString()
               val phoneNumber = call.request.queryParameters["phoneNumber"]?.toString()
               if(accountID != null){
                   if(accountSchema.updateAccount(accountID, emailAddress, phoneNumber)){
                       call.respond(HttpStatusCode.OK)
                   } else {
                       call.respond(HttpStatusCode.NotAcceptable)
                   }
               } else {
                   call.respond(HttpStatusCode.NotFound)
               }
           }
            delete("/{accountID}"){
                val accountID = call.parameters["accountID"]?.toULong()
                if(accountID != null){
                    accountSchema.deleteAccount(accountID)
                    call.respond(HttpStatusCode.OK)
                } else {
                    call.respond(HttpStatusCode.NotFound)
                }

            }
        }
    }
}

