package org.example.sweetea

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.material3.ElevatedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.navigation.NavHostController

@Composable
fun AccountPage(navController: NavHostController ,modifier: Modifier=Modifier){
    var clicked by rememberSaveable { mutableStateOf(false) }
    Column(verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = modifier) {
        ElevatedButton(
            onClick = {clicked = !clicked}
        ) {
            Text("Log In")
        }
        ElevatedButton(
            onClick = {clicked = !clicked}
        ) {
            Text("Sign Up")
        }
    }
}