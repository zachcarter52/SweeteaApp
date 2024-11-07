package org.example.sweetea

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavController
import androidx.navigation.NavHostController

@Composable
fun RewardsPage(modifier: Modifier, navController: NavController){
    Column(
        Modifier.fillMaxSize()
    ){
        Text("Rewards Page")
    }
}