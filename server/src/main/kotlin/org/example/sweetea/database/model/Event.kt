package org.example.sweetea.database.model

import kotlinx.serialization.Serializable

@Serializable
data class Event (
    val eventID: ULong,
    val name: String,
    val filename: String,
    val isSelected: Boolean,
)