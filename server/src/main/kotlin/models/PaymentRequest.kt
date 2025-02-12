package models

import kotlinx.serialization.Serializable

@Serializable
data class PaymentRequest(
    val nonce: String,   // Square-generated nonce
    val amount: Long      // Amount in cents (e.g., $10.00 = 1000 cents)
)
