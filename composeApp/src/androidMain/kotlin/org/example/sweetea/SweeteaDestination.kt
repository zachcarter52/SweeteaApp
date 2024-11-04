package org.example.sweetea

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.ui.graphics.vector.ImageVector

interface SweeteaDestination {
    val icon: ImageVector
    val route: String
}

//objects of different pages
object Account : SweeteaDestination {
    override val icon = Icons.Filled.AccountCircle
    override val route = "account"
}

//add more destinations under here