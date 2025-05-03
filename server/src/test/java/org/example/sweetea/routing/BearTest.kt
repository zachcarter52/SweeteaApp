package org.example.sweetea.routing

import io.ktor.client.call.body
import io.ktor.client.plugins.cookies.HttpCookies
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.request.put
import io.ktor.client.request.setBody
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.formUrlEncode
import io.ktor.server.testing.testApplication
import org.example.sweetea.ApplicationKtTest
import org.example.sweetea.ApplicationKtTest.Companion.adminAccountSchema
import org.example.sweetea.ApplicationKtTest.Companion.authenticateClient
import org.example.sweetea.ApplicationKtTest.Companion.eventSchema
import org.example.sweetea.ApplicationKtTest.Companion.rewardSchema
import org.example.sweetea.RewardValues
import org.example.sweetea.TestConstants
import org.example.sweetea.database.EventSchema
import org.example.sweetea.plugins.configureRouting
import org.example.sweetea.plugins.configureSecurity
import kotlin.test.Test
import kotlin.test.assertEquals

class BearTest{

    @Test
    fun testBears() {
        testGetBearValue()
        testSetBearValue()
    }

    @Test
    fun testGetBearValue() = testApplication {
        application {
            configureSecurity(
                adminAccountSchema
            )
            configureRouting(
                eventSchema,
                rewardSchema,
            )
        }
        val response = client.get("/bear-value").body<Int>()
        assertEquals(rewardSchema.rewards[""]!!.bears, response)
    }

    @Test
    fun testSetBearValue() = testApplication {
        application {
            configureSecurity(
                adminAccountSchema
            )
            configureRouting(
                eventSchema,
                rewardSchema,
            )
        }
        val client = createClient {
            install(HttpCookies)
        }
        val newBearValue = 100
        authenticateClient(client)
        client.put("/bear-value/$newBearValue")
        val newValueResponse = client.get("/bear-value").body<Int>()
        assertEquals(newBearValue, newValueResponse)
    }

    @Test
    fun testUpdateBearValue() = testApplication{
        application {
            configureSecurity(
                adminAccountSchema
            )
            configureRouting(
                eventSchema,
                rewardSchema,
            )
        }
        val client = createClient {
            install(HttpCookies)
        }
        val newBearValue = 100
        authenticateClient(client)
        client.put("/bear-value/test@mail.com/$newBearValue")
        val newValueResponse = client.get("/bear-value").body<Int>()
        assertEquals(newBearValue, newValueResponse)

    }
}
