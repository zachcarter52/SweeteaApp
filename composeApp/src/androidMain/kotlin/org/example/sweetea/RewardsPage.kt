package org.example.sweetea

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController

@Composable
fun RewardsPage(){
    Column(
        Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally
    ){
        Text("Rewards Program",
            modifier = Modifier.align(alignment = Alignment.Start),
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold,
            )
        ContentScreen()
        Text("$1 / 1 Star",
            modifier = Modifier.padding(16.dp),
            fontSize = 18.sp,
            fontWeight = FontWeight.Bold,
        )
        CustomCircularProgressIndicator(
            modifier = Modifier
                .size(250.dp)
                .background(Color.DarkGray)

            ,
            initialValue = 0,
            primaryColor = Color.Blue,
            secondaryColor = Color.Gray,
            circleRadius = 230f,
            onPositionChange = {

            },
        )
        Text("Free drink at 75 stars!",
            modifier = Modifier.padding(16.dp),
            fontSize = 18.sp,
            fontWeight = FontWeight.Bold,
        )
    }
}

