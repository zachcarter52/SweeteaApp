package org.example.sweetea.dataclasses.local

import io.ktor.client.HttpClient
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.serialization.kotlinx.json.json
import kotlinx.serialization.json.Json

class KtorServiceHandler {
    val ktor by lazy{
        HttpClient(){
            expectSuccess = true

            install(ContentNegotiation){
                json(
                    Json{
                        ignoreUnknownKeys = true
                        coerceInputValues = true
                    }
                )
            }
        }
    }
    val eventService: EventsApiService by lazy {
        EventService(ktor)
    }
    val squareService: SquareApiService by lazy {
        SquareService(ktor)
    }
}