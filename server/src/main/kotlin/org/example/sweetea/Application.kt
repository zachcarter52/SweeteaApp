package org.example.sweetea

import io.ktor.server.application.Application
import io.ktor.server.engine.ApplicationEngine
import io.ktor.server.engine.applicationEnvironment
import io.ktor.server.engine.connector
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import org.example.sweetea.database.configureDatabases
import org.example.sweetea.plugins.configureRouting
import org.example.sweetea.plugins.configureSecurity
import org.example.sweetea.plugins.configureSerialization
import org.example.sweetea.plugins.configureWebPanel

fun main(args: Array<String>) {

    /*
    val session = Session("acme://letsencrypt.org/staging")
    val accountKeyPair = KeyPairUtils.createKeyPair()
    val domainKeyPair = KeyPairUtils.createKeyPair()
    val userKeyFile = File("user.key")
    val domainKeyFile = File("domain.key")
    KeyPairUtils.writeKeyPair(accountKeyPair, FileWriter(userKeyFile))
    KeyPairUtils.writeKeyPair(domainKeyPair, FileWriter(domainKeyFile))
     */

    embeddedServer(Netty, applicationEnvironment{}, {configureEnvironment()}, module = Application::module)
        .start(wait = true)
    //io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    configureSecurity()
    configureDatabases()
    configureSerialization()
    configureRouting()
    configureWebPanel()
}

fun ApplicationEngine.Configuration.configureEnvironment(){
    connector {
        port = Constants.SERVER_PORT
        host = Constants.SERVER_HOST
    }
}