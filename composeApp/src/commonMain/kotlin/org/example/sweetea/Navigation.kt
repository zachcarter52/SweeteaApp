package org.example.sweetea

import androidx.compose.animation.EnterTransition
import androidx.compose.animation.ExitTransition
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.scaleIn
import androidx.compose.animation.scaleOut
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import moe.tlaster.precompose.navigation.NavHost
import moe.tlaster.precompose.navigation.Navigator
import moe.tlaster.precompose.navigation.transition.NavTransition
import org.example.sweetea.dataclasses.local.AppViewModel

//navhost function of Navigation
@Composable
fun SweetTeaNavHost(
    viewModel: AppViewModel,
    navigator: Navigator,
    modifier: Modifier = Modifier,
    navTransition: NavTransition,
){
    NavHost(
        navigator = navigator,
        initialRoute = BaseDestinations[0].route,
        navTransition = navTransition
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

fun SweeteaNavTransition(
    createTransition: () -> EnterTransition = {fadeIn() + scaleIn(initialScale = 0.9f)},
    destroyTransition: () -> ExitTransition = {fadeOut() + scaleOut(targetScale = 0.9f)},
    pauseTransition: ()  -> ExitTransition = {fadeOut() + scaleOut(targetScale = 1.1f)},
    resumeTransition: () -> EnterTransition = {fadeIn() + scaleIn(initialScale = 1.1f)},
    enterTargetContentZIndex: () -> Float = {0f},
    exitTargetContentZIndex: () -> Float = {0f},
) = object : NavTransition {
    override val createTransition: EnterTransition
        get() = createTransition()
    override val destroyTransition: ExitTransition
        get() = destroyTransition()
    override val pauseTransition: ExitTransition
        get() = pauseTransition()
    override val resumeTransition: EnterTransition
        get() = resumeTransition()
    override val enterTargetContentZIndex: Float
        get() = enterTargetContentZIndex()
    override val exitTargetContentZIndex: Float
        get() = exitTargetContentZIndex()
}
