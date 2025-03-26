package org.example.sweetea.database

import org.example.sweetea.ResponseClasses.Event
import org.example.sweetea.database.model.EventRepository

class FakeEventRepository : EventRepository {
    private var maxSelectionIndex: Int = -1
    private val events = mutableMapOf(
        1L to Event(1L, "Selected Event", "Selected Button", selectionIndex = 0, link="https://google.com"),
        2L to Event(2L, "UnSelected Event", "UnSelected Button", selectionIndex = -1, link="https://google.com")
    )

    override suspend fun createEvent(event: Event): Long? {
        val newEvent = event.copy(events.size+1L)
        events[newEvent.id] = newEvent
        return events.size.toLong()
    }

    override suspend fun allEvents(): List<Event> {
        return events.values.toList()
    }

    override suspend fun getEvent(eventID: Long): Event? {
        return events[eventID]
    }

    override suspend fun updateEvent(eventID: Long, updatedEvent: Event): Boolean {
        events[eventID] = updatedEvent
        return events[eventID] == updatedEvent
    }

    override suspend fun getSelectedEventCount(): Int {
        return events.mapNotNull {   entry ->
            if(entry.value.selectionIndex > 0) {
                entry
            } else{
                null
            }
        }.count()

    }

    override suspend fun getEventsBySelected(): List<Event> {
        return allEvents().sortedBy {
            if(it.selectionIndex == -1){
                Int.MAX_VALUE
            } else {
                it.selectionIndex
            }
        }
    }

    override suspend fun getSelectedEvents(): List<Event> {
        return events.mapNotNull {   entry ->
            if(entry.value.selectionIndex > 0) {
                entry.value
            } else{
                null
            }
        }.sorted()
    }

    override suspend fun getEventBySelection(selectionIndex: Int): Event? {
        return events.values.mapNotNull { event ->
            if(event.selectionIndex == selectionIndex){
                event
            } else {
                null
            }
        }.singleOrNull()
    }

    override suspend fun swapSelections(selectionIndexA: Int, selectionIndexB: Int): Boolean {
        val eventA = getEventBySelection(selectionIndexA)
        val eventB = getEventBySelection(selectionIndexB)
        if(eventA != null && eventB != null) {
            events[eventA.id] = eventB
            events[eventB.id] = eventA
            return true;
        }
        return false
    }

    override suspend fun selectEvent(eventID: Long): Event? {
        if(maxSelectionIndex == -1) maxSelectionIndex = getSelectedEventCount()
        val event = events[eventID]
        if(event != null){
            events[eventID] = event.copy(selectionIndex = if(event.selectionIndex == -1) maxSelectionIndex++ else -1)
            if(event.selectionIndex != -1){
                for(i in event.selectionIndex + 1..maxSelectionIndex){
                    val eventToUpdate = getEventBySelection(i)
                    if(eventToUpdate != null){
                        events[eventToUpdate.id] = eventToUpdate.copy(eventToUpdate.selectionIndex-1L)
                    }
                }
            }
            return events[eventID]
        }
        return null
    }

    override suspend fun deleteEvent(eventID: Long): Event? {
        return events.remove(eventID)
    }
}