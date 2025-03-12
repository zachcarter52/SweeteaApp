package org.example.sweetea.dataclasses.local

import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.get
import org.example.sweetea.Constants
import org.example.sweetea.EventResponse

class EventService(private val ktor: HttpClient): EventsApiService {
    private val BASEURL = "${Constants.TEST_URL}:${Constants.SERVER_PORT}"
    override suspend fun getCurrentEvent(): Result<EventResponse> {
        return runCatching{
            ktor.get("$BASEURL${Constants.EVENT_ENDPOINT}").body()
        }
    }
}