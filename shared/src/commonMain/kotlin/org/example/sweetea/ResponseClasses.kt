package org.example.sweetea

import kotlinx.serialization.Serializable

object ResponseClasses {
    @Serializable
    data class Event (
        val id: Long = 0L,
        val name: String = "",
        val buttonText: String = "",
        val filename: String = "car.JPG",
        val selectionIndex: Int = -1,
        val link: String = "",
        val linkIsRoute: Boolean = false,
    ): Comparable<Event>{
        override fun compareTo(other: Event): Int {
            return id.compareTo(other.id)
        }
        fun toEventResponse() = EventResponse(
            name,
            buttonText,
            "${Constants.TEST_URL}:${Constants.SERVER_PORT}${Constants.IMAGES_ENDPOINT}$filename",
            selectionIndex,
            link,
            linkIsRoute
        )
    }

    @Serializable
    data class EventResponse(
        val eventName: String = "",
        val buttonText: String = "",
        val eventImageURL: String = "${Constants.SERVER_URL}:${Constants.SERVER_PORT}/uploads/car.JPG",
        val selectionIndex: Int = -1,
        val link: String = "",
        val linkIsRoute: Boolean = false,
    )

    @Serializable
    data class AppStatus(
        val currentEvents: List<EventResponse>,
        val bearValue: Int,
    ){
        companion object{
            val DefaultStatus = AppStatus(listOf(EventResponse()), Constants.DEFAULT_BEAR_VALUE)
        }
    }
}