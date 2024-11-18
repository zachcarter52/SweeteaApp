package org.example.sweetea

import androidx.compose.foundation.layout.BoxScope
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Star
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector

interface SweeteaDestination {
    val icon: ImageVector
    val label: String
    val route: String
    val content: @Composable (Modifier) -> Unit
    val onClick: (() -> Unit?)?
}

//objects of different pages
object Home : SweeteaDestination {
    override val icon = Icons.Default.Home
    override val label = "Home"
    override val route = "homepage"
    override val content = @Composable { modifier:Modifier -> HomePage(modifier)}
    override val onClick = {null}
}

object Menu : SweeteaDestination {
    override val icon = Icons.Default.Menu
    override val label = "Menu"
    override val route = "menupage"
    override val content = @Composable { modifier:Modifier -> MenuPage(modifier) }
    override val onClick = {null}
}

object Rewards : SweeteaDestination {
    override val icon = Icons.Default.Star
    override val label = "Rewards"
    override val route = "rewardspage"
    override val content = @Composable { modifier:Modifier -> RewardsPage(modifier) }
    override val onClick = {null}
}

object Account : SweeteaDestination {
    override val icon = Icons.Filled.AccountCircle
    override val label = "Account"
    override val route = "accountpage"
    override val content = @Composable { modifier:Modifier -> AccountPage(modifier) }
    override val onClick = {null}
}

val Destinations = listOf(
    Home,
    Menu,
    Rewards,
    Account,
 )

//add more destinations under here