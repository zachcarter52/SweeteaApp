package org.example.sweetea

import android.util.Log
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import com.amplifyframework.auth.AuthUserAttributeKey
import com.amplifyframework.auth.options.AuthSignUpOptions
import com.amplifyframework.auth.result.step.AuthSignInStep
import com.amplifyframework.core.Amplify

class AuthViewModel : ViewModel() {
    var isUserLoggedIn = mutableStateOf(false)
        private set

    var username = mutableStateOf("") // Stores username across UI screens

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
                        onResult(false, "Sign in succeeded")
                        fetchUsername()
                    }
                    else -> onResult(false, "Sign-in not complete")
                }
            },
            { error -> onResult(false, error.message) }
        )
    }

    private fun checkUserLoginStatus() {
        Amplify.Auth.fetchAuthSession(
            { session ->
                isUserLoggedIn.value = session.isSignedIn
                if (session.isSignedIn) {
                    fetchUsername()
                }
            },
            { error -> Log.e("AuthViewModel", "Error checking login status", error) }
        )
    }

    fun fetchUsername() {
        Amplify.Auth.fetchUserAttributes(
            { attributes ->
                val fetchedUsername = attributes.find { it.key.keyString == "preferred_username" }?.value ?: "Unknown"
                username.value = fetchedUsername ?: "User"
                Log.e("AuthViewModel", "Username: $fetchedUsername")
            },
            { error -> Log.e("AuthViewModel", "Failed to fetch attributes", error) }
        )
    }


}