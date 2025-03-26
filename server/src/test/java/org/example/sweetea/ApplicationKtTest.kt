package org.example.sweetea

import io.ktor.client.plugins.cookies.HttpCookies
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.client.statement.bodyAsText
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.http.formUrlEncode
import io.ktor.server.testing.testApplication
import org.example.sweetea.database.AdminAccountSchema
import org.example.sweetea.database.FakeAdminAccountRepository
import org.example.sweetea.database.FakeEventRepository
import org.example.sweetea.database.FakeRewardRepository
import org.example.sweetea.database.RewardSchema
import org.example.sweetea.database.configureDatabases
import org.example.sweetea.database.model.AdminAccountRepository
import org.example.sweetea.plugins.configureSecurity
import org.example.sweetea.plugins.configureWebPanel
import org.mindrot.jbcrypt.BCrypt
import kotlin.test.*

class ApplicationKtTest {
    companion object{
        val adminAccountSchema = FakeAdminAccountRepository()
        val eventSchema = FakeEventRepository()
        val rewardSchema = FakeRewardRepository()
    }

    @Test
    fun testRoot(){

        testLoginRedirection()
        testFormAuthentication()

    }

    /* Verify That Unauthorized attempts to access the admin panel
       correctly redirect to the login page*/
    @Test
    fun testLoginRedirection() = testApplication {
        application {
            configureSecurity(
                adminAccountSchema
            )
            configureWebPanel(
                eventSchema,
                rewardSchema
            )
        }
        val loginResponse = client.get("/login")
        val unauthorizedIndexResponse = client.get("/index")
        assertEquals(loginResponse.status, HttpStatusCode.OK)
        assertEquals(unauthorizedIndexResponse.status, HttpStatusCode.OK)
        assertEquals(loginResponse.bodyAsText(), unauthorizedIndexResponse.bodyAsText())
    }

    @Test
    fun testFormAuthentication() = testApplication {
        application {
            configureSecurity(
                adminAccountSchema
            )
            configureWebPanel(
                eventSchema,
                rewardSchema
            )
        }
        val client = createClient {
            install(HttpCookies)
        }
        val loginResponse = client.get("/login")
        client.post("/login") {
            header(HttpHeaders.ContentType, ContentType.Application.FormUrlEncoded.toString())
            setBody(listOf(
                "email-address" to "wronge@email.com",
                "hashed-password" to BCrypt.hashpw("incorrectPassword", BCrypt.gensalt())
            ).formUrlEncode())
        }
        val incorrectEmailAndPassword = client.get("/index")
        client.post("/login") {
            header(HttpHeaders.ContentType, ContentType.Application.FormUrlEncoded.toString())
            setBody(listOf(
                "email-address" to Constants.ADMIN_EMAIL_ADDRESS,
                "hashed-password" to BCrypt.hashpw("incorrectPassword", BCrypt.gensalt())
            ).formUrlEncode())
        }
        val incorrectPasswordCorrectEmail = client.get("/index")
        client.post("/login") {
            header(HttpHeaders.ContentType, ContentType.Application.FormUrlEncoded.toString())
            setBody(listOf(
                "email-address" to "wronge@email.com",
                "hashed-password" to PrivateConstants.DATABASE_HASHED_PASSWORD
            ).formUrlEncode())
        }
        val incorrectEmailCorrectPassword = client.get("/index")
        client.post("/login") {
            header(HttpHeaders.ContentType, ContentType.Application.FormUrlEncoded.toString())
            setBody(listOf(
                "email-address" to Constants.ADMIN_EMAIL_ADDRESS,
                "hashed-password" to PrivateConstants.DATABASE_HASHED_PASSWORD
            ).formUrlEncode())
        }
        val correctEmailAndPassword = client.get("/index")
        assertEquals(incorrectEmailAndPassword.bodyAsText(), loginResponse.bodyAsText())
        assertEquals(incorrectPasswordCorrectEmail.bodyAsText(), loginResponse.bodyAsText())
        assertEquals(incorrectEmailCorrectPassword.bodyAsText(), loginResponse.bodyAsText())
        assertNotEquals(correctEmailAndPassword.bodyAsText(), loginResponse.bodyAsText())
    }
}