package org.example.sweetea.database.model

import org.example.sweetea.ResponseClasses.Event

interface EventRepository {
    suspend fun createEvent(event: Event): Long?
    suspend fun allEvents(): List<Event>
    suspend fun getEvent(eventID: Long): Event?
    suspend fun updateEvent(eventID: Long, updatedEvent: Event): Boolean
    suspend fun getSelectedEvent(): Event?
    suspend fun selectEvent(eventID: Long): Event?
    suspend fun deleteEvent(eventID: Long): Event?
}