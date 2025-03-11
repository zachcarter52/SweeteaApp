package org.example.sweetea

import android.util.Log
import android.widget.Toast
import androidx.appcompat.widget.SearchView.SearchAutoComplete
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Button
import androidx.compose.material.OutlinedTextField
import androidx.compose.material.Text
import androidx.compose.material.TextButton
import androidx.compose.material.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.amplifyframework.auth.AuthException
import com.amplifyframework.auth.AuthUserAttributeKey
import com.amplifyframework.auth.options.AuthSignUpOptions
import com.amplifyframework.auth.result.AuthResetPasswordResult
import com.amplifyframework.core.Amplify
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.example.sweetea.UserPool.loginUser
import org.example.sweetea.UserPool.signUpUser


@Composable
fun LoginPage(modifier: Modifier, navController: NavController, onLoginComplete: () -> Unit = {}) {
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var username by remember { mutableStateOf("") }
    var errorMessage by remember { mutableStateOf<String?>(null) }

    Column(
    verticalArrangement = Arrangement.spacedBy(10.dp, alignment = Alignment.CenterVertically),
    horizontalAlignment = Alignment.CenterHorizontally,
    modifier = modifier.fillMaxSize()
    )

    {
        Text(text = "Login", fontSize = 24.sp, modifier = Modifier.padding(bottom = 24.dp))
        TextField(
            value = email,
            onValueChange = { email = it },
            label = { Text("Email") })

        TextField(
            value = password,
            onValueChange = { password = it },
            label = { Text("Password") },
            visualTransformation = PasswordVisualTransformation()
        )

        Button(onClick = {
            // Handle login logic here
            loginUser(email,password) { success, error ->
                if(success){
                   onLoginComplete()
                }else {
                    errorMessage = error
                }
            }
            // Fetch user attributes (username)
            Amplify.Auth.fetchUserAttributes(
                { attributes ->
                    val fetchUsername =
                        attributes.find { it.key.keyString == "preferred_username" }?.value
                    username = fetchUsername ?: ""
                    Log.i("AuthQuickstart", "Username: $username")
                },
                { error -> Log.e("AuthQuickstart", "Failed to fetch attributes", error) }
            )
        }) {
            Text("Sign In")
        }

        errorMessage?.let {
            Text(text = it, color = Color.Red)
            Text(text = "Welcome, $username!")
        }

        TextButton(onClick = {
            navController.navigate("signup")
        }) {
            Text("Don't have an account? Sign Up")
        }

        TextButton(onClick = {
            navController.navigate("forgotpassword/$email")
        }) {
            Text("Forgot Your Password?")
        }
    }
}

@Composable
fun SignupPage(modifier: Modifier, navController: NavController, onSignUpComplete: () -> Unit = {}) {
    var username by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var errorMessage by remember { mutableStateOf<String?>(null) }
    var shouldNavigate by remember { mutableStateOf(false) }

    Column (verticalArrangement = Arrangement.spacedBy(10.dp, alignment = Alignment.CenterVertically),
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxSize())
    {
        Text(text = "Sign Up", fontSize = 24.sp, modifier = Modifier.padding(bottom = 24.dp))
        TextField(
            value = username,
            onValueChange = { username= it },
            label = { Text("Username") }
        )
        TextField(
            value = email,
            onValueChange = { email = it },
            label = { Text("Email") })

        TextField(
            value = password,
            onValueChange = { password = it },
            label = { Text("Password") },
            visualTransformation = PasswordVisualTransformation()
        )

        Button(onClick = {
            signUpUser(email, password, username)
            { success, error ->
                if (success) {
                    onSignUpComplete()
                    shouldNavigate = true
                } else {
                    errorMessage = error
                }
            }
        }) {
            Text("Sign Up")
        }
        if(shouldNavigate){
            navController.navigate("verification/$email")
        }

        errorMessage?.let {
            Text(
                text = it,
                color = Color.Red,
                modifier = Modifier.align(Alignment.CenterHorizontally)
            )
        }

        TextButton(onClick = { navController.navigate("login") }) {
            Text("Already have an account? Log in")
        }
    }
}

@Composable
fun VerificationPage(modifier: Modifier, navController: NavController, email: String) {
    var code by remember { mutableStateOf("") }
    val context = LocalContext.current
    var errorMessage by remember { mutableStateOf<String?>(null) }
    val coroutineScope = rememberCoroutineScope()
    var shouldNavigate by remember { mutableStateOf(false) }

    Column(
        verticalArrangement = Arrangement.spacedBy(10.dp, alignment = Alignment.CenterVertically),
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxSize()
    )
    {
        Text(text = "Enter the verification code sent to $email")
        TextField(
            value = code,
            onValueChange = { code = it },
            label = { Text("Verification Code") },
        )

        errorMessage?.let {
            Text(text = it, color = Color.Red)
        }

        Button(onClick = {
            coroutineScope.launch {
                try {
            Amplify.Auth.confirmSignUp(email, code,
                { result ->
                        if (result.isSignUpComplete) {
                            shouldNavigate = true
                        } else {
                            errorMessage = "Verification failed"
                        }
                },{ error ->
                    Log.e("Amplify", "Confirm sign up failed", error)
                        errorMessage = "Verification failed: ${error.message}"
                }
            )
                } catch (error: Exception) {
                    Log.e("Amplify", "Error during confirmSignUp", error)
                }
            }
                }) {
                Text("Verify")
            }
        if(shouldNavigate){
            navController.navigate("logout")
        }
        }
    }

@Composable
fun LogOutPage(modifier: Modifier, navController: NavController) {
    Column(
        verticalArrangement = Arrangement.spacedBy(10.dp, alignment = Alignment.CenterVertically),
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = modifier.fillMaxSize()
    ) {

        Button(onClick = {
            Amplify.Auth.signOut() {
            }
            navController.navigate("accountmain")
        }) {
            Text("Log Out")
        }
    }
}

@Composable
fun ForgotPasswordPage(modifier: Modifier, navController: NavController, onPasswordResetSuccess: () -> Unit = {}) {
    var email by remember { mutableStateOf("") }
    var code by remember { mutableStateOf("") }
    var newPassword by remember { mutableStateOf("") }
    var step by remember { mutableIntStateOf(1) } // Step 1: Request reset, Step 2: Confirm new password, Step 3: Success
    val context = LocalContext.current
    var errorMessage by remember { mutableStateOf<String?>(null) }

    Column(
        verticalArrangement = Arrangement.spacedBy(10.dp, alignment = Alignment.CenterVertically),
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = modifier.fillMaxSize()
    ) {
        Text(
            text = when (step) {
                1 -> "Enter the email address associated with your account."
                2 -> "Enter the verification code sent to $email"
                3 -> "Password reset successful!"
                else -> ""
            }
        )

        errorMessage?.let {
            Text(text = it, color = Color.Red)
        }

        if (step == 1) {
            //Enter your email to reset your password
            OutlinedTextField(
                value = email,
                onValueChange = { email = it },
                label = { Text("Email") }
            )

            Spacer(modifier = Modifier.height(16.dp))

            Button(onClick = {
                // Handle email reset logic here
                Amplify.Auth.resetPassword(email,
                    { result: AuthResetPasswordResult ->
                        if (result.isPasswordReset) {
                            step = 2
                            Log.e("Amplify", "Password reset already initiated")
                        } else
                        step = 2
                        },
                    { error: AuthException ->
                        Log.e("Amplify", "Verification failed", error)
                        errorMessage = "Verification failed: ${error.message}"
                    })
            }) {
                Text("Send Reset Code")
            }

        } else if (step == 2) {

            //enter verification code and new Password
            OutlinedTextField(
                value = code,
                onValueChange = { code = it },
                label = { Text("Verification Code") },
            )
            OutlinedTextField(
                value = newPassword,
                onValueChange = { newPassword = it },
                label = { Text("New Password") },
                visualTransformation = PasswordVisualTransformation(),
            )
            Spacer(modifier = Modifier.height(16.dp))

            //Reset password button
            Button(onClick = {
                // Handle password reset logic here
                Amplify.Auth.confirmResetPassword(email, newPassword, code,
                {
                    onPasswordResetSuccess()
                    step = 3
                },
                    { error: AuthException ->
                    Log.e("Amplify", "Password reset failed", error)
                    errorMessage = "Password reset failed: ${error.message}"
                })
            }) {
                Text("Reset Password")
            }

        } else if (step == 3) {
            //Text("Password reset successful!")
            Spacer(modifier = Modifier.height(16.dp))
            Button(onClick = {
                navController.navigate("login")
            }) {
                Text("Log In")
            }
        }
    }
}



