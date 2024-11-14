package org.example.sweetea

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Star
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.navigation.NavController
import aws.smithy.kotlin.runtime.util.flattenIfPossible
import org.example.sweetea.pages.AccountPage
import org.example.sweetea.pages.HomePage
import org.example.sweetea.pages.LoginPage
import org.example.sweetea.pages.MenuPage
import org.example.sweetea.pages.RewardsPage
import org.example.sweetea.pages.SignupPage
open class TopBarState(
    val showLocation: Boolean = false,
    val showLogo: Boolean = false
)

open class BasicDestination(
    val route: String,
    val page: @Composable (modifier: Modifier, navController: NavController) -> Unit,
    val subPages: List<BasicDestination>? = null
)

open class Destination (
    val icon: ImageVector,
    val label: String,
    route: String,
    val pageRoute: String,
    page: @Composable (modifier: Modifier, navController: NavController) -> Unit,
    val onClick: (() -> Unit)? = {},
    subPages: List<BasicDestination>? = null
) : BasicDestination(
    route, page, subPages
)


//objects of different pages
object Home : Destination(
    icon = Icons.Default.Home,
    label = "Home",
    route = "home",
    pageRoute = "homepage",
    page = {modifier, navController -> HomePage(modifier, navController) },
)

object Menu : Destination(
    icon = Icons.Default.Menu,
    label = "Menu",
    route = "menumain",
    pageRoute = "menu",
    page = {modifier, navController -> MenuPage(modifier, navController) },
)

object Rewards : Destination(
    icon = Icons.Default.Star,
    label = "Rewards",
    route = "rewards",
    pageRoute = "rewardspage",
    page = {modifier, navController -> RewardsPage(modifier, navController) },
)

object Account : Destination(
    icon = Icons.Default.AccountCircle,
    label = "Account",
    route = "account",
    pageRoute = "accountpage",
    page = { modifier, navController -> AccountPage(modifier, navController) },
    subPages = listOf(
        Login,
        SignUp
    )
)

object Login : BasicDestination(
    route = "login",
    page = { modifier, navController -> LoginPage(modifier, navController) },
)

object SignUp : BasicDestination(
    route = "signup",
    page = { modifier, navController -> SignupPage(modifier, navController) },
)

val BaseDestinations = listOf(
    Home,
    Menu,
    Rewards,
    Account
)

/*val DestinationMap = mutableMapOf<String, BasicDestination>()
val Destinations = listOf(
    BaseDestinations,
    BaseDestinations.mapNotNull{
        destination -> destination.subPages
    }.flatten()
).flatten().forEach{
    destination -> DestinationMap[destination.route] = destination
}*/