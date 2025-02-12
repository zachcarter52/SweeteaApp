package services

import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.serialization.json.Json
import kotlinx.serialization.encodeToString
import models.PaymentResponse
import java.util.*

object SquarePaymentService {
    private const val SQUARE_API_URL = "https://connect.squareup.com/v2/payments"
    private val SQUARE_ACCESS_TOKEN = System.getenv("SQUARE_ACCESS_TOKEN") ?: "MY_TOKEN"

    suspend fun processPayment(nonce: String, amount: Long): PaymentResponse {
        val client = HttpClient()

        val requestBody = mapOf(
            "source_id" to nonce,
            "amount_money" to mapOf(
                "amount" to amount,  // Amount in cents
                "currency" to "USD"
            ),
            "idempotency_key" to UUID.randomUUID().toString()
        )

        val response: HttpResponse = client.post(SQUARE_API_URL) {
            contentType(ContentType.Application.Json)
            header("Square-Version", "2024-01-17")
            header("Authorization", "Bearer $SQUARE_ACCESS_TOKEN")
            setBody(Json.encodeToString(requestBody))
        }

        return if (response.status == HttpStatusCode.OK) {
            PaymentResponse(success = true, message = "Payment successful")
        } else {
            val errorBody = response.bodyAsText()
            PaymentResponse(success = false, message = "Payment failed: $errorBody")
        }
    }
}
