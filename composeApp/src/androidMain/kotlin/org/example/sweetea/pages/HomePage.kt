package org.example.sweetea.pages

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.Text
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
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import androidx.navigation.NavHostController
import coil3.compose.AsyncImage
import coil3.request.ImageRequest
//import com.android.volley.toolbox.ImageRequest
import org.example.sweetea.*
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.ui.components.BearPageTemplate
import org.example.sweetea.ui.components.HomeCard
import org.jetbrains.compose.ui.tooling.preview.Preview

@Preview
@Composable
fun HomePage(
    modifier: Modifier=Modifier,
    navController: NavController,
    appViewModel: AppViewModel,
    authViewModel: AuthViewModel
) {
    LaunchedEffect(Unit){
        appViewModel.updateInfo()
    }

    val featuredItemsImage = painterResource(id = R.drawable.featured_items)
    var clicked by remember { mutableStateOf(false) }
    val currentEvent by appViewModel.currentEvent.collectAsState()
    val configuration = LocalConfiguration.current
    val screenHeight = configuration.screenHeightDp.dp
    val calculatedPadding = with(LocalDensity.current) { (screenHeight.toPx() * 0.1f).toDp() }
    val username by remember { authViewModel.username }
    val isLoggedIn by remember { authViewModel.isUserLoggedIn }

    LaunchedEffect(isLoggedIn) {
        if (isLoggedIn) {
            authViewModel.fetchUsername()
        }
    }

    BearPageTemplate(
        modifier = modifier,
    ) {
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
                navController.navigateSingleTopTo(
                    Menu.route
                )
            }
        )
        val url = currentEvent.eventImageURL
        val uriHandler = LocalUriHandler.current
        println("eventUrl: $url")
        HomeCard(
            image = {
                AsyncImage(
                    model = coil3.request.ImageRequest.Builder(LocalContext.current)
                        .data(url)
                        .memoryCacheKey(url)
                        .diskCacheKey(url)
                        .build(),
                    contentScale = ContentScale.FillHeight,
                    contentDescription = currentEvent.eventName,
                    placeholder = featuredItemsImage,
                    fallback = featuredItemsImage,
                    error = featuredItemsImage,
                )
            },
            imageHeader = currentEvent.eventName,
            buttonText = currentEvent.buttonText,
            onClick = {
                if(currentEvent.linkIsRoute) {
                    navController.navigateSingleTopTo(
                        currentEvent.link
                    )
                } else {
                    uriHandler.openUri(currentEvent.link)
                }
            }
        )
    }

}

