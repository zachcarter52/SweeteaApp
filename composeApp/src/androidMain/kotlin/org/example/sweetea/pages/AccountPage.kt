package org.example.sweetea.pages

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ElevatedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.navigation.NavController


@Composable
fun AccountPage(modifier: Modifier=Modifier, navController: NavController){
    var clicked by rememberSaveable { mutableStateOf(false) }
    Column(verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = modifier) {
        Button(
            elevation = ButtonDefaults.elevatedButtonElevation(),
            onClick = {
                navController.navigate("login"){
                }
            }
        ) {
            Text("Log In")
        }
        ElevatedButton(
            onClick = {
                navController.navigate("signup")
            }
        ) {
            Text("Sign Up")
        }
    }
}