package org.example.sweetea.dataclasses.local

import io.ktor.client.HttpClient
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.serialization.kotlinx.json.json

class KtorServiceHandler {
    val ktor by lazy{
        HttpClient(){
            expectSuccess = true

            install(ContentNegotiation){
                json()
            }
        }
    }
    val eventService: EventsApiService by lazy {
        EventService(ktor)
    }
}