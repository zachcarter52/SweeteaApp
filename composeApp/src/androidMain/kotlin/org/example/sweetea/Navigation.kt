package org.example.sweetea

import androidx.compose.animation.EnterTransition
import androidx.compose.animation.ExitTransition
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavController
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.navigation
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.viewmodel.NavigationViewModel

//navhost function of Navigation
@Composable
fun SweetTeaNavHost(
    viewModel: AppViewModel,
    navViewModel: NavigationViewModel? = null,
    navController: NavHostController,
    modifier: Modifier = Modifier,
    enterTransition: () -> EnterTransition,
    exitTransition: () -> ExitTransition,
){
    NavHost(
        navController = navController,
        startDestination = BaseDestinations[0].route,
        enterTransition = {enterTransition()},
        exitTransition = {exitTransition()},
    ) {
        BaseDestinations.forEach { destination ->
            if(destination.subPages == null) {
                composable(route = destination.route ) {
                    navViewModel?.navigateToHead(destination.route)
                    destination.page(modifier, navController, viewModel)
                }
            } else {
                navigation(
                    startDestination = destination.route,
                    route = destination.pageRoute,
                ){
                    composable(destination.route){
                        navViewModel?.navigateToHead(destination.route)
                        destination.page(modifier, navController, viewModel)
                    }
                    destination.subPages.forEach{
                            subpage ->
                        composable(subpage.route){
                            navViewModel?.navigateSubPage(destination.route)
                            subpage.page(modifier, navController, viewModel)
                        }
                    }
                }
            }
        }
    }
}

fun NavController.navigateSingleTopTo(
    route:String
){
    val navController = this
    if(navController.currentDestination?.route != route){
        navController.navigate(route) {
            //Clear the navigation stack
            popUpTo(navController.graph.findStartDestination().id) {
                saveState = true
            }
            //Only one copy of each destination is allowed
            launchSingleTop = true
            //Preserve the state between navigation
            restoreState = true
        }
    }
}
