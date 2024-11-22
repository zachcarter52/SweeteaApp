package org.example.sweetea.pages

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Button
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.material3.TextButton
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.sp
import androidx.compose.ui.Alignment
import androidx.compose.ui.unit.dp
import androidx.compose.ui.Modifier
import androidx.compose.foundation.layout.padding
import androidx.navigation.NavController
import android.util.Log
import androidx.compose.material3.Text
import com.amplifyframework.auth.AuthUserAttributeKey
import com.amplifyframework.auth.options.AuthSignUpOptions
import com.amplifyframework.core.Amplify

import org.example.sweetea.*

@Composable
fun LoginPage(modifier: Modifier, navController: NavController) {
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }

    Column(
        verticalArrangement = Arrangement.spacedBy(10.dp, alignment = Alignment.CenterVertically),
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = modifier
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

        Button(onClick = { /* Handle login */ }) {
            Text("Sign In")
        }

        TextButton(onClick = {
            navController.navigate(SignUp.route)
        }) {
            Text("Don't have an account? Sign Up")
        }

        /*  LOG OUT BUTTON
        Button(onClick = { /*TODO*/ }) {
            Text(text = "Log Out")
        }*/

    }
}

@Composable
fun SignupPage(modifier: Modifier, navController: NavController) {
    var username by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }

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

        Button(onClick = { /* Handle login */ }) {
            Text("Sign Up")
        }

        TextButton(onClick = { navController.navigate(Login.route) }) {
            Text("Already have an account? Log in")
        }
    }
}

@Composable
fun VerificationPage() {
    Column(
        verticalArrangement = Arrangement.spacedBy(10.dp, alignment = Alignment.CenterVertically),
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxSize()
    )
    {
        TextField(
            value = "",
            onValueChange = { },
            label = { Text("Verification Code") },
            visualTransformation = PasswordVisualTransformation()
        )

        Button(onClick = { /* Handle verification */ }) {
            Text("Verify")
        }


    }


    fun signup(username: String, password: String, email: String) {
        val options = AuthSignUpOptions.builder()
            .userAttribute(AuthUserAttributeKey.email(), email)
            .build()

        Amplify.Auth.signUp(
            username,
            password,
            options,
            { Log.i("AuthQuickstart", "Sign up succeeded: ${it.userId}") },
            { Log.e("AuthQuickstart", "Sign up failed  ${it.message}") }

        )

        fun signin(username: String, password: String) {
            Amplify.Auth.signIn(
                username,
                password,
                { Log.i("AuthQuickstart", "Sign in succeeded:") },
                { Log.e("AuthQuickstart", "Sign in failed") }
            )

        }

        fun signout() {
            Amplify.Auth.signOut() {
                Log.i("AuthQuickstart", "Sign out succeeded: ")
                Log.e("AuthQuickstart", "Sign out failed ")

            }

        }

    }
}

