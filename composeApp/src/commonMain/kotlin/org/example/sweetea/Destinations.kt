package org.example.sweetea

import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.pages.AccountPage
import org.example.sweetea.pages.HomePage
import org.example.sweetea.pages.LoginPage
import org.example.sweetea.pages.MenuPage
import org.example.sweetea.pages.ProductPage
import org.example.sweetea.pages.RewardsPage
import org.example.sweetea.pages.SignupPage
import org.example.sweetea.pages.SubMenuPage

/*
Describes a basic destination within the NavController,
allowing for configuration of the visible navigation elements
 */
private val headerTextPadding = Modifier.padding(4.dp, 0.dp, 0.dp, 0.dp)
open class BasicDestination (
    val route: String,
    val page: @Composable (
        modifier: Modifier,
        navHostController: NavHostController,
        appViewModel: AppViewModel
        ) -> Unit,
    val subPages: List<BasicDestination>? = null,
    val topBarHeaderText: @Composable ((viewModel: AppViewModel) -> Unit)? = null,
    val hideLocation: Boolean = false,
    val hideTopBarHeader: Boolean = false,
    var index: Int = -1,
)

/*
Describes a top-level Destination within the NavController,
with the addition of sub-pages and a navigation icon for the bottom navigation
 */
open class Destination (
    val icon: ImageVector,
    val label: String,
    route: String,
    val pageRoute: String,
    page: @Composable (
        modifier: Modifier,
        navHostController: NavHostController,
        appViewModel: AppViewModel
    ) -> Unit,
    val onClick: (() -> Unit)? = {},
    subPages: List<BasicDestination>? = null,
    topBarHeaderText: @Composable ((viewModel: AppViewModel) -> Unit)? = null,
    hideLocation: Boolean = false,
    hideTopBarHeader: Boolean = false
) : BasicDestination(
    route, page, subPages, topBarHeaderText, hideLocation, hideTopBarHeader
)

//objects of different pages
object Home : Destination(
    icon = Icons.Default.Home,
    label = "Home",
    route = "home",
    pageRoute = "homepage",
    page = {modifier, navController, appViewModel -> HomePage(modifier, navController, appViewModel) },
)

object Menu : Destination(
    icon = Icons.Default.Menu,
    label = "Menu",
    route = "menu",
    pageRoute = "menupage",
    page = {modifier, navController, appViewModel -> MenuPage(modifier, navController, appViewModel) },
    subPages = listOf(
        SubMenu,
        ProductCustomPage
    ),
    topBarHeaderText = {
        Text(
            "Featured Menu Items",
            modifier = headerTextPadding,
            style = MaterialTheme.typography.headlineMedium
        )
    }
)

object ProductCustomPage : BasicDestination(
    route = "productPage",
    page = { modifier, navController, appViewModel -> ProductPage(modifier, navController, appViewModel) },
    topBarHeaderText = {
        viewModel ->
        Text(
            text = viewModel.currentProduct!!.name,
            modifier = headerTextPadding,
            style = MaterialTheme.typography.headlineMedium
        )
    }
)

object SubMenu : BasicDestination(
    route = "subMenu",
    page = { modifier, navController, appViewModel -> SubMenuPage(modifier, navController, appViewModel) },
    topBarHeaderText = {
        viewModel ->
        Text(
            viewModel.currentCategory!!.name,
            modifier = headerTextPadding,
            style = MaterialTheme.typography.headlineMedium
        )
    }
)

object Rewards : Destination(
    icon = Icons.Default.Star,
    label = "Rewards",
    route = "rewards",
    pageRoute = "rewardspage",
    page = {modifier, navController, appViewModel -> RewardsPage(modifier, navController, appViewModel) },
    hideLocation = true,
    topBarHeaderText = {
        Text(
            "Rewards Program",
            modifier = headerTextPadding,
            style = MaterialTheme.typography.headlineMedium
            )
    }
)

object Account : Destination(
    icon = Icons.Default.AccountCircle,
    label = "Account",
    route = "account",
    pageRoute = "accountpage",
    page = { modifier, navController, _ -> AccountPage(modifier, navController) },
    subPages = listOf(
        Login,
        SignUp
    ),
    hideLocation = true,
)

object Login : BasicDestination(
    route = "login",
    page = { modifier, navController, _ -> LoginPage(modifier, navController) },
    hideTopBarHeader = true,
)

object SignUp : BasicDestination(
    route = "signup",
    page = { modifier, navController, _ -> SignupPage(modifier, navController) },
    hideTopBarHeader = true,
)

val BaseDestinations = listOf(
    Home,
    Menu,
    Rewards,
    Account
)

/*
Maps the list of All Destinations to the their route in a dictionary
e.g: [Account] => {"account": Account}
 */
val destinationMap = mutableMapOf<String, Destination>()
val basicDestinationMap = mutableMapOf<String, BasicDestination>()
private var destinationsUpToDate = false
fun updateMaps(){
    BaseDestinations.forEachIndexed {
            index, destination ->
        destinationMap[destination.route] = destination
        basicDestinationMap[destination.route] = destination
        destination.index = index
        if(destination.subPages != null){
            destination.subPages.forEach {
                subDestination ->
                basicDestinationMap[subDestination.route] = subDestination
                subDestination.index = index
            }
        }
    }
}
fun destMap(route: String): BasicDestination?{
    if(!destinationsUpToDate) {
        updateMaps()
    }
    return basicDestinationMap[route]
}
fun basicDestMap(route: String): Destination?{
    if(!destinationsUpToDate){
        updateMaps()
    }
    return destinationMap[route]
}