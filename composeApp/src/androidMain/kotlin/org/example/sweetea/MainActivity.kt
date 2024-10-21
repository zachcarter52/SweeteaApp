package org.example.sweetea

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.ui.Alignment
import androidx.compose.ui.input.pointer.motionEventSpy
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.style.LineHeightStyle
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            //Displays current screen
            //App()- default *REMOVED*
            HomeScreen()
        }
    }
}

@Preview
@Composable
fun HomeScreen() {
    val logo = painterResource(id = R.drawable.sweetealogo_homepage)

    //Calculates top padding based on screen height.
    //Change the floating point value in calculatedPadding to change the image placement.
    val configuration = LocalConfiguration.current
    val screenHeight = configuration.screenHeightDp.dp
    val calculatedPadding = with(LocalDensity.current) { (screenHeight.toPx() * 0.1f).toDp() }

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

}