package org.example.sweetea.pages

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Close
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.util.fastForEachIndexed
import androidx.compose.ui.util.fastMapNotNull
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.navigation.NavController
import com.github.androidpasswordstore.sublimefuzzy.Fuzzy
import org.example.sweetea.AuthViewModel
import org.example.sweetea.FavoritesPage
import org.example.sweetea.ProductCustomPage
import org.example.sweetea.SubMenu
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.ui.components.BearPageTemplate
import org.example.sweetea.ui.components.MenuDisplayImage
import org.example.sweetea.ui.components.MenuItem

@Composable
fun FeaturedItem(
    image: @Composable () -> Unit,
    itemName: String,
    imageHeight: Int,
    onClick: () -> Unit = {},
){
    val paddingRatio = 0.05f;
    val fontSize = imageHeight / 10
    Column(
        modifier = Modifier.clickable { onClick() }
            .height(imageHeight.dp * 11 / 8)
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier//.fillMaxWidth(0.2f)
                .width(imageHeight.dp * (1 + paddingRatio))
                .padding(imageHeight.dp * paddingRatio)
        ) {
            MenuDisplayImage(
                image = image,
                imageHeight = imageHeight
            )
            Text(
                text = itemName,
                modifier = Modifier.padding(
                    top = fontSize.dp * 0.5f,
                ),
                fontSize = fontSize.sp,
                lineHeight = fontSize.sp * 1.1f,
                )
        }
    }
}

@Composable
fun MenuPage(
    modifier: Modifier = Modifier,
    navController: NavController,
    appViewModel: AppViewModel,
    authViewModel: AuthViewModel
){
    val configuration = LocalConfiguration.current
    val isLoggedIn by authViewModel.isUserLoggedIn.collectAsState()
    val screenHeight = configuration.screenHeightDp
    println("ScreenHeight $screenHeight")

    val itemHeight = 120

    var searchTerms by remember { mutableStateOf("") }

    val menuCategoryState by appViewModel.categoryList.collectAsState()
    val menuProductState by appViewModel.productList.collectAsStateWithLifecycle()
    println("Menu Categories $menuCategoryState")

    fun getSearchProducts(): List<ProductData> = menuProductState.fastMapNotNull{ product: ProductData ->
        val matchResult = Fuzzy.fuzzyMatch(searchTerms, product.name)
        return@fastMapNotNull if(matchResult.first) {
            Pair(product, matchResult.second)
        } else {
            null
        }
    }.sortedByDescending { searchResult: Pair<ProductData, Int> ->
        searchResult.second
    }.map{ searchResult: Pair<ProductData, Int> ->
        searchResult.first
    }

    BearPageTemplate(
        modifier = modifier,
        showBear = false,
    ){
        Column(Modifier.fillMaxWidth()) {
            TextField(
                value = searchTerms,
                onValueChange = { searchTerms = it },
                label = { Text("Search") },
                singleLine = true,
                modifier = Modifier.fillMaxWidth(),
                colors = TextFieldDefaults.colors(
                    focusedContainerColor = MaterialTheme.colorScheme.background,
                    unfocusedContainerColor = MaterialTheme.colorScheme.background,
                ),
                trailingIcon = {
                    if(searchTerms.isNotEmpty()){
                        IconButton(onClick = {searchTerms = ""}){
                            Icon(
                                imageVector = Icons.Outlined.Close,
                                contentDescription = null
                            )
                        }
                    }
                },
                shape = RectangleShape
            )
        }
        /*
        Row(
            modifier = Modifier.horizontalScroll(rememberScrollState()),
        ){
            if(appViewModel.favoriteProducts.size > 0) {
                appViewModel.favoriteProducts.forEach { favoriteDrink ->
                    val url = "${favoriteDrink.images.data[0].url}?height=${3*itemHeight}"
                    FeaturedItem(
                        image = {
                            MenuDisplayImage(
                                imageHeight = itemHeight,
                                url = url,
                                contentDescription = favoriteDrink.name,
                                contentScale = ContentScale.FillHeight
                            )
                        },
                        itemName = favoriteDrink.name,
                        imageHeight = itemHeight,
                        onClick = {
                            appViewModel.productIDMap[favoriteDrink.id]?.let {
                                appViewModel.setProduct(it, favoriteDrink)
                            }
                            navController.navigate(ProductCustomPage.route)
                        }
                    )
                }

            }
        }
        */
        HorizontalDivider()
        Column(Modifier.fillMaxWidth()) {
            if(searchTerms.isEmpty()) {
                if(isLoggedIn && appViewModel.favoriteProducts.size > 0){
                    val url = "${appViewModel.favoriteProducts[0].images.data[0].url}?height=${3*itemHeight}"
                    MenuItem(
                        url = url,
                        contentDescription = "Favorites",
                        contentScale = ContentScale.FillHeight,
                        itemName = "Favorites",
                        imageHeight = itemHeight,
                        onClick = {
                            //appViewModel.currentCategory = menuCategory.site_category_id.toInt()
                            navController.navigate(FavoritesPage.route)
                        }
                    )
                    HorizontalDivider()
                }
                menuCategoryState.forEachIndexed { index, menuCategory ->
                    val url = "${menuCategory.images.data[0].url}?height=${3 * itemHeight}"
                    MenuItem(
                        url = url,
                        contentDescription = menuCategory.name,
                        contentScale = ContentScale.FillHeight,
                        itemName = menuCategory.name,
                        imageHeight = itemHeight,
                        onClick = {
                            //appViewModel.currentCategory = menuCategory.site_category_id.toInt()
                            appViewModel.setCategory(menuCategory)
                            navController.navigate(SubMenu.route)
                        }
                    )
                    if (index != menuCategoryState.size - 1) HorizontalDivider()
                }
            } else {
                val searchedProducts = getSearchProducts()
                searchedProducts.fastForEachIndexed{ index, product ->
                    val url = "${product.images.data[0].url}?height=${3*itemHeight}"
                    MenuItem(
                        url = url,
                        contentDescription = product.name,
                        contentScale = ContentScale.FillHeight,
                        itemName = product.name,
                        imageHeight = itemHeight,
                        price = product.price.regular_high_with_modifiers,
                        onClick = {
                            appViewModel.setProduct(product)
                            navController.navigate(ProductCustomPage.route)
                        }
                    )
                    if (index != searchedProducts.size - 1) HorizontalDivider()
                }
            }
        }
    }
}
