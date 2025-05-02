package org.example.sweetea

import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.ShoppingCart
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavController
//import com.google.android.libraries.places.api.model.SubDestination
import org.example.sweetea.viewmodel.AppViewModel
import org.example.sweetea.pages.AccountPage
import org.example.sweetea.pages.CheckoutPage
import org.example.sweetea.pages.FavoritesPage
import org.example.sweetea.pages.ForgotPasswordPage
import org.example.sweetea.pages.HomePage
import org.example.sweetea.pages.LogOutPage
import org.example.sweetea.pages.LoginPage
import org.example.sweetea.pages.MenuPage
import org.example.sweetea.pages.OrderHistoryPage
import org.example.sweetea.pages.ProductPage
import org.example.sweetea.pages.RewardsPage
import org.example.sweetea.pages.SignupPage
import org.example.sweetea.pages.SubMenuPage
import org.example.sweetea.pages.VerificationPage
import org.example.sweetea.pages.OrderPrepPage

/*
Describes a basic destination within the NavController,
allowing for configuration of the visible navigation elements
 */
private val headerTextPadding = Modifier.padding(4.dp, 0.dp, 0.dp, 0.dp)
@Composable
fun HeaderText(
    text: String
){
    Text(
        text,
        modifier = headerTextPadding,
        style = MaterialTheme.typography.headlineMedium
    )
}
open class BasicDestination (
    val route: String,
    val page: @Composable (
        modifier: Modifier,
        navController: NavController,
        appViewModel: AppViewModel,
        authViewModel: AuthViewModel
        ) -> Unit,
    val subPages: List<BasicDestination>? = null,
    val topBarHeaderText: @Composable ((viewModel: AppViewModel) -> Unit)? = null,
    val hideLocation: Boolean = false,
    val hideTopBarHeader: Boolean = topBarHeaderText == null,
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
        appViewModel: AppViewModel,
        authViewModel: AuthViewModel
    ) -> Unit,
    val onClick: (() -> Unit)? = {},
    subPages: List<BasicDestination>? = null,
    topBarHeaderText: @Composable ((viewModel: AppViewModel) -> Unit)? = null,
    hideLocation: Boolean = false,
    hideTopBarHeader: Boolean = topBarHeaderText == null
) : BasicDestination(
    route, page, subPages, topBarHeaderText, hideLocation, hideTopBarHeader
)

//objects of different pages
object Home : Destination(
    icon = Icons.Default.Home,
    label = "Home",
    route = "home",
    pageRoute = "homepage",
    page = {modifier, navController, appViewModel, _ -> HomePage(modifier, navController, appViewModel, viewModel()) },
    hideTopBarHeader = false
)

object Menu : Destination(
    icon = Icons.Default.Menu,
    label = "Menu",
    route = "menu",
    pageRoute = "menupage",
    page = {modifier, navController, appViewModel, authViewModel -> MenuPage(modifier, navController, appViewModel, authViewModel) },
    subPages = listOf(
        FavoritesPage,
        SubMenu,
        ProductCustomPage,
        PrepPage,
    ),
    topBarHeaderText = {
        HeaderText("Featured Menu Items")
    }
)

object Checkout : Destination(
    icon = Icons.Default.ShoppingCart,
    label="Cart",
    route = "checkout",
    pageRoute = "checkoutPage",
    page = { modifier, navController, appViewModel, authViewModel -> CheckoutPage(modifier, navController, appViewModel, authViewModel)},
    topBarHeaderText = {HeaderText("Checkout Page")}
)

object PrepPage : BasicDestination(
    route = "prepPage",
    page = { modifier, navController, appViewModel, _ -> OrderPrepPage(modifier, navController, appViewModel )},
    topBarHeaderText = {Text("")}
)

object ProductCustomPage : BasicDestination(
    route = "productPage",
    page = { modifier, navController, appViewModel, authViewModel -> ProductPage(modifier, navController, appViewModel, authViewModel) },
    topBarHeaderText = { appViewModel ->
        HeaderText(appViewModel.currentProduct!!.name)
    }
)

object FavoritesPage : BasicDestination(
    route = "favorites",
    page = { modifier, navController, appViewModel, authViewModel -> FavoritesPage(modifier, navController, appViewModel, authViewModel)},
    topBarHeaderText = {
        HeaderText("Favorites")
    }
)

object SubMenu : BasicDestination(
    route = "subMenu",
    page = { modifier, navController, appViewModel, _ -> SubMenuPage(modifier, navController, appViewModel) },
    topBarHeaderText = { appViewModel ->
        HeaderText(appViewModel.currentCategory!!.name)
    }
)

object Rewards : Destination(
    icon = Icons.Default.Star,
    label = "Rewards",
    route = "rewards",
    pageRoute = "rewardspage",
    page = {modifier, navController, appViewModel, _ -> RewardsPage(modifier, navController, appViewModel) },
    hideLocation = true,
    topBarHeaderText = {
        HeaderText("Rewards Program")
    }
)

object Account : Destination(
    icon = Icons.Default.AccountCircle,
    label = "Account",
    route = "account",
    pageRoute = "accountpage",
    page = { modifier, navController, _, authViewModel -> AccountPage(modifier, navController, authViewModel) },
    subPages = listOf(
        Login,
        SignUp,
        ForgotPassword,
        Verification,
        LogOut,
        Orders
    ),
    hideTopBarHeader = false
)

object Login : BasicDestination(
    route = "login",
    page = { modifier, navController, _, _ -> LoginPage(modifier, navController, {}, viewModel()) },
)

object SignUp : BasicDestination(
    route = "signup",
    page = { modifier, navController, _, _ -> SignupPage(modifier, navController, {}, viewModel())  },
)

object ForgotPassword : BasicDestination(
    route = "forgotpassword/{email}",
    page = { modifier, navController, _, _ ->
        val email = navController.currentBackStackEntry?.arguments?.getString("email") ?: ""
           ForgotPasswordPage(modifier, navController)
    },
)

object Verification : BasicDestination(
    route = "verification/{email}",
    page = { modifier, navController, _, _ ->
        val email = navController.currentBackStackEntry?.arguments?.getString("email") ?: ""
        VerificationPage(modifier, navController, email) },
)

object LogOut : BasicDestination(
    route = "logout",
    page = {modifier, navController, _, _ -> LogOutPage(modifier, navController) },
)

object Orders: BasicDestination(
    route = "orders",
    page = {modifier, navController, appViewModel, authViewModel -> OrderHistoryPage(modifier, navController, appViewModel, authViewModel ) },
    topBarHeaderText = {
        HeaderText("My Orders")
    }
)

val BaseDestinations = listOf(
    Home,
    Menu,
    Rewards,
    Checkout,
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