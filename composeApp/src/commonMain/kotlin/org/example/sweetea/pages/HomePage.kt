package org.example.sweetea.pages

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalUriHandler
import androidx.navigation.NavHostController
import coil3.compose.AsyncImage
import coil3.compose.LocalPlatformContext
import coil3.request.ImageRequest
import org.example.sweetea.*
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.ui.components.BearPageTemplate
import org.example.sweetea.ui.components.HomeCard
import org.jetbrains.compose.resources.painterResource
import org.jetbrains.compose.ui.tooling.preview.Preview
import sweetea.composeapp.generated.resources.Res
import sweetea.composeapp.generated.resources.featured_items

@Preview
@Composable
fun HomePage(
    modifier: Modifier=Modifier,
    navHostController: NavHostController,
    appViewModel: AppViewModel
) {
    LaunchedEffect(Unit){
        appViewModel.updateInfo()
    }

    val featuredItemsImage = painterResource(Res.drawable.featured_items)
    var clicked by remember { mutableStateOf(false) }

    val appStatus by appViewModel.appStatus.collectAsState()
    //Calculates top padding based on screen height.
    //Change the floating point value in calculatedPadding to change the image placement.

    BearPageTemplate(
        modifier = modifier,
    ) {
        if(appStatus.currentEvents.size < 2)
        HomeCard(
            image = {
                Image(
                    painter = featuredItemsImage,
                    contentDescription = "Featured Items",
                    contentScale = ContentScale.FillHeight,
                    modifier = Modifier
                        .fillMaxWidth()
                        .wrapContentSize(Alignment.Center)
                    //.padding(top = calculatedPadding)
                )
            },
            imageHeader = "Featured Menu Items",
            buttonText = "Order Now",
            onClick = {
                navHostController.navigateSingleTopTo(Menu.route)
            }
        )
        val uriHandler = LocalUriHandler.current
        for(event in appStatus.currentEvents){
            val url = event.eventImageURL
            HomeCard(
                image = {
                    AsyncImage(
                        model = ImageRequest.Builder(LocalPlatformContext.current)
                            .data(url)
                            .memoryCacheKey(url)
                            .diskCacheKey(url)
                            .build(),
                        contentScale = ContentScale.FillHeight,
                        contentDescription = event.eventName,
                        placeholder = featuredItemsImage,
                        fallback = featuredItemsImage,
                        error = featuredItemsImage,
                    )
                },
                imageHeader = event.eventName,
                buttonText = event.buttonText,
                onClick = {
                    if(event.linkIsRoute) {
                        navHostController.navigateSingleTopTo(event.link)
                    } else {
                        uriHandler.openUri(event.link)
                    }
                }
            )
        }
    }

}

