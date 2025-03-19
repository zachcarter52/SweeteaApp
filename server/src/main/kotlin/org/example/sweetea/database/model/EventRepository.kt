package org.example.sweetea.database.model

import org.example.sweetea.ResponseClasses.Event

interface EventRepository {
    suspend fun createEvent(event: Event): Long?
    suspend fun allEvents(): List<Event>
    suspend fun getEvent(eventID: Long): Event?
    suspend fun updateEvent(eventID: Long, updatedEvent: Event): Boolean
    suspend fun getSelectedEventCount(): Int?
    suspend fun getEventsBySelected(): List<Event>
    suspend fun getSelectedEvents(): List<Event>
    suspend fun getEventBySelection(selectionIndex: Int): Event?
    suspend fun swapSelections(selectionIndexA: Int, selectionIndexB: Int): Boolean
    suspend fun selectEvent(eventID: Long): Event?
    suspend fun deleteEvent(eventID: Long): Event?
}