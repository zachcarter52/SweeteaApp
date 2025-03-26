package org.example.sweetea

import io.ktor.client.call.body
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.cookies.HttpCookies
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.request.put
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.formUrlEncode
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.testing.testApplication
import org.example.sweetea.plugins.configureRouting
import org.example.sweetea.plugins.configureSecurity
import kotlin.test.Test
import kotlin.test.assertEquals

class RoutingTest {
    @Test
    fun testRouting() {
        testGetBearValue()
        testSetBearValue()
    }

    @Test
    fun testGetBearValue() = testApplication {
        application {
            configureSecurity(
                ApplicationKtTest.adminAccountSchema
            )
            configureRouting(
                ApplicationKtTest.eventSchema,
                ApplicationKtTest.rewardSchema,
            )
        }
        val response = client.get("/bear-value")
        val bearValue = response.body<Int>()
        assertEquals(bearValue, ApplicationKtTest.rewardSchema.getBearValue())
    }

    @Test
    fun testSetBearValue() = testApplication {
        application {
            configureSecurity(
                ApplicationKtTest.adminAccountSchema
            )
            configureRouting(
                ApplicationKtTest.eventSchema,
                ApplicationKtTest.rewardSchema,
            )
        }
        val client = createClient {
            install(HttpCookies)
        }
        val newBearValue = 100
        client.post("/login") {
            header(HttpHeaders.ContentType, ContentType.Application.FormUrlEncoded.toString())
            setBody(listOf(
                "email-address" to Constants.ADMIN_EMAIL_ADDRESS,
                "hashed-password" to PrivateConstants.DATABASE_HASHED_PASSWORD
            ).formUrlEncode())
        }
        client.put("/bear-value/$newBearValue")
        assertEquals(newBearValue, ApplicationKtTest.rewardSchema.getBearValue())
    }
}
