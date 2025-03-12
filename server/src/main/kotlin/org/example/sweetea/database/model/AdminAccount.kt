package org.example.sweetea.database.model

import kotlinx.serialization.Serializable

@Serializable
data class AdminAccount(
    val adminID: Long,
    val emailAddress: String,
    val salt: String,
    val hashedPassword: String,
)
