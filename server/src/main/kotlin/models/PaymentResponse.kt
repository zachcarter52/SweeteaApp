package models

import kotlinx.serialization.Serializable

@Serializable
data class PaymentResponse(
    val success: Boolean,
    val message: String
)
