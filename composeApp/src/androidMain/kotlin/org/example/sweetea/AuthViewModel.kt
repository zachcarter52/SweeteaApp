package org.example.sweetea

import android.util.Log
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.amplifyframework.auth.AuthUserAttributeKey
import com.amplifyframework.auth.options.AuthSignUpOptions
import com.amplifyframework.auth.result.step.AuthSignInStep
import com.amplifyframework.core.Amplify
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class AuthViewModel : ViewModel() {
    private val authRepository: AuthRepository = CognitoAuthRepository()
    var isUserLoggedIn = MutableStateFlow(false)
        private set
    val isUserLoggedInState: StateFlow<Boolean> = isUserLoggedIn.asStateFlow()
    val username = MutableStateFlow("")
    val usernameState: StateFlow<String> = username.asStateFlow()
    //var username = mutableStateOf("") // Stores username across UI screens

    init {
        checkUserLoginStatus() // check login status when the ViewModel is initialized
    }

    fun signUpUser(email: String, password: String, username: String, onResult: (Boolean, String?) -> Unit) {
        val options = AuthSignUpOptions.builder()
            .userAttribute(AuthUserAttributeKey.email(), email)
            .userAttribute(AuthUserAttributeKey.preferredUsername(), username) // Store username
            .build()

        Amplify.Auth.signUp(email, password, options,
            { result -> onResult(true,null)
                // Handle successful sign-up
                Log.i("Amplify", "Sign up successful!")
            },
            { error -> onResult(false, error.message)
                Log.e("Amplify", "Sign up failed: $error")
            }
        )
    }

    fun loginUser(email: String, password: String, onResult: (Boolean, String?) -> Unit) {
        Amplify.Auth.signIn(email, password,
            { result ->
                when (result.nextStep.signInStep) {
                    AuthSignInStep.DONE -> {
                        Log.e("AuthDebug", "Login DONE - updating state")
                        isUserLoggedIn.value = true
                        fetchUsername()
                        onResult(true, "Sign in succeeded")
                    }
                    else -> {
                        Log.d("AuthDebug", "Login requires additional steps")
                        onResult(false, "Sign-in not complete")
                    }
                }
            },
            { error ->
                Log.e("AuthDebug", "Login failed", error)
                onResult(false, error.message) }
        )
    }

    private fun checkUserLoginStatus() {
        Amplify.Auth.fetchAuthSession(
            { session ->
                isUserLoggedIn.value = session.isSignedIn
                if (session.isSignedIn) {
                    fetchUsername()
                } else {
                    username.value = "" // Reset username when logged out
                }
            },
            { error -> Log.e("AuthViewModel", "Error checking login status", error) }
        )
    }

    fun fetchUsername() {
        viewModelScope.launch {
            Amplify.Auth.fetchUserAttributes(
                { attributes ->
                    username.value =
                        attributes.find { it.key.keyString == "preferred_username" }?.value
                            ?: ""
                    isUserLoggedIn.value = username.value != ""
                    Log.e("AuthViewModel", "Username updated to: ${username.value}")
                },
                { error -> Log.e("AuthViewModel", "Failed to fetch attributes", error) }
            )
        }
    }

}