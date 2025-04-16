package org.example.sweetea

import kotlinx.serialization.Serializable

object ResponseClasses {
    @Serializable
    data class Event (
        val id: Long,
        val name: String,
        val buttonText: String,
        val filename: String,
        val isSelected: Boolean,
        val link: String,
        val linkIsRoute: Boolean,
    ): Comparable<Event>{
        override fun compareTo(other: Event): Int {
            return id.compareTo(other.id)
        }
        fun toEventResponse() = EventResponse(
            name,
            buttonText,
            "${Constants.TEST_URL}:${Constants.SERVER_PORT}${Constants.IMAGES_ENDPOINT}$filename",
            link,
            linkIsRoute
        )
        companion object {
            val DefaultEvent = Event(0L, "", "", "car.JPG", false, "", false)
        }
    }

    @Serializable
    data class EventResponse(
        val eventName: String,
        val buttonText: String,
        val eventImageURL: String,
        val link: String,
        val linkIsRoute: Boolean,
    ){
        companion object{
            val DefaultEvent = Event.DefaultEvent.toEventResponse()
        }
    }

    @Serializable
    data class AppStatus(
        val currentEvent: EventResponse,
        val bearValue: Int,
    ){
        companion object{
            val DefaultStatus = AppStatus(EventResponse.DefaultEvent, Constants.DEFAULT_BEAR_VALUE)
        }
    }
}