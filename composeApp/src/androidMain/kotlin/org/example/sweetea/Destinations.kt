package org.example.sweetea

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
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavController
import com.google.android.libraries.places.api.model.SubDestination
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.pages.AccountPage
import org.example.sweetea.pages.ForgotPasswordPage
import org.example.sweetea.pages.HomePage
import org.example.sweetea.pages.LoginPage
import org.example.sweetea.pages.MenuPage
import org.example.sweetea.pages.ProductPage
import org.example.sweetea.pages.RewardsPage
import org.example.sweetea.pages.SignupPage
import org.example.sweetea.pages.SubMenuPage
import org.example.sweetea.pages.VerificationPage

/*
Describes a basic destination within the NavController,
allowing for configuration of the visible navigation elements
 */
open class BasicDestination (
    val route: String,
    val page: @Composable (
        modifier: Modifier,
        navController: NavController,
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
        navController: NavController,
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
        Text("Featured Menu Items", fontSize = 28.sp, fontWeight = FontWeight.Bold)
    }
)

object ProductCustomPage : BasicDestination(
    route = "productPage",
    page = { modifier, navController, appViewModel -> ProductPage(modifier, navController, appViewModel) },
    topBarHeaderText = {null}
)

object SubMenu : BasicDestination(
    route = "subMenu",
    page = { modifier, navController, appViewModel -> SubMenuPage(modifier, navController, appViewModel) },
    topBarHeaderText = {
        viewModel ->
        Text(
            viewModel.currentCategory!!.name,
            fontSize = 28.sp,
            fontWeight = FontWeight.Bold
        )
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
        SignUp,
        ForgotPassword,
        Verification
    ),
    hideLocation = true,
)

object Login : BasicDestination(
    route = "login",
    page = { modifier, navController, _ -> LoginPage(modifier, navController, {}, viewModel()) },
    hideTopBarHeader = true,
)

object SignUp : BasicDestination(
    route = "signup",
    page = { modifier, navController, _ -> SignupPage(modifier, navController, {}, viewModel())  },
    hideTopBarHeader = true,
)

object ForgotPassword : BasicDestination(
    route = "forgotpassword/{email}",
    page = { modifier, navController, _ ->
        val email = navController.currentBackStackEntry?.arguments?.getString("email") ?: ""
           ForgotPasswordPage(modifier, navController)
    },
    hideTopBarHeader = true,
)

object Verification : BasicDestination(
    route = "verification/{email}",
    page = { modifier, navController, _ ->
        val email = navController.currentBackStackEntry?.arguments?.getString("email") ?: ""
        VerificationPage(modifier, navController, email) },
    hideTopBarHeader = true,
)

/*
object LogOut : BasicDestination(
    route = "logout",
    page = {modifier, navController -> LogOutPage(modifier, navController) },
    subPages = null
)
*/


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