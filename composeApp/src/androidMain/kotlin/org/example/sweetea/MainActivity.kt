package org.example.sweetea

import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.ElevatedButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.unit.dp
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.animation.EnterTransition
import androidx.compose.animation.ExitTransition
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInHorizontally
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutHorizontally
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.runtime.mutableIntStateOf
import androidx.navigation.NavGraph.Companion.findStartDestination
import com.amplifyframework.AmplifyException
import com.amplifyframework.core.Amplify
import com.amplifyframework.core.AmplifyConfiguration
import com.amplifyframework.auth.cognito.AWSCognitoAuthPlugin


import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.navigation
import androidx.navigation.compose.rememberNavController
import org.example.sweetea.ui.theme.AppTheme


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            //Displays current screen
            //App()- default *REMOVED*
            SweeteaApp()
            //LoginScreen()
            //VerificationScreen()
        }
        // Initialize Amplify / Cognito
        try {
            Amplify.addPlugin(AWSCognitoAuthPlugin())
            Amplify.configure(applicationContext)
            Log.i("MyAmplifyApp", "Initialized Amplify")

        } catch (error: AmplifyException) {
            Log.e("MyAmplifyApp", "Could not initialize Amplify", error)
        }

    }
}

@Composable
fun SweeteaApp(modifier: Modifier=Modifier){
    AppTheme(
        dynamicColor = false
    ){
        val navController = rememberNavController()
        val navBackStackEntry by navController.currentBackStackEntryAsState()
        var currentRoute by remember{mutableStateOf("")}

        val navRoute = navBackStackEntry?.destination?.route
        if(navRoute != null){
            currentRoute = navRoute
        }
        var selectedItem by remember { mutableIntStateOf(0) }
        var oldSelectedItem by remember { mutableIntStateOf(0) }

        val enterTransition = {
            if(selectedItem > oldSelectedItem){
                slideInHorizontally(initialOffsetX = {it}) +
                        fadeIn()
            } else {
                slideInHorizontally(initialOffsetX = {-it}) +
                        fadeIn()
            }
        }
        val exitTransition = {
            if(selectedItem > oldSelectedItem) {
                slideOutHorizontally(targetOffsetX = { -it }) +
                        fadeOut()
            } else {
                slideOutHorizontally(targetOffsetX = { it }) +
                        fadeOut()
            }
        }

        Scaffold(
            topBar = {
                val currentDest = DestMap(currentRoute)

                if(currentDest != null){
                    AppHeader(
                        modifier,
                        headerText = currentDest.topBarHeaderText,
                        hideLocation = currentDest.hideLocation,
                        hideTopBarHeader = currentDest.hideTopBarHeader,
                        enterTransition = enterTransition,
                        exitTransition = exitTransition
                    )
                } else {
                    AppHeader(
                        modifier = modifier,
                        enterTransition = enterTransition,
                        exitTransition = exitTransition
                    )
                }
            },
            bottomBar = { AppBottomBar(
                navController = navController,
                selectedItem = selectedItem,
                updateSelectedItem = {
                    oldSelectedItem = selectedItem
                    selectedItem = it
                }
            ) }
        ) {
            padding ->
            SweetTeaNavHost(
                navController = navController,
                modifier = Modifier.padding(padding),
                enterTransition = enterTransition,
                exitTransition = exitTransition
            )
        }
    }

}


//navhost function of Navigation
@Composable
fun SweetTeaNavHost(
    navController: NavHostController,
    modifier: Modifier = Modifier,
    enterTransition: () -> EnterTransition,
    exitTransition: () -> ExitTransition
){
    NavHost(
        navController = navController,
        startDestination = BaseDestinations[0].route,
        enterTransition = {enterTransition()},
        exitTransition = {exitTransition()},
    ) {
        BaseDestinations.forEach {
            destination ->
            if(destination.subPages == null) {
                composable(route = destination.route ) {
                    destination.page(modifier, navController)
                }
            } else {
                navigation(
                    startDestination = destination.route,
                    route = destination.pageRoute,
                ){
                    composable(destination.route){
                        destination.page(modifier, navController)
                    }
                    destination.subPages.forEach{
                        subpage ->
                        composable(subpage.route){
                            subpage.page(modifier, navController)
                        }
                    }
                }
            }
        }
    }
}

fun NavHostController.navigateSingleTopTo(route:String) {
    val navController = this
    this.navigate(route){
        //Clear the navigation stack
        popUpTo(navController.graph.findStartDestination().id){
            saveState = true
        }
        //Only one copy of each destination is allowed
        launchSingleTop = true
        //Preserve the state between navigation
        restoreState = true
    }
}

@Composable
private fun AppBottomBar(navController: NavHostController,
                         modifier: Modifier=Modifier,
                         selectedItem: Int,
                         updateSelectedItem: (Int) -> Unit,
) {
    NavigationBar(modifier = modifier) {
        BaseDestinations.forEachIndexed{
            index, destination ->
            NavigationBarItem(
                icon = {
                    Icon(
                        imageVector = destination.icon,
                        contentDescription = null
                    )
                },
                label = {
                    Text(destination.label)
                },
                selected = index == selectedItem,
                onClick = {
                    if(selectedItem != index) {
                        navController.navigateSingleTopTo(destination.route)
                        updateSelectedItem(index)
                        destination.onClick!!()
                    }
                }
            ) }

        }
}

