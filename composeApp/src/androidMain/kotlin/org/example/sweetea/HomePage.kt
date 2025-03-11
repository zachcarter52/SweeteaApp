package org.example.sweetea

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material3.ElevatedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import org.jetbrains.compose.ui.tooling.preview.Preview


@Preview
@Composable
fun HomePage(modifier: Modifier=Modifier, navController: NavController, viewModel: AuthViewModel) {
    var clicked by remember { mutableStateOf(false) }
    val logo = painterResource(id = R.drawable.sweetealogo_homepage_light)
    val configuration = LocalConfiguration.current
    val screenHeight = configuration.screenHeightDp.dp
    val calculatedPadding = with(LocalDensity.current) { (screenHeight.toPx() * 0.1f).toDp() }
    val username by remember { viewModel.username }
    val isLoggedIn by remember { viewModel.isUserLoggedIn }

    LaunchedEffect(isLoggedIn) {
        if (isLoggedIn) {
            viewModel.fetchUsername()
        }
    }

    if (isLoggedIn) {
        Text("Welcome, $username!",
            fontSize = 20.sp,
            fontFamily = FontFamily.SansSerif, // Change font here
            fontWeight = FontWeight.Bold,
            color = Color.Black
            ) // Show only if logged in
    }

    Row(modifier = modifier) {
        Box(modifier = Modifier.fillMaxSize()) {
            Image(
                painter = logo,
                contentDescription = "App Logo",
                contentScale = ContentScale.Fit,
                modifier = Modifier
                    .fillMaxWidth()
                    .wrapContentSize(Alignment.Center)
                    .padding(top = calculatedPadding)
            )

        }
        Column(modifier = modifier) {
            ElevatedButton(onClick = {clicked = !clicked}) {
                Text("Events")
            }
        }
    }
}
