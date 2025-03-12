package org.example.sweetea.database

import org.example.sweetea.database.model.DatabaseSchema
import org.example.sweetea.ResponseClasses.Event
import org.example.sweetea.database.model.EventRepository
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.transactions.transaction

class EventSchema(database: Database): EventRepository, DatabaseSchema() {
    object Events: Table(){
        val id = long("eventID").autoIncrement()
        val name = varchar("name", length = 255)
        val filename = varchar("filename", length = 255)
        val buttonText = varchar("buttonText", length = 255)
        val isSelected = bool("isSelected").default(false)
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
                      it[isSelected] = true
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
                    it[Events.isSelected],
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
                        it[Events.isSelected],
                        it[Events.link],
                        it[Events.linkIsRoute],
                    )
                }.singleOrNull()
        }
    }

    override suspend fun getSelectedEvent(): Event? {
        return dbQuery {
            Events.selectAll().where{Events.isSelected eq true}
                .map{
                    Event(
                        it[Events.id],
                        it[Events.name],
                        it[Events.buttonText],
                        it[Events.filename],
                        it[Events.isSelected],
                        it[Events.link],
                        it[Events.linkIsRoute],
                    )
                }.singleOrNull()
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
                            it[Events.isSelected],
                            it[Events.link],
                            it[Events.linkIsRoute],
                        )
                    }.isNotEmpty()
            } else {
                return@dbQuery false
            }
        }
    }

    override suspend fun selectEvent(id: Long): Event?{
        return dbQuery {
            val previouslySelectedEvent = getSelectedEvent()
            val selectedNewEvent = Events.update({ Events.id eq id }){
                it[isSelected] = true
            } > 0
            if(selectedNewEvent){
                if(previouslySelectedEvent != null) Events.update({ Events.id eq previouslySelectedEvent.id  }){
                    it[isSelected] = false
                }
                val curEvent = getEvent(id)
                if(curEvent != null) {
                    selectedEvent = curEvent
                    return@dbQuery selectedEvent
                }
                return@dbQuery null
            } else {
                return@dbQuery null
            }
        }
    }

    override suspend fun deleteEvent(id: Long): Event? {
        return dbQuery {
            val eventToDelete = getEvent(id)
            if (eventToDelete != null) {
                if(eventToDelete.isSelected){
                   selectEvent(allEvents().first().id)
                }
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