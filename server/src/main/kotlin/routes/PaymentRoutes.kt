package routes

import io.ktor.server.response.*
import io.ktor.server.request.*
import io.ktor.http.*
import io.ktor.server.routing.*
import models.PaymentRequest
import services.SquarePaymentService

fun Route.paymentRoutes() {
    route("/process-payment") {
        post {
            val request = call.receive<PaymentRequest>()
            val paymentResponse = SquarePaymentService.processPayment(request.nonce, request.amount)

            if (paymentResponse.success) {
                call.respond(HttpStatusCode.OK, paymentResponse)
            } else {
                call.respond(HttpStatusCode.InternalServerError, paymentResponse)
            }
        }
    }
}
