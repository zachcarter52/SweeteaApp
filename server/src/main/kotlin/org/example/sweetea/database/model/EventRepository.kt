package org.example.sweetea.database.model

interface EventRepository {
    suspend fun createEvent(event: Event): ULong?
    suspend fun allEvents(): List<Event>
    suspend fun getEvent(eventID: ULong): Event?
    suspend fun updateEvent(eventID: ULong, updatedEvent: Event): Event?
}