package org.example.sweetea

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Star
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.navigation.NavController

open class Destination (
    val icon: ImageVector,
    val label: String,
    val route: String,
    val pageRoute: String,
    val page: @Composable (modifier: Modifier, navController: NavController) -> Unit,
    val onClick: (() -> Unit)?,
    val subPages: List<SubDestination>?
)

open class SubDestination(
    val route: String,
    val page: @Composable (modifier: Modifier, navController: NavController) -> Unit,
    val subPages: List<SubDestination>?
)

//objects of different pages
object Home : Destination(
    icon = Icons.Default.Home,
    label = "Home",
    route = "homemain",
    pageRoute = "homepage",
    page = {modifier, navController -> HomePage(modifier, navController)},
    onClick = { null },
    subPages = null
)

object Menu : Destination(
    icon = Icons.Default.Menu,
    label = "Menu",
    route = "menumain",
    pageRoute = "menupage",
    page = {modifier, navController -> MenuPage(modifier, navController)},
    onClick = { null },
    subPages = null
)

object Rewards : Destination(
    icon = Icons.Default.Star,
    label = "Rewards",
    route = "rewardsmain",
    pageRoute = "rewardspage",
    page = {modifier, navController -> RewardsPage(modifier, navController)},
    onClick = { null },
    subPages = null
)

object Account : Destination(
    icon = Icons.Default.AccountCircle,
    label = "Account",
    route = "accountmain",
    pageRoute = "accountpage",
    page = {modifier, navController -> AccountPage(modifier, navController)},
    onClick = { null },
    subPages = listOf(
        Login,
        SignUp,
        Verification,
        LogOut,
        ForgotPassword
    )
)

object Login : SubDestination(
    route = "login",
    page = {modifier, navController -> LoginPage(modifier, navController)},
    subPages = null
)

object SignUp : SubDestination(
    route = "signup",
    page = {modifier, navController -> SignupPage(modifier, navController) },
    subPages = null
)

object LogOut : SubDestination(
    route = "logout",
    page = {modifier, navController -> LogOutPage(modifier, navController) },
    subPages = null
)

object Verification : SubDestination(
    route = "verification/{email}",
    page = {modifier, navController ->
        val email = navController.currentBackStackEntry?.arguments?.getString("email") ?: ""
        VerificationPage(modifier, navController, email)
    },
    subPages = null
)

object ForgotPassword : SubDestination(
    route = "forgotpassword/{email}",
    page = {modifier, navController ->
        val email = navController.currentBackStackEntry?.arguments?.getString("email") ?: ""
        ForgotPasswordPage(modifier, navController)
    },
    subPages = null
)

val BaseDestinations = listOf(
    Home,
    Menu,
    Rewards,
    Account
)
//add more destinations under here