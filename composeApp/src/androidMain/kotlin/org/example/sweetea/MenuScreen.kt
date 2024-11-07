package org.example.sweetea

import androidx.compose.foundation.layout.Column
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavController
import androidx.navigation.NavHostController

@Composable
fun MenuPage(modifier: Modifier, navController: NavController){
    Column(){
        Text("Menu")
    }
}