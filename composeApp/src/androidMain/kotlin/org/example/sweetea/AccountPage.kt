package org.example.sweetea

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
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
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import androidx.navigation.NavHostController

@Composable
fun AccountPage(modifier: Modifier=Modifier, navController: NavController){
    var clicked by rememberSaveable { mutableStateOf(false) }
    Column(
        verticalArrangement = Arrangement.spacedBy(10.dp, alignment = Alignment.CenterVertically),
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = modifier.fillMaxSize()
    ) {
        ElevatedButton(
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
        ElevatedButton(
            onClick = {
                navController.navigate("logout")
            }
        ) {
            Text("Sign Out")
        }
    }
}