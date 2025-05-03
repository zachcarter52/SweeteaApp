package org.example.sweetea.database

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import org.example.sweetea.ResponseClasses.Event
import org.example.sweetea.database.model.DatabaseSchema
import org.example.sweetea.database.model.EventRepository
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.deleteWhere
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.update

class EventSchema(database: Database): EventRepository, DatabaseSchema() {
    object Events: Table(){
        val id = long("eventID").autoIncrement()
        val name = varchar("name", length = 255)
        val filename = varchar("filename", length = 255)
        val buttonText = varchar("buttonText", length = 255)
        val selectionIndex = integer("selectionIndex").default(-1)
        val link = varchar("link", length = 2083)
        val linkIsRoute = bool("linkIsRoute").default(false)

        override val primaryKey = PrimaryKey(id)
    }

    init{
        transaction(database) {
            SchemaUtils.create(Events)
        }
    }
    

    override suspend fun createEvent(event: Event): Long? {
       return dbQuery {
           if(Events.selectAll().where{Events.name eq event.name}.singleOrNull() != null){
               return@dbQuery null
           } else {
               println(event.name)
               val newEventID = Events.insert{
                   it[name] = event.name
                   it[buttonText] = event.buttonText
                   it[filename] = event.filename
                   it[link] = event.link
                   it[linkIsRoute] = event.linkIsRoute
               }[Events.id]
               if(newEventID == 1L){
                  Events.update({ Events.id eq newEventID }){
                      it[selectionIndex] = 1
                  }
               }
               return@dbQuery newEventID
           }
       }
    }

    override suspend fun allEvents(): List<Event> {
        return dbQuery {
            Events.selectAll().map{
                Event(
                    it[Events.id],
                    it[Events.name],
                    it[Events.buttonText],
                    it[Events.filename],
                    it[Events.selectionIndex],
                    it[Events.link],
                    it[Events.linkIsRoute],
                )
            }
        }
    }

    override suspend fun getEvent(eventID: Long): Event? {
        return dbQuery {
            Events.selectAll().where{Events.id eq eventID}
                .map{
                    Event(
                        it[Events.id],
                        it[Events.name],
                        it[Events.buttonText],
                        it[Events.filename],
                        it[Events.selectionIndex],
                        it[Events.link],
                        it[Events.linkIsRoute],
                    )
                }.singleOrNull()
        }
    }

    override suspend fun getSelectedEventCount(): Int {
        return dbQuery {
            Events.selectAll().where{Events.selectionIndex greater -1}.count().toInt()
        }
    }

    private var selectedEvents = listOf<Event>()
    private var mustUpdateSelectedEvents = true

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
        if(mustUpdateSelectedEvents) {
            return dbQuery {
                selectedEvents = Events.selectAll().where { Events.selectionIndex greater -1 }
                    .map {
                        Event(
                            it[Events.id],
                            it[Events.name],
                            it[Events.buttonText],
                            it[Events.filename],
                            it[Events.selectionIndex],
                            it[Events.link],
                            it[Events.linkIsRoute],
                        )
                    }.sorted()
                return@dbQuery selectedEvents
            }
        } else {
            return selectedEvents
        }
    }

    override suspend fun getEventBySelection(selectionIndex: Int): Event? {
        return dbQuery {
            Events.selectAll().where{Events.selectionIndex eq selectionIndex}
                .map{
                    Event(
                        it[Events.id],
                        it[Events.name],
                        it[Events.buttonText],
                        it[Events.filename],
                        it[Events.selectionIndex],
                        it[Events.link],
                        it[Events.linkIsRoute],
                    )
                }.singleOrNull()
        }
    }

    override suspend fun swapSelections(selectionIndexA: Int, selectionIndexB: Int): Boolean {
        return dbQuery {
            val eventA = getEventBySelection(selectionIndexA)
            val eventB = getEventBySelection(selectionIndexB)
            if(eventA != null && eventB != null && eventA != eventB){
                val updatedA = Events.update({ Events.id eq eventA.id}){
                    it[selectionIndex] = selectionIndexB
                }
                val updatedB = Events.update({ Events.id eq eventB.id}){
                    it[selectionIndex] = selectionIndexA
                }
                val completedSuccessfully = updatedB > 0 && updatedA > 0
                if(completedSuccessfully) mustUpdateSelectedEvents = true
                return@dbQuery completedSuccessfully
            }
            return@dbQuery false
        }
    }

    override suspend fun updateEvent(id: Long, updatedEvent: Event): Boolean {
        return dbQuery {
            if(Events.update({Events.id eq id}){
                if(updatedEvent.name.isNotBlank()) it[name] = updatedEvent.name
                if(updatedEvent.filename.isNotBlank()) it[filename] = updatedEvent.filename
            } > 0){
                return@dbQuery Events.selectAll().where{Events.id eq id}
                    .map {
                        Event(
                            it[Events.id],
                            it[Events.name],
                            it[Events.buttonText],
                            it[Events.filename],
                            it[Events.selectionIndex],
                            it[Events.link],
                            it[Events.linkIsRoute],
                        )
                    }.isNotEmpty()
            } else {
                return@dbQuery false
            }
        }
    }

    override suspend fun selectEvent(eventID: Long): Event?{
        return dbQuery {
            val event = getEvent(eventID)
            if(event != null) {
                val currentSelectedEventCount = getSelectedEventCount()
                Events.update({ Events.id eq eventID }) {
                    it[selectionIndex] = if(event.selectionIndex == -1) currentSelectedEventCount+1 else -1
                } > 0
                if(event.selectionIndex != -1){
                    for(i in event.selectionIndex + 1..currentSelectedEventCount+1){
                        val eventToUpdate = getEventBySelection(i)
                        if(eventToUpdate != null){
                            Events.update({Events.id eq eventToUpdate.id}){
                               it[selectionIndex] = eventToUpdate.selectionIndex - 1
                            }
                        }
                    }
                }
                return@dbQuery getEvent(eventID)
            }
            return@dbQuery null
        }
    }

    override suspend fun deleteEvent(id: Long): Event? {
        return dbQuery {
            val eventToDelete = getEvent(id)
            if (eventToDelete != null) {
                val rowsChanged = Events.deleteWhere{
                    Events.id eq id
                }
                if(rowsChanged == 1) {
                    return@dbQuery eventToDelete
                } else {
                    return@dbQuery null
                }
            } else {
                return@dbQuery null
            }
        }
    }

}