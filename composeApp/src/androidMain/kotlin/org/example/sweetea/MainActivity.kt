package org.example.sweetea

import androidx.annotation.DrawableRes
import androidx.compose.foundation.layout.Column
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Star
import androidx.compose.runtime.getValue
import androidx.compose.ui.res.vectorResource
import androidx.navigation.compose.currentBackStackEntryAsState
import java.util.Vector
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.annotation.StringRes
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
import androidx.compose.material.BottomNavigation
import androidx.compose.material.BottomNavigationItem
import androidx.compose.material.Icon
import androidx.compose.ui.Alignment
import androidx.compose.ui.input.pointer.motionEventSpy
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.style.LineHeightStyle
import androidx.compose.ui.unit.dp
import androidx.navigation.compose.rememberNavController
import androidx.compose.material.Scaffold
import androidx.compose.material.Text
import androidx.compose.material.icons.filled.Menu
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.navigation.NavHostController
import androidx.navigation.compose.*
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.res.colorResource


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
    val navController = rememberNavController()

    val bottomNavigationItems = listOf(
        BottomNavigationScreens.HomePage,
        BottomNavigationScreens.MenuPage,
        BottomNavigationScreens.RewardPage,
        BottomNavigationScreens.AccountPage,
    )
    Scaffold(
        bottomBar = {
            AppBottomNavigation(navController , bottomNavigationItems)
        },
    ) { innerPadding ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues = innerPadding)
        ) {
            Image(
                painter = logo,
                contentDescription = "App Logo",
                contentScale = ContentScale.Fit,
                modifier = Modifier
                    .fillMaxWidth()
                    .wrapContentSize(Alignment.Center)
                    .padding(top = calculatedPadding)

            )
                MainScreenNavigationConfiguration(navController)
            }
        }


 /*   Scaffold(
        bottomBar = {
            AppBottomNavigation(navController , bottomNavigationItems)
        },
    )
    { innerPadding -> // padding calculated by scaffold
        // it doesn't have to be a column,
        // can be another component that accepts a modifier with padding
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues = innerPadding) // padding applied here
        ) {
            MainScreenNavigationConfiguration(navController)
        }
    }*/
}

@Composable
fun MainScreenNavigationConfiguration(navController: NavHostController) {
    NavHost(navController, startDestination = BottomNavigationScreens.HomePage.route) {
        composable(BottomNavigationScreens.HomePage.route) {
            NextPage()
        }
        composable(BottomNavigationScreens.MenuPage.route) {
            NextPage()
        }
        composable(BottomNavigationScreens.RewardPage.route) {
            NextPage()
        }
        composable(BottomNavigationScreens.AccountPage.route) {
            NextPage()
        }
    }
}

@Composable
fun NextPage() {
    println("In Progress")
}

@Composable
private fun AppBottomNavigation(
    navController: NavHostController,
    items: List<BottomNavigationScreens>
) {
    BottomNavigation(
        backgroundColor = Color.Gray,
        contentColor = Color.White
    ) {
        val currentRoute = currentRoute(navController)
        items.forEach { screen ->
            BottomNavigationItem(
                icon = { Icon(screen.icon, "Icon")},
                label = { Text(stringResource(id = screen.resourceId)) },
                selected = currentRoute == screen.route,
                onClick = {
                    // This if check gives us a "singleTop" behavior where we do not create a
                    // second instance of the composable if we are already on that destination
                    if (currentRoute != screen.route) {
                        navController.navigate(screen.route)
                    }
                }
            )
        }
    }
}

sealed class BottomNavigationScreens(val route: String, @StringRes val resourceId: Int,val icon: ImageVector) {
    object HomePage : BottomNavigationScreens("Home", R.string.homepage_route, Icons.Filled.Home)
    object MenuPage : BottomNavigationScreens("Menu", R.string.menupage_route, Icons.Filled.Menu)
    object RewardPage : BottomNavigationScreens("Rewards", R.string.rewardpage_route, Icons.Filled.Star)
    object AccountPage : BottomNavigationScreens("Account", R.string.accountpage_route,Icons.Filled.AccountCircle)
}
@Composable
private fun currentRoute(navController: NavHostController): String? {
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    return navBackStackEntry?.destination?.route
}
