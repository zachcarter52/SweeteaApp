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
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.mutableIntStateOf
import androidx.lifecycle.viewmodel.compose.viewModel
import com.amplifyframework.AmplifyException
import com.amplifyframework.core.Amplify
import com.amplifyframework.core.AmplifyConfiguration
import com.amplifyframework.auth.cognito.AWSCognitoAuthPlugin



import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.navigation
import androidx.navigation.compose.rememberNavController


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            // Initialize view model
            val authViewModel: AuthViewModel = viewModel() //
            LaunchedEffect(Unit) {
                authViewModel.fetchUsername() //
            }
        }

        // Initialize Amplify / Cognito
        try {
            Amplify.addPlugin(AWSCognitoAuthPlugin())
            Amplify.configure(applicationContext)
            Log.i("MyAmplifyApp", "Initialized Amplify")

        } catch (error: AmplifyException) {
            Log.e("MyAmplifyApp", "Could not initialize Amplify", error)
        }

        setContent {
            SweeteaApp()
        }

    }
}

@Composable
fun SweeteaApp(modifier: Modifier=Modifier, viewModel: AuthViewModel = viewModel()){
    MaterialTheme{
        val navController = rememberNavController()
        Scaffold(
            bottomBar = { AppBottomBar(navController) }
        ) {
            padding ->
            SweetTeaNavHost(
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
    modifier: Modifier = Modifier
){
    NavHost(
        navController = navController,
        startDestination = BaseDestinations[0].route,
        modifier = modifier
    ) {
        BaseDestinations.forEach {
            destination ->
            if(destination.subPages == null) {
                composable(route = destination.route ) {
                    destination.page(modifier, navController)
                }
            } else {
                navigation( startDestination = destination.route,
                    route = destination.pageRoute){
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

fun NavHostController.navigateSingleTopTo(route:String) =
    this.navigate(route){
        launchSingleTop = true
    }

@Composable
private fun AppBottomBar(navController: NavHostController, modifier: Modifier=Modifier){
    var selectedItem by remember { mutableIntStateOf(0) }
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
                    navController.navigateSingleTopTo(destination.route)
                    selectedItem = index
                    destination.onClick!!()
                }
            ) }

        }
        /*

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
        )*/
}

