package org.example.sweetea.dataclasses.local

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.delete
import io.ktor.client.request.get
import io.ktor.client.request.put
import io.ktor.client.request.setBody
import io.ktor.http.ContentType
import io.ktor.http.contentType
import org.example.sweetea.Constants
import org.example.sweetea.Favorites
import org.example.sweetea.ModifiedProduct
import org.example.sweetea.ResponseClasses.AppStatus

class ServerService(private val ktor: HttpClient): ServerApiService{
    private val BASEURL = "${Constants.TEST_URL}:${Constants.SERVER_PORT}"
    override suspend fun getAppStatus(): Result<AppStatus> {
        return runCatching{
            ktor.get("$BASEURL${Constants.APP_STATUS_ENDPOINT}").body()
        }
    }

    override suspend fun getFavorites(emailAddress: String): Result<Favorites> {
        return runCatching {
            ktor.get("$BASEURL${Constants.FAVORITES_ENDPOINT}$emailAddress").body()
        }
    }

    override suspend fun addFavorite(emailAddress: String, modifiedProduct: ModifiedProduct) {
        runCatching {
            ktor.put("$BASEURL${Constants.FAVORITES_ENDPOINT}$emailAddress") {
                contentType(ContentType.Application.Json)
                setBody(modifiedProduct)
            }
        }
    }

    override suspend fun removeFavorite(emailAddress: String, modifiedProduct: ModifiedProduct) {
        runCatching {
            ktor.delete("$BASEURL${Constants.FAVORITES_ENDPOINT}$emailAddress") {
                contentType(ContentType.Application.Json)
                setBody(modifiedProduct)
            }
        }
    }
}