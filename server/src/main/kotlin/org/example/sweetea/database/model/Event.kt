package org.example.sweetea.database.model

import kotlinx.serialization.Serializable

@Serializable
data class Event (
    val id: Long,
    val name: String,
    val buttonText: String,
    val filename: String,
    val isSelected: Boolean,
    val link: String,
    val linkIsRoute: Boolean,
)