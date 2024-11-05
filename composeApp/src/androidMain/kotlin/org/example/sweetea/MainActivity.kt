package org.example.sweetea


import android.os.Bundle
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
import androidx.compose.foundation.layout.offset
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
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.input.pointer.motionEventSpy
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.style.LineHeightStyle
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            //Displays current screen
            //App()- default *REMOVED*
            SweeteaApp()
        }
    }
}

@Composable
fun SweeteaApp( modifier: Modifier=Modifier){
    MaterialTheme{
        val navController = rememberNavController()
        Scaffold(
            bottomBar = { AppBottomBar(navController) }
        ) {
            padding -> SweetTeaNavHost(
                navController = navController,
                modifier = Modifier.padding(padding)
            )
        }
    }

}


//navhost function of Navigation
@Composable
fun SweetTeaNavHost(
    navController: NavHostController,
    modifier: Modifier = Modifier,
){
    NavHost(
        navController = navController,
        startDestination = Destinations[0].route,
        modifier = modifier
    ) {
        Destinations.forEach{
            destination -> composable(
                route = destination.route
            ) {
                destination.content(modifier)
            }
        }
    }
}

fun NavHostController.navigateSingleTopTo(route:String) =
    this.navigate(route){
        launchSingleTop = true
    }

@Composable
private fun AppBottomBar(navController: NavHostController, modifier: Modifier=Modifier){
    var selected by remember { mutableIntStateOf(0) }
    NavigationBar(modifier = modifier) {
        Destinations.forEachIndexed(){
            index, destination -> NavigationBarItem(
                icon = {
                    Icon(
                        imageVector = destination.icon,
                        contentDescription = null
                    )
                },
                label = {
                    CourierPrimeText(destination.label)
                },
                selected = selected == index,
                onClick = {
                    navController.navigateSingleTopTo(destination.route)
                    selected = index
                    destination.onClick!!()
                }
            )
        }
    }
}

