import org.example.sweetea.AuthViewModel
//import io.mockk.*
//import io.mockk.every
import org.junit.Assert.*
import org.junit.Test
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit

object AuthTestUtils {
    fun isValidEmail(email: String): Boolean {
        return android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()
    }
}

class AuthTest {

    @Test
    fun testSuccessfulLogin(){

    }

    @Test
    fun testSignInUser_returnsTrue() {
        /*signInUser("test@example.com", "password"){
            result = it
            latch.countDown()
        }*/
        //assertTrue("Expected login to succeed", result == true)
    }

    @Test
    fun validEmail_returnsTrue() {
        val result = AuthTestUtils.isValidEmail("test@example.com")
        assertTrue(result)
    }

    @Test
    fun invalidEmail_returnsFalse() {
        val result = AuthTestUtils.isValidEmail("bademail.com")
        assertFalse(result)
    }

}