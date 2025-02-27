package org.example.sweetea.dataclasses.local

import io.ktor.client.HttpClient
import io.ktor.client.plugins.cache.HttpCache
import io.ktor.client.plugins.cache.storage.FileStorage
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.serialization.kotlinx.json.json
import kotlinx.serialization.json.Json
import me.sujanpoudel.utils.paths.appCacheDirectory
import org.example.sweetea.Constants
import java.io.File

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

            install(HttpCache){
                val cachePath = appCacheDirectory(Constants.PACKAGE_NAME).toString()
                val cacheFile = File(cachePath, "ktorCache")
                publicStorage(FileStorage(cacheFile))

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