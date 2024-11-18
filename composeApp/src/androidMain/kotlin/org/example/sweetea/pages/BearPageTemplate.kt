package org.example.sweetea.pages

import androidx.compose.foundation.Image
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import org.example.sweetea.R

@Composable
fun BearPageTemplate(
    modifier: Modifier = Modifier,
    showBear: Boolean = true,
    content: @Composable () -> Unit = {}){
    val logo = if (!isSystemInDarkTheme()){
        painterResource(id = R.drawable.sweetealogo_homepage_light)
    } else {
        painterResource(id = R.drawable.sweetealogo_homepage_dark)
    }

    Column(
        modifier = modifier,
        verticalArrangement = Arrangement.spacedBy(20.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ){
        if(showBear) {
            Box {
                Image(
                    painter = logo,
                    contentDescription = "App Logo",
                    contentScale = ContentScale.Fit,
                    modifier = Modifier
                        .fillMaxWidth()
                        .wrapContentSize(Alignment.Center)
                    //.padding(top = calculatedPadding)
                )
            }
        }
        content()
    }

}