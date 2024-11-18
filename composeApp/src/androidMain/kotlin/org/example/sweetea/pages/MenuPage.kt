package org.example.sweetea.pages

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavController

@Composable
fun MenuPage(modifier: Modifier, navController: NavController){
    Column(
        modifier = modifier
    ){
        Row(){
            Text("Menu")
        }
    }
}