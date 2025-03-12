package org.example.sweetea.dataclasses.local

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.get
import org.example.sweetea.Constants
import org.example.sweetea.ResponseClasses.AppStatus

class ServerService(private val ktor: HttpClient): ServerApiService{
    private val BASEURL = "${Constants.TEST_URL}:${Constants.SERVER_PORT}"
    override suspend fun getAppStatus(): Result<AppStatus> {
        return runCatching{
            ktor.get("$BASEURL${Constants.APP_STATUS_ENDPOINT}").body()
        }
    }
}