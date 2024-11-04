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
            padding -> HomeScreen(Modifier.padding(padding))
            SweetTeaNavHost(
                navController = navController,
                modifier = Modifier.padding(padding)
            )
        }
    }

}

@Preview
@Composable

fun HomeScreen(modifier: Modifier=Modifier) {
    var clicked by remember { mutableStateOf(false) }
    val logo = painterResource(id = R.drawable.sweetealogo_homepage)

    //Calculates top padding based on screen height.
    //Change the floating point value in calculatedPadding to change the image placement.
    val configuration = LocalConfiguration.current
    val screenHeight = configuration.screenHeightDp.dp
    val calculatedPadding = with(LocalDensity.current) { (screenHeight.toPx() * 0.1f).toDp() }
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

//navhost function of Navigation
@Composable
fun SweetTeaNavHost(
    navController: NavHostController,
    modifier: Modifier = Modifier
){
    NavHost(
        navController = navController,
        startDestination = Account.route,
        modifier = modifier
    ) {
        composable(route = Account.route){
            AccountPage(navController)
        }
    }
}

fun NavHostController.navigateSingleTopTo(route:String) =
    this.navigate(route){
        launchSingleTop = true
    }

@Composable
private fun AppBottomBar(navController: NavHostController, modifier: Modifier=Modifier){
    NavigationBar(modifier = modifier) {
        NavigationBarItem(
            icon = {
                Icon(
                    imageVector = Icons.Default.Home,
                    contentDescription = null
                )
            },
            label = {
                Text("Home")
            },
            selected = false,
            onClick = {}
        )
        NavigationBarItem(
            icon = {
                Icon(
                    imageVector = Icons.Default.Menu,
                    contentDescription = null
                )
            },
            label = {
                Text("Menu")
            },
            selected = false,
            onClick = {}
        )
        NavigationBarItem(
            icon = {
                Icon(
                    imageVector = Icons.Default.Star,
                    contentDescription = null
                )
            },
            label = {
                Text("Reward")
            },
            selected = false,
            onClick = {}
        )
        NavigationBarItem(
            icon = {
                Icon(
                    imageVector = Icons.Default.AccountCircle,
                    contentDescription = null
                )
            },
            label = {
                Text("Account")
            },
            selected = false,
            onClick = {
                navController.navigateSingleTopTo(Account.route)
            }
        )
    }
}

