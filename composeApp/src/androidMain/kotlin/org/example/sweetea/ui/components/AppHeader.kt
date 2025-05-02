package org.example.sweetea.ui.components

import android.util.Log
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.EnterTransition
import androidx.compose.animation.ExitTransition
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.LinkAnnotation
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.TextLinkStyles
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.withLink
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import org.example.sweetea.Account
import org.example.sweetea.AuthViewModel
import org.example.sweetea.BaseDestinations
import org.example.sweetea.FavoritesPage
import org.example.sweetea.HeaderText
import org.example.sweetea.Menu
import org.example.sweetea.StoreSelection
import org.example.sweetea.Orders
import org.example.sweetea.ProductCustomPage
import org.example.sweetea.SubMenu
import org.example.sweetea.viewmodel.AppViewModel
import org.example.sweetea.navigateSingleTopTo
import org.example.sweetea.pages.StoreSelectionPage

@Composable
fun AppHeader(
    modifier: Modifier = Modifier,
    navController: NavHostController,
    viewModel: AppViewModel,
    authViewModel: AuthViewModel,
    headerText: @Composable ((viewModel: AppViewModel) -> Unit)? = null,
    hideLocation: Boolean = false,
    hideTopBarHeader: Boolean? = false,
    enterTransition: () -> EnterTransition,
    exitTransition: () -> ExitTransition,
    content: @Composable (() -> Unit)? = null,
) {
    val visible = hideTopBarHeader != null && !hideTopBarHeader
    val isLoggedIn by authViewModel.isUserLoggedIn.collectAsState()
    val username by authViewModel.username.collectAsState()

    Log.e("HeaderDebug", "Recomposing. isLoggedIn: $isLoggedIn, username: $username")

    Column(modifier = modifier.fillMaxWidth(1f)) {
        Row(
            modifier = Modifier.height(40.dp)
                .align(Alignment.End).padding(top = 16.dp, end = 16.dp),
            verticalAlignment = Alignment.Bottom
        ) {
            AnimatedVisibility(
                visible = !hideLocation && visible,
                enter = enterTransition(),
                exit = exitTransition(),
            ) {

                Text(
                    text = buildAnnotatedString {
                        val selectedStore = viewModel.retrieveSelectedStore()
                        if (selectedStore != null) {
                            append("Location: ")
                            withLink( LinkAnnotation.Url (
                                url = StoreSelection.route,
                                styles = TextLinkStyles(
                                    style = SpanStyle(color = MaterialTheme.colorScheme.primary),
                                    hoveredStyle = SpanStyle(color = MaterialTheme.colorScheme.inversePrimary)),
                                linkInteractionListener = {
                                    navController.navigateSingleTopTo(StoreSelection.route)
                                }

                            )) {
                                append(selectedStore.name)
                            }

                        }
                    },
                    fontSize = 10.sp,
                    lineHeight = 14.sp,
                    modifier = Modifier.fillMaxWidth(0.6f).padding(80.dp, 4.dp, 20.dp, 0.dp) // No padding on top-left, but padding on top-right (end)


                )
            }
        }

        Row(
            modifier = Modifier.height(38.dp),
            verticalAlignment = Alignment.Bottom
        ){
            AnimatedVisibility(
                visible = visible,
                enter = enterTransition(),
                exit = exitTransition(),
            ) {
                if(headerText != null){
                    headerText(viewModel)
                } else {
                    HeaderText(if (isLoggedIn) "Welcome, $username" else "Welcome")
                }
            }
        }
        if(navController.currentDestination?.parent?.startDestinationRoute != BaseDestinations[0].route) {
            Row() {
                navController.currentBackStackEntry?.destination?.route?.let {
                    if(BaseDestinations.map { dest -> dest.route }.indexOf(it) == -1){
                        when(it){
                            FavoritesPage.route -> {
                                Text(
                                    modifier = Modifier.padding(4.dp, 0.dp, 0.dp, 0.dp),
                                    text = buildAnnotatedString {
                                        withLink(
                                            LinkAnnotation.Url(
                                                url=Menu.route,
                                                styles = TextLinkStyles(
                                                    style = SpanStyle(color = MaterialTheme.colorScheme.primary),
                                                    hoveredStyle = SpanStyle(color = MaterialTheme.colorScheme.inversePrimary)
                                                ),
                                                linkInteractionListener = {
                                                    navController.navigate(Menu.route)
                                                }
                                            )
                                        ) {
                                            append("Menu")
                                        }
                                        append(" > ")
                                        append("Favorites")
                                    }
                                )
                            }
                            SubMenu.route -> {
                                Text(
                                    modifier = Modifier.padding(4.dp, 0.dp, 0.dp, 0.dp),
                                    text = buildAnnotatedString {
                                        withLink(
                                            LinkAnnotation.Url(
                                                url=Menu.route,
                                                styles = TextLinkStyles(
                                                    style = SpanStyle(color = MaterialTheme.colorScheme.primary),
                                                    hoveredStyle = SpanStyle(color = MaterialTheme.colorScheme.inversePrimary)
                                                ),
                                                linkInteractionListener = {
                                                    navController.navigate(Menu.route)
                                                }
                                            )
                                        ) {
                                            append("Menu")
                                        }
                                        append(" > ")
                                        append(viewModel.currentCategory?.name)
                                    }
                                )
                            }
                            ProductCustomPage.route -> {
                                Text(
                                    modifier = Modifier.padding(4.dp, 0.dp, 0.dp, 0.dp),
                                    text = buildAnnotatedString {
                                        withLink(
                                            LinkAnnotation.Url(
                                                url=Menu.route,
                                                styles = TextLinkStyles(
                                                    style = SpanStyle(color = MaterialTheme.colorScheme.primary),
                                                    hoveredStyle = SpanStyle(color = MaterialTheme.colorScheme.inversePrimary)
                                                ),
                                                linkInteractionListener = {
                                                    navController.navigateSingleTopTo(Menu.route)
                                                }
                                            )
                                        ) {
                                            append(Menu.label)
                                        }
                                        append(" > ")
                                        if(viewModel.currentCategory != null) {
                                            withLink(
                                                LinkAnnotation.Url(
                                                    url = SubMenu.route,
                                                    styles = TextLinkStyles(
                                                        style = SpanStyle(color = MaterialTheme.colorScheme.primary),
                                                        hoveredStyle = SpanStyle(color = MaterialTheme.colorScheme.inversePrimary)
                                                    ),
                                                    linkInteractionListener = {
                                                        navController.navigate(SubMenu.route)
                                                    }
                                                )
                                            ) {
                                                append(viewModel.currentCategory?.name)
                                            }
                                        } else {
                                            withLink(
                                                LinkAnnotation.Url(
                                                    url = FavoritesPage.route,
                                                    styles = TextLinkStyles(
                                                        style = SpanStyle(color = MaterialTheme.colorScheme.primary),
                                                        hoveredStyle = SpanStyle(color = MaterialTheme.colorScheme.inversePrimary)
                                                    ),
                                                    linkInteractionListener = {
                                                        navController.navigate(FavoritesPage.route)
                                                    }
                                                )
                                            ) {
                                                append("Favorites")
                                            }

                                        }
                                        append(" > ")
                                        append(viewModel.currentProduct?.name)
                                    }
                                )
                            }
                            Orders.route ->{
                                Text(
                                    modifier = Modifier.padding(4.dp, 0.dp, 0.dp, 0.dp),
                                    text = buildAnnotatedString {
                                        withLink(
                                            LinkAnnotation.Url(
                                                url= Account.route,
                                                styles = TextLinkStyles(
                                                    style = SpanStyle(color = MaterialTheme.colorScheme.primary),
                                                    hoveredStyle = SpanStyle(color = MaterialTheme.colorScheme.inversePrimary)
                                                ),
                                                linkInteractionListener = {
                                                    navController.navigateSingleTopTo(Account.route)
                                                }
                                            )
                                        ) {
                                            append(Account.label)
                                        }
                                        append(" > ")
                                        append("My Orders")
                                    }
                                )
                            }
                            else -> {}
                        }
                    }
                }
            }
            Row() {
                if (content != null) content()
            }
        }
    }
}

private fun String.toTilecase(delimiter: String = " "): String {

    return split(delimiter).joinToString(delimiter) { word ->

        //convert each word to small case inside the lambda
        val smallCaseWord = word.lowercase()

        //finish off by capitalizing to title case
        smallCaseWord.replaceFirstChar(Char::titlecaseChar)
    }
}