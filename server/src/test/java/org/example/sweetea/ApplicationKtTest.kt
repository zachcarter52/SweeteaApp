package org.example.sweetea

import io.ktor.client.HttpClient
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
import io.ktor.server.application.install
import io.ktor.server.plugins.contentnegotiation.ContentNegotiation
import io.ktor.server.testing.testApplication
import kotlinx.serialization.json.Json
import org.example.sweetea.database.repository.FakeAdminAccountRepository
import org.example.sweetea.database.repository.FakeEventRepository
import org.example.sweetea.database.repository.FakeFavoriteProductRepository
import org.example.sweetea.database.repository.FakeModifiedProductRepository
import org.example.sweetea.database.repository.FakeModifierRepository
import org.example.sweetea.database.repository.FakeOrderRepository
import org.example.sweetea.database.repository.FakeOrderedProductRepository
import org.example.sweetea.database.repository.FakeRewardRepository
import org.example.sweetea.plugins.configureSecurity
import org.example.sweetea.plugins.configureWebPanel
import org.example.sweetea.routing.BearTest
import org.mindrot.jbcrypt.BCrypt
import kotlin.test.*

class ApplicationKtTest {
    companion object{
        val adminAccountSchema = FakeAdminAccountRepository()
        val eventSchema = FakeEventRepository()
        val rewardSchema = FakeRewardRepository()
        val modifierSchema = FakeModifierRepository()
        val modifiedProductSchema = FakeModifiedProductRepository(modifierSchema)
        val orderedProductSchema = FakeOrderedProductRepository(modifiedProductSchema)
        val productOrderSchema = FakeOrderRepository(orderedProductSchema, rewardSchema)
        val favoritesSchema = FakeFavoriteProductRepository(modifiedProductSchema)

        suspend fun authenticateClient(client: HttpClient){
            client.post("/login") {
                header(HttpHeaders.ContentType, ContentType.Application.FormUrlEncoded.toString())
                setBody(
                    listOf(
                        "email-address" to TestConstants.ADMIN_EMAIL,
                        "hashed-password" to TestConstants.ADMIN_HASHED_PASSWORD
                    ).formUrlEncode()
                )
            }
        }
    }

    @Test
    fun testRoot(){

        testLoginRedirection()
        testFormAuthentication()
        testRouting()

    }

    @Test
    fun testRouting(){
        val bearTest = BearTest()
        bearTest.testBears()
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
                "email-address" to TestConstants.ADMIN_EMAIL,
                "hashed-password" to BCrypt.hashpw("incorrectPassword", BCrypt.gensalt())
            ).formUrlEncode())
        }
        val incorrectPasswordCorrectEmail = client.get("/index")
        client.post("/login") {
            header(HttpHeaders.ContentType, ContentType.Application.FormUrlEncoded.toString())
            setBody(listOf(
                "email-address" to "wronge@email.com",
                "hashed-password" to TestConstants.ADMIN_HASHED_PASSWORD
            ).formUrlEncode())
        }
        val incorrectEmailCorrectPassword = client.get("/index")
        client.post("/login") {
            header(HttpHeaders.ContentType, ContentType.Application.FormUrlEncoded.toString())
            setBody(listOf(
                "email-address" to TestConstants.ADMIN_EMAIL,
                "hashed-password" to TestConstants.ADMIN_HASHED_PASSWORD
            ).formUrlEncode())
        }
        val correctEmailAndPassword = client.get("/index")
        assertEquals(incorrectEmailAndPassword.bodyAsText(), loginResponse.bodyAsText())
        assertEquals(incorrectPasswordCorrectEmail.bodyAsText(), loginResponse.bodyAsText())
        assertEquals(incorrectEmailCorrectPassword.bodyAsText(), loginResponse.bodyAsText())
        assertNotEquals(correctEmailAndPassword.bodyAsText(), loginResponse.bodyAsText())
    }


}