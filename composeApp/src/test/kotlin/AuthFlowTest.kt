import com.amplifyframework.auth.AuthCategory
import com.amplifyframework.auth.AuthException
import com.amplifyframework.auth.AuthUserAttributeKey
import com.amplifyframework.auth.result.AuthSignUpResult
import com.amplifyframework.core.Amplify
import io.mockk.*
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.example.sweetea.AuthViewModel
import org.junit.After
import org.junit.Assert.assertNotNull
import org.junit.Before
import org.junit.Test


class AuthFlowTest {

    private lateinit var authViewModel: AuthViewModel
    //private lateinit var mockAuthCategory: AuthCategory

    @Before
    fun setUp() {
        authViewModel = AuthViewModel()
        mockkObject(Amplify.Auth)
        //mockAuthCategory = mockk(relaxed = true)
        //var authViewModel = AuthViewModel(authCategory = mockAuthCategory)
        //mockkStatic(Amplify.Auth::class
    }

    @After
    fun tearDown() {
        unmockkAll()
    }

    @Test
    fun signUpUser_returnsTrue() {
        val email = "test@example.com"
        val password = "password"
        val username = "testuser"

        //val mockResultCallback = slot<(com.amplifyframework.auth.result.AuthSignUpResult) -> Unit>()
        //val mockErrorCallback = slot<(com.amplifyframework.auth.AuthException) -> Unit>()

        every {
            Amplify.Auth.signUp(
                any(), any(), any(),
                any(), any()
            )
        } answers {
            val onSuccess = arg<(AuthSignUpResult) -> Unit>(3) // 3rd argument (index 2)
            val fakeResult = mockk<AuthSignUpResult>(relaxed = true) {
                every {isSignUpComplete} returns true // or false if you want
            }
            onSuccess.invoke(fakeResult)
        }

        var isSuccess: Boolean? = null
        var errorMessage: String? = null

        authViewModel.signUpUser(email, password, username) { success, error ->
            isSuccess = success
            errorMessage = error

        }

        assertTrue(isSuccess == true)
        assertNull(errorMessage, "Expected error message to be null")

    }

    @Test
    fun signUpUser_returnsFalse() {
        val email = "test@example.com"
        val password = "password"
        val username = "testuser"

        //val mockResultCallback = slot<(com.amplifyframework.auth.result.AuthSignUpResult) -> Unit>()
        //val mockErrorCallback = slot<(com.amplifyframework.auth.AuthException) -> Unit>()

        every {
            Amplify.Auth.signUp(
                any(), any(), any(),
                any(), any()
            )
        } answers {
            val onError = arg<(AuthException) -> Unit>(4)
            onError(AuthException("Fake signup failure", "MOCK"))
            }

        var isSuccess: Boolean? = null
        var errorMessage: String? = null

    authViewModel.signUpUser(email, password, username) { success, error ->
        isSuccess = success
        errorMessage = error

    }

        assertTrue(isSuccess == false || isSuccess == null)
        assertNotNull(errorMessage, "Expected an error message")

    }
}
