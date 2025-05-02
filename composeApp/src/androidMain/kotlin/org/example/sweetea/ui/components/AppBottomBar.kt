package org.example.sweetea.ui.components

import androidx.compose.material3.Badge
import androidx.compose.material3.BadgedBox
import androidx.compose.material3.Icon
import androidx.compose.material3.LocalContentColor
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.navigation.NavHostController
import org.example.sweetea.BaseDestinations
import org.example.sweetea.Checkout
import org.example.sweetea.viewmodel.AppViewModel
import org.example.sweetea.navigateSingleTopTo

@Composable
fun AppBottomBar(
    navController: NavHostController,
    modifier: Modifier = Modifier,
    selectedItem: Int,
    viewModel: AppViewModel,
) {
    NavigationBar(modifier = modifier) {
        BaseDestinations.forEachIndexed { index, destination ->
            NavigationBarItem(
                icon = {
                    BadgedBox(
                        badge = {
                            if(destination == Checkout && viewModel.shoppingCartQuantities.size > 0) {
                                var sum = 0
                                viewModel.shoppingCartQuantities.forEach {
                                    sum += it
                                }
                                Badge(
                                    contentColor = LocalContentColor.current,
                                    containerColor = LocalContentColor.current.invert(),
                                ) {
                                    Text(text = sum.toString())
                                }
                            }
                        }
                    ) {
                        Icon(
                            imageVector = destination.icon,
                            contentDescription = null
                        )
                    }
                },
                label = {
                    Text(destination.label)
                },
                selected = index == selectedItem,
                onClick = {
                    navController.navigateSingleTopTo(destination.route)
                    destination.onClick!!()
                },
                modifier = Modifier.testTag(destination.toString())
            )
        }
    }
}

fun Color.invert(): Color {
    return Color(
        red = 1f- this.red,
        green = 1f - this.green,
        blue = 1f - this.blue,
        alpha = this.alpha
    )
}