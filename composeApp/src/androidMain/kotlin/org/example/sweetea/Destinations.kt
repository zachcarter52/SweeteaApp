package org.example.sweetea

import android.view.View
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.sp
import androidx.constraintlayout.motion.widget.DesignTool
import androidx.lifecycle.ViewModel
import androidx.navigation.NavController
import aws.smithy.kotlin.runtime.util.type
import org.example.sweetea.pages.AccountPage
import org.example.sweetea.pages.HomePage
import org.example.sweetea.pages.LoginPage
import org.example.sweetea.pages.MenuPage
import org.example.sweetea.pages.RewardsPage
import org.example.sweetea.pages.SignupPage
import org.example.sweetea.pages.SubMenuPage
import org.example.sweetea.ui.components.AppViewModel

open class BasicDestination (
    val route: String,
    val page: @Composable (
        modifier: Modifier,
        navController: NavController,
        updateCategory: (Int) -> Unit
        ) -> Unit,
    val subPages: List<BasicDestination>? = null,
    val topBarHeaderText: @Composable (() -> Unit)? = null,
    val hideLocation: Boolean = false,
    val hideTopBarHeader: Boolean = false,
    var index: Int = -1,
)

open class Destination (
    val icon: ImageVector,
    val label: String,
    route: String,
    val pageRoute: String,
    page: @Composable (
        modifier: Modifier,
        navController: NavController,
        updateCategory: (Int) -> Unit
    ) -> Unit,
    val onClick: (() -> Unit)? = {},
    subPages: List<BasicDestination>? = null,
    topBarHeaderText: @Composable (() -> Unit)? = null,
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
    page = {modifier, navController, _ -> HomePage(modifier, navController) },
)

object Menu : Destination(
    icon = Icons.Default.Menu,
    label = "Menu",
    route = "menu",
    pageRoute = "menupage",
    page = {modifier, navController, updateCategory -> MenuPage(modifier, navController, updateCategory) },
    subPages = listOf(
        SubMenu
    ),
    topBarHeaderText = {
        Text("Featured Menu Items", fontSize = 28.sp, fontWeight = FontWeight.Bold)
    }
)

object SubMenu : BasicDestination(
    route = "subMenu",
    page = { modifier, navController, _ -> SubMenuPage(modifier, navController) },
    topBarHeaderText = {
        Text("Menu Items", fontSize = 28.sp, fontWeight = FontWeight.Bold)
    }
)

object Rewards : Destination(
    icon = Icons.Default.Star,
    label = "Rewards",
    route = "rewards",
    pageRoute = "rewardspage",
    page = {modifier, navController, _ -> RewardsPage(modifier, navController) },
    hideLocation = true,
    topBarHeaderText = {
        Text("Rewards Program", fontSize = 34.sp, fontWeight = FontWeight.Bold)
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