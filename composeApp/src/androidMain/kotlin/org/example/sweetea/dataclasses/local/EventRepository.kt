package org.example.sweetea.dataclasses.local

import org.example.sweetea.EventResponse

class EventRepository {
    private val eventService = KtorServiceHandler().eventService
    suspend fun getCurrentEvent(): EventResponse? {
        val eventResult = eventService.getCurrentEvent()
        println("Successfully got event: ${eventResult.isSuccess}")
        return eventResult.getOrNull()
    }
}