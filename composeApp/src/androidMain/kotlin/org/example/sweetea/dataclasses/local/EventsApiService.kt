package org.example.sweetea.dataclasses.local

import org.example.sweetea.Constants
import org.example.sweetea.EventResponse

interface EventsApiService {
    suspend fun getCurrentEvent(): Result<EventResponse>
}