package org.example.sweetea

import android.util.Log
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import com.amplifyframework.auth.AuthUserAttribute
import com.amplifyframework.auth.AuthUserAttributeKey
import com.amplifyframework.auth.options.AuthSignUpOptions
import com.amplifyframework.auth.result.step.AuthSignInStep
import com.amplifyframework.core.Amplify
import com.amplifyframework.core.configuration.AmplifyOutputsData

object UserPool {

    fun signUpUser(email: String, password: String, onResult: (Boolean, String?) -> Unit) {
        val options = AuthSignUpOptions.builder()
            .userAttribute(AuthUserAttributeKey.email(), email)
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

                    }
                    //AuthSignInStep.CONFIRM_SIGN_IN_WITH_NEW_PASSWORD
                        //-> {onResult(false, "Sign in succeeded")}

                else -> onResult(false, "Sign-in not complete")
                }
            },
            { error -> onResult(false, error.message) }
        )
    }
}


