package org.example.sweetea

import android.util.Log
import com.amplifyframework.core.Amplify
import com.amplifyframework.auth.AuthException
import com.amplifyframework.auth.result.step.AuthSignInStep

class CognitoAuthRepository : AuthRepository {
    override fun signInUser(email: String, password: String,
                            onResult: (Boolean, String?) -> Unit) {

        Amplify.Auth.signIn(email, password,
            { result ->
                when (result.nextStep.signInStep) {
                    AuthSignInStep.DONE -> {
                        Log.e("AuthDebug", "Login DONE - updating state")
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
                onResult(false, error.message)
            }
        )

    }


}