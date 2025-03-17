package org.example.sweetea.ui.components

import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import org.example.sweetea.BaseDestinations
import org.example.sweetea.navigateSingleTopTo

@Composable
fun AppBottomBar(navHostController: NavHostController,
                 modifier: Modifier = Modifier,
                 selectedItem: Int,
) {
    NavigationBar(modifier = modifier) {
        BaseDestinations.forEachIndexed { index, destination ->
            NavigationBarItem(
                icon = {
                    Icon(
                        imageVector = destination.icon,
                        contentDescription = null
                    )
                },
                label = {
                    Text(destination.label)
                },
                selected = index == selectedItem,
                onClick = {
                    navHostController.navigateSingleTopTo(destination.route)
                    destination.onClick!!()
                }
            )
        }
    }
}
