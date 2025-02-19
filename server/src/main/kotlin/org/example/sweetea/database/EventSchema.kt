package org.example.sweetea.database

import org.example.sweetea.database.model.DatabaseSchema
import org.example.sweetea.database.model.Event
import org.example.sweetea.database.model.EventRepository
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction

class EventSchema(database: Database): EventRepository, DatabaseSchema() {
    object Events: Table(){
        val eventID = ulong("eventID").autoIncrement()
        val name = varchar("name", length = 255)
        val filename = varchar("filename", length = 255)
        val isSelected = bool("isSelected").default(false)
        override val primaryKey = PrimaryKey(eventID)
    }

    init{
        transaction(database) {
            SchemaUtils.create(Events)
        }
    }
    override suspend fun createEvent(event: Event): ULong? {
       return dbQuery {
           if(Events.selectAll().where{Events.name eq event.name}.singleOrNull() != null){
               return@dbQuery null
           } else {
               println(event.name)
               return@dbQuery Events.insert{
                   it[name] = event.name;
                   it[filename] = event.filename;
               }[Events.eventID]
           }
       }
    }

    override suspend fun allEvents(): List<Event> {
        return dbQuery {
            Events.selectAll().map{
                Event(
                    it[Events.eventID],
                    it[Events.name],
                    it[Events.filename],
                    it[Events.isSelected]
                )
            }
        }
    }

    override suspend fun getEvent(eventID: ULong): Event? {
        return dbQuery {
            Events.selectAll().where{Events.eventID eq eventID}
                .map{
                    Event(
                        it[Events.eventID],
                        it[Events.name],
                        it[Events.filename],
                        it[Events.isSelected]
                    )
                }.singleOrNull()
        }
    }

    override suspend fun updateEvent(eventID: ULong, updatedEvent: Event): Event? {
        return dbQuery {
            if(Events.update({Events.eventID eq eventID}){
                if(updatedEvent.name.isNotBlank()) it[name] = updatedEvent.name
                if(updatedEvent.filename.isNotBlank()) it[filename] = updatedEvent.filename
            } > 0){
                return@dbQuery Events.selectAll().where{Events.eventID eq eventID}
                    .map{
                        Event(
                            it[Events.eventID],
                            it[Events.name],
                            it[Events.filename],
                            it[Events.isSelected]
                        )
                    }.singleOrNull()
            } else {
                null
            }
        }
    }

}