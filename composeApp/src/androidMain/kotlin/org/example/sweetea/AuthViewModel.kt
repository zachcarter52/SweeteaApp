package org.example.sweetea

import android.util.Log
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import com.amplifyframework.core.Amplify

class AuthViewModel : ViewModel() {
    var isUserLoggedIn = mutableStateOf(false)
        private set

    var username = mutableStateOf("") // Stores username across UI screens

    init {
        checkUserLoginStatus() // check login status when the ViewModel is initialized
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
            },
            { error -> Log.e("AuthViewModel", "Failed to fetch attributes", error) }
        )
    }
}