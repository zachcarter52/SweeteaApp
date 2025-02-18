package org.example.sweetea

import io.ktor.server.application.*
import io.ktor.server.engine.embeddedServer
import org.example.sweetea.plugins.configureRouting
import org.example.sweetea.plugins.configureSecurity
import org.example.sweetea.plugins.configureSerialization
import io.ktor.server.netty.*;
import org.example.sweetea.plugins.configureWebPanel

fun main(args: Array<String>) {
    embeddedServer(Netty, port = Constants.SERVER_PORT, host = "0.0.0.0", module = Application::module)
        .start(wait = true)
    //io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    configureSecurity()
    configureSerialization()
    //configureDatabases()
    configureRouting()
    configureWebPanel()
}
