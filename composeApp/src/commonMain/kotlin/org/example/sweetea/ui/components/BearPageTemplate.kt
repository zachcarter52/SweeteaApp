package org.example.sweetea.ui.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import org.jetbrains.compose.resources.painterResource
import sweetea.composeapp.generated.resources.Res
import sweetea.composeapp.generated.resources.sweetealogo_homepage_dark
import sweetea.composeapp.generated.resources.sweetealogo_homepage_light

@Composable
fun BearPageTemplate(
    modifier: Modifier = Modifier,
    showBear: Boolean = true,
    content: @Composable () -> Unit = {}){
    val logo = if (!isSystemInDarkTheme()){
        painterResource(Res.drawable.sweetealogo_homepage_light)
    } else {
        painterResource(Res.drawable.sweetealogo_homepage_dark)
    }

    Column(
        modifier = modifier.fillMaxSize()
            .verticalScroll(rememberScrollState()),
        verticalArrangement = if(showBear) Arrangement.spacedBy(20.dp)
            else Arrangement.Top,
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