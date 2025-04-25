package org.example.sweetea.database

import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.PartData
import io.ktor.http.content.forEachPart
import io.ktor.server.application.*
import io.ktor.server.auth.authenticate
import io.ktor.server.request.contentType
import io.ktor.server.request.receive
import io.ktor.server.request.receiveMultipart
import io.ktor.server.response.respond
import io.ktor.server.routing.delete
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.put
import io.ktor.server.routing.route
import io.ktor.server.routing.routing
import io.ktor.util.cio.writeChannel
import io.ktor.utils.io.copyTo
import org.jetbrains.exposed.sql.*
import org.example.sweetea.ModifiedProduct
import org.example.sweetea.ProductOrder
import org.example.sweetea.ResponseClasses.Event
import org.example.sweetea.database.model.AdminAccountRepository
import org.example.sweetea.database.model.EventRepository
import org.example.sweetea.database.model.FavoriteProductsRepository
import org.example.sweetea.database.model.ModifiedProductRepository
import org.example.sweetea.database.model.OrderRepository
import java.io.File

fun Application.configureDatabases(
    adminAccountRepository: AdminAccountRepository,
    eventRepository: EventRepository,
    modifiedProductRepository: ModifiedProductRepository,
    orderRepository: OrderRepository,
    favoritesRepository: FavoriteProductsRepository,
) {
    val l: String = File.separator
    routing {
        get("/salt/{emailAddress}"){
            val emailAddress = call.parameters["emailAddress"]
            if(!emailAddress.isNullOrBlank()){
                val salt = adminAccountRepository.getSalt(emailAddress)
                if(salt != null){
                    call.respond(HttpStatusCode.OK, salt)
                } else {
                    call.respond(HttpStatusCode.NotFound)
                }
            } else {
                call.respond(HttpStatusCode.BadRequest)
            }
        }
        route("/favorites"){
            get("/{emailAddress}"){
                val emailAddress = call.parameters["emailAddress"]
                if(!emailAddress.isNullOrBlank()){
                    val favorites = favoritesRepository.getFavorites(emailAddress)
                    call.respond(HttpStatusCode.OK, favorites)
                } else {
                    call.respond(HttpStatusCode.BadRequest)
                }
            }
            put("/{emailAddress}"){
                val emailAddress = call.parameters["emailAddress"]
                val modifiedProduct = call.receive<ModifiedProduct>()
                if(!emailAddress.isNullOrBlank()){
                    val newID = favoritesRepository.addFavoriteProduct(emailAddress, modifiedProduct)
                    if(newID > 0UL){
                        call.respond(HttpStatusCode.OK, newID)
                    } else {
                        call.respond(HttpStatusCode.NotFound)
                    }
                } else {
                    call.respond(HttpStatusCode.BadRequest)
                }
            }
            delete("/{emailAddress}"){
                val emailAddress = call.parameters["emailAddress"]
                val modifiedProduct = call.receive<ModifiedProduct>()
                if(!emailAddress.isNullOrBlank()){
                    if(favoritesRepository.removeFavorite(emailAddress, modifiedProduct)){
                        call.respond(HttpStatusCode.OK)
                    } else {
                        call.respond(HttpStatusCode.NotFound)
                    }
                } else {
                    call.respond(HttpStatusCode.BadRequest)
                }
            }
        }
        route("/orders"){
            post("/{emailAddress}"){
                val emailAddress = call.parameters["emailAddress"]
                val order = call.receive<ProductOrder>()
                if(!emailAddress.isNullOrBlank()){
                    val newID = orderRepository.addOrder(order) > 0UL
                    if(newID){
                        call.respond(HttpStatusCode.OK, newID)
                    } else {
                        call.respond(HttpStatusCode.NotFound)
                    }
                } else {
                    call.respond(HttpStatusCode.BadRequest)
                }
            }

        }
        authenticate("admin-auth-session") {
            route("/events") {
                get("") {
                    call.respond(eventRepository.allEvents())
                }
                get("/{eventID}") {
                    val eventID = call.parameters["eventID"]?.toLong()
                    if (eventID != null) {
                        val event = eventRepository.getEvent(eventID)
                        if (event != null) {
                            call.respond(event)
                        } else {
                            call.respond(HttpStatusCode.NotFound)
                        }
                    } else {
                        call.respond(HttpStatusCode.BadRequest)
                    }
                }
                delete("/{eventID}") {
                    val eventID = call.parameters["eventID"]?.toLong()
                    if (eventID != null) {
                        val deletedEvent = eventRepository.deleteEvent(eventID)
                        if (deletedEvent != null) {
                            File("uploads$l${deletedEvent.filename}").delete()
                            call.respond(HttpStatusCode.OK)
                        } else {
                            call.respond(HttpStatusCode.NotFound)
                        }
                    } else {
                        call.respond(HttpStatusCode.BadRequest)
                    }
                }
                put("/select/{eventID}") {
                    val eventID = call.parameters["eventID"]?.toLong()
                    if (eventID != null) {
                        val event = eventRepository.selectEvent(eventID)
                        if (event != null) {
                            call.respond(event)
                        } else {
                            call.respond(HttpStatusCode.NotFound)
                        }
                    } else {
                        call.respond(HttpStatusCode.BadRequest)
                    }

                }
                post("") {
                    if (call.request.contentType().match(ContentType.MultiPart.FormData)) {
                        var eventname = ""
                        var filename = ""
                        var buttonText = ""
                        var linkURL = ""
                        var linkIsRoute = false
                        var fileWasCreated = false
                        var file = File("")
                        call.receiveMultipart().forEachPart { part ->
                            if (part is PartData.FormItem) {
                                if (part.name == "event-name") eventname = part.value
                                if (part.name == "event-button-text") buttonText = part.value
                                if (part.name == "link-url") linkURL = part.value
                                if (part.name == "link-is-route") linkIsRoute = part.value == "true"
                                println("${part.name}: ${part.value}")
                            } else if (part is PartData.FileItem) {
                                println("recieved a file")
                                filename = part.originalFileName!!
                                if (filename.split(".")[1] == "svg") {
                                    call.respond(
                                        HttpStatusCode.NotAcceptable,
                                        "SVG files are not allowed"
                                    )
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
                        if (eventname.isNotBlank() && fileWasCreated) {
                            if (buttonText.isBlank()) buttonText = eventname
                            println("adding Event to Database")
                            println("$eventname, $buttonText, $filename, false, $linkURL, $linkIsRoute")
                            val event = Event(
                                0L,
                                eventname,
                                buttonText,
                                filename,
                                -1,
                                linkURL,
                                linkIsRoute
                            )
                            val eventID = eventRepository.createEvent(event)
                            if (eventID != null) call.respond(HttpStatusCode.Created)
                        } else {
                            call.respond(HttpStatusCode.BadRequest)
                        }
                        if (eventname.isBlank() && fileWasCreated) {
                            println("Created unnecessary file, deleting")
                            file.delete()
                        }
                    } else {
                        println("Upload Failed")
                        call.respond(HttpStatusCode.BadRequest, "Upload failed")
                    }
                }
            }
            /*
            route("/accounts") {
                get("") {
                    call.respond(accountRepository.allAccounts())
                }

                post("") {
                    val account = call.receive<Account>()
                    val accountID = accountRepository.createAccount(account)
                    if (accountID != null) {
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
                    if (accountID != null) {
                        if (accountRepository.updateAccount(accountID, emailAddress, phoneNumber)) {
                            call.respond(HttpStatusCode.OK)
                        } else {
                            call.respond(HttpStatusCode.NotAcceptable)
                        }
                    } else {
                        call.respond(HttpStatusCode.NotFound)
                    }
                }
                delete("/{accountID}") {
                    val accountID = call.parameters["accountID"]?.toULong()
                    if (accountID != null) {
                        accountRepository.deleteAccount(accountID)
                        call.respond(HttpStatusCode.OK)
                    } else {
                        call.respond(HttpStatusCode.NotFound)
                    }

                }
             */
        }
    }
}

