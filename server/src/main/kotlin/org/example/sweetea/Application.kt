package org.example.sweetea

import io.ktor.serialization.kotlinx.json.json
import io.ktor.server.application.*
import io.ktor.server.engine.ApplicationEngine
import io.ktor.server.engine.applicationEnvironment
import io.ktor.server.engine.connector
import io.ktor.server.engine.embeddedServer
import org.example.sweetea.plugins.configureRouting
import org.example.sweetea.plugins.configureSecurity
import org.example.sweetea.plugins.configureSerialization
import io.ktor.server.netty.*;
import io.ktor.server.plugins.contentnegotiation.ContentNegotiation
import kotlinx.serialization.json.Json
import org.example.sweetea.database.AccountSchema
import org.example.sweetea.database.AdminAccountSchema
import org.example.sweetea.database.EventSchema
import org.example.sweetea.database.RewardSchema
import org.example.sweetea.database.configureDatabases
import org.example.sweetea.plugins.configureWebPanel
import org.jetbrains.exposed.sql.Database

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

val json = Json{
    ignoreUnknownKeys = true
}

fun Application.module() {
    install(ContentNegotiation){
        json(json)
    }
    val database = Database.connect(
        url = "jdbc:mariadb://"+Constants.DATABASE_HOST+":3306/"+Constants.DATABASE_NAME,
        user = Constants.DATABASE_USERNAME,
        password = Constants.DATABASE_PASSWORD,
        driver = "org.mariadb.jdbc.Driver",
    )
    val adminAccountSchema = AdminAccountSchema(database)
    val eventSchema = EventSchema(database)
    val rewardSchema = RewardSchema(database)
    val accountSchema = AccountSchema(database)
    configureSecurity(
        adminAccountSchema
    )
    configureDatabases(
        adminAccountSchema,
        eventSchema,
    )
    configureSerialization()
    configureRouting(
        eventSchema,
        rewardSchema
    )
    configureWebPanel(
        eventSchema,
        rewardSchema
    )
}

fun ApplicationEngine.Configuration.configureEnvironment(){
    connector {
        port = Constants.SERVER_PORT
        host = Constants.SERVER_HOST
    }
}