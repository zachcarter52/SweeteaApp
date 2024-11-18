package org.example.sweetea

import android.util.Log
import androidx.appcompat.widget.SearchView.SearchAutoComplete
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Button
import androidx.compose.material.Text
import androidx.compose.material.TextButton
import androidx.compose.material.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.amplifyframework.auth.AuthUserAttributeKey
import com.amplifyframework.auth.options.AuthSignUpOptions
import com.amplifyframework.core.Amplify
import org.example.sweetea.UserPool.loginUser
import org.example.sweetea.UserPool.signUpUser


@Composable
fun LoginPage(modifier: Modifier, navController: NavController, onLoginComplete: () -> Unit = {}) {
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
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
            loginUser(email,password) { success, error ->
                if(success){
                   onLoginComplete()
                }else {
                    errorMessage = error
                }

            }
        }) {
            Text("Sign In")
        }

        errorMessage?.let {
            Text(text = it, color = Color.Red)
        }

        TextButton(onClick = {
            navController.navigate("signup")
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
fun SignupPage(modifier: Modifier, navController: NavController, onSignUpComplete: () -> Unit = {}) {
    var username by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var errorMessage by remember { mutableStateOf<String?>(null) }

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
            signUpUser(email,password)
            { success, error ->
                if (success) {
                    onSignUpComplete()
                } else {
                    errorMessage = error
                }
            }
        }) {
            Text("Sign Up")
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
}

