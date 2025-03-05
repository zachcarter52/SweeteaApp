package org.example.sweetea

import io.ktor.server.application.*
import io.ktor.server.engine.embeddedServer
import org.example.sweetea.plugins.configureRouting
import org.example.sweetea.plugins.configureSecurity
import org.example.sweetea.plugins.configureSerialization
import io.ktor.server.netty.*;
import org.example.sweetea.database.configureDatabases
import org.example.sweetea.plugins.configureWebPanel
import org.mindrot.jbcrypt.BCrypt
import java.util.concurrent.ThreadLocalRandom
import kotlin.streams.asSequence

fun main(args: Array<String>) {
    embeddedServer(Netty, port = Constants.SERVER_PORT, host = Constants.SERVER_HOST, module = Application::module)
        .start(wait = true)
    //io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    val database = configureDatabases()
    configureSecurity()
    configureSerialization()
    configureRouting()
    configureWebPanel(database)
}
