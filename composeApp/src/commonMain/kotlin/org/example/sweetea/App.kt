package org.example.sweetea

import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInHorizontally
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutHorizontally
import androidx.compose.animation.slideOutVertically
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Scaffold
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import coil3.ImageLoader
import coil3.compose.setSingletonImageLoaderFactory
import coil3.disk.DiskCache
import coil3.memory.MemoryCache
import coil3.request.CachePolicy
import coil3.util.DebugLogger
import me.sujanpoudel.utils.paths.appCacheDirectory
import moe.tlaster.precompose.PreComposeApp
import moe.tlaster.precompose.navigation.rememberNavigator
import okio.Path.Companion.toPath
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.ui.components.AppBottomBar
import org.example.sweetea.ui.components.AppHeader
import org.example.sweetea.ui.theme.AppTheme
import org.koin.compose.KoinContext
import org.koin.compose.viewmodel.koinViewModel

@Composable
fun SweeteaApp(
    modifier:Modifier = Modifier,
){
    KoinContext{
        val viewModel = koinViewModel<AppViewModel>()
        LaunchedEffect(Unit){
            viewModel.updateInfo()
        }

        setSingletonImageLoaderFactory { context ->
            ImageLoader.Builder(context)
                .memoryCachePolicy(CachePolicy.ENABLED)
                .memoryCache {
                    MemoryCache.Builder()
                        .maxSizePercent(context, 0.20)
                        .build()
                }
                .diskCachePolicy(CachePolicy.ENABLED)
                .networkCachePolicy(CachePolicy.ENABLED)
                .diskCache {
                    println("appCacheDir: ${appCacheDirectory(Constants.PACKAGE_NAME)}/image_cache")
                    DiskCache.Builder()
                        .directory((appCacheDirectory(Constants.PACKAGE_NAME).toString() + "/image_cache").toPath())
                        .maxSizeBytes(5 * 1024 * 1024)
                        .build()
                }
                .logger(DebugLogger())
                .build()
        }

        PreComposeApp {
            AppTheme(
                dynamicColor = false
            ) {

                val navigator = rememberNavigator()
                val navBackStackEntry by navigator.currentEntry.collectAsStateWithLifecycle(null)



                var currentRoute by remember { mutableStateOf("") }

                var selectedItem by remember { mutableIntStateOf(0) }
                var oldSelectedItem by remember { mutableIntStateOf(0) }

                val navRoute = navBackStackEntry?.route?.route
                var currentRouteObject by remember { mutableStateOf(destMap(Home.route)) }
                if(navRoute != null && navRoute != currentRoute){
                    currentRoute = navRoute
                    val curRouteObj = destMap( navRoute )
                    if(curRouteObj != null && curRouteObj.index >= 0 ){
                        currentRouteObject = curRouteObj
                        oldSelectedItem = selectedItem
                        selectedItem = curRouteObj.index
                    }
                }

                val enterTransition = {
                    when {
                        selectedItem > oldSelectedItem ->
                            slideInHorizontally(initialOffsetX = { it }) +
                                    fadeIn()

                        selectedItem < oldSelectedItem ->
                            slideInHorizontally(initialOffsetX = { -it }) +
                                    fadeIn()

                        else ->
                            if (BaseDestinations.indexOf(currentRouteObject) == -1) {
                                slideInVertically(initialOffsetY = { it }) +
                                        fadeIn()
                            } else {
                                slideInVertically(initialOffsetY = { -it }) +
                                        fadeIn()
                            }
                    }
                }

                val exitTransition = {
                    when {
                        selectedItem > oldSelectedItem ->
                            slideOutHorizontally(targetOffsetX = { -it }) +
                                    fadeOut()

                        selectedItem < oldSelectedItem ->
                            slideOutHorizontally(targetOffsetX = { it }) +
                                    fadeOut()

                        else ->
                            if (BaseDestinations.indexOf(currentRouteObject) == -1) {
                                slideOutVertically(targetOffsetY = { -it }) +
                                        fadeOut()
                            } else {
                                slideOutVertically(targetOffsetY = { it }) +
                                        fadeOut()
                            }
                    }
                }

                //appViewModel.currentCategory = 3
                val locationList by viewModel.locationList.collectAsState()
                println("LocationData $locationList")
                println("Current Categegory ${viewModel.currentCategory}")
                //val coroutineScope = rememberCoroutineScope()

                Scaffold(
                    topBar = {
                        /*
                    if (nearestStore != null) {
                        Text("Nearest Store: ${nearestStore!!.name}",
                            modifier = Modifier.fillMaxWidth().padding(16.dp))

                        Button(

                            onClick = { userLocation?.let { openGoogleMaps(context, nearestStore!!.location.latitude, nearestStore!!.location.longitude ) } },
                            modifier = Modifier.padding(50.dp)
                        ) {
                            Text("Go to Store")
                        }
                    }
                     */

                        if (currentRouteObject != null) {
                            AppHeader(
                                modifier = modifier,
                                viewModel = viewModel,
                                headerText = currentRouteObject!!.topBarHeaderText,
                                hideLocation = currentRouteObject!!.hideLocation,
                                hideTopBarHeader = currentRouteObject!!.hideTopBarHeader,
                                enterTransition = enterTransition,
                                exitTransition = exitTransition
                            )
                        } else {
                            AppHeader(
                                modifier = modifier,
                                viewModel = viewModel,
                                enterTransition = enterTransition,
                                exitTransition = exitTransition
                            )
                        }
                    },
                    bottomBar = {
                        AppBottomBar(
                            navigator = navigator,
                            selectedItem = selectedItem,
                        )
                    }
                ) { padding ->
                    SweetTeaNavHost(
                        viewModel = viewModel,
                        navigator = navigator,
                        modifier = Modifier.padding(padding),
                        navTransition = SweeteaNavTransition(
                            createTransition = enterTransition,
                            destroyTransition = exitTransition,
                        ),
                    )
                }
            }
        }
    }
}
