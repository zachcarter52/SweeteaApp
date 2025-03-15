package org.example.sweetea.ui.components

import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import moe.tlaster.precompose.navigation.Navigator
import org.example.sweetea.BaseDestinations

@Composable
fun AppBottomBar(navigator: Navigator,
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
                    navigator.navigate(destination.route)
                    destination.onClick!!()
                }
            )
        }
    }
}
