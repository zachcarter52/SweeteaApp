package org.example.sweetea

import kotlinx.serialization.Serializable
import kotlin.random.Random

@Serializable
data class EventResponse (
    val eventName: String,
    val buttonText: String,
    val eventImageURL: String,
    val link: String,
    val linkIsRoute: Boolean,
)
