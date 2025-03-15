package org.example.sweetea

import androidx.compose.animation.EnterTransition
import androidx.compose.animation.ExitTransition
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import kotlinx.coroutines.flow.single
import kotlinx.coroutines.flow.singleOrNull
import moe.tlaster.precompose.navigation.NavHost
import moe.tlaster.precompose.navigation.NavOptions
import moe.tlaster.precompose.navigation.Navigator
import moe.tlaster.precompose.navigation.PopUpTo
import org.example.sweetea.dataclasses.local.AppViewModel

//navhost function of Navigation
@Composable
fun SweetTeaNavHost(
    viewModel: AppViewModel,
    navigator: Navigator,
    modifier: Modifier = Modifier,
    enterTransition: () -> EnterTransition,
    exitTransition: () -> ExitTransition,
){
    NavHost(
        navigator = navigator,
        initialRoute = BaseDestinations[0].route,
        /*
        enterTransition = {enterTransition()},
        exitTransition = {exitTransition()},

         */
    ) {
        BaseDestinations.forEach {
                destination ->
            if(destination.subPages == null) {
                scene(route = destination.route ) {
                    destination.page(modifier, navigator, viewModel)
                }
            } else {
                group(
                    initialRoute = destination.route,
                    route = destination.pageRoute,
                ){
                    scene(destination.route){
                        destination.page(modifier, navigator, viewModel)
                    }
                    destination.subPages.forEach{
                            subpage ->
                        scene(subpage.route){
                            subpage.page(modifier, navigator, viewModel)
                        }
                    }
                }
            }
        }
    }
}
