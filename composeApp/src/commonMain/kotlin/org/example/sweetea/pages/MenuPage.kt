package org.example.sweetea.pages

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Close
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.util.fastForEachIndexed
import androidx.compose.ui.util.fastMapNotNull
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.navigation.NavHostController
import com.github.androidpasswordstore.sublimefuzzy.Fuzzy
import org.example.sweetea.ProductCustomPage

import org.example.sweetea.SubMenu
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.ui.components.BearPageTemplate
import org.example.sweetea.ui.components.MenuDisplayImage
import org.example.sweetea.ui.components.MenuItem
import org.example.sweetea.ui.theme.backgroundDark
import org.jetbrains.compose.resources.DrawableResource
import org.jetbrains.compose.resources.painterResource
import sweetea.composeapp.generated.resources.Res
import sweetea.composeapp.generated.resources.flaming_tiger_pearl_milk
import sweetea.composeapp.generated.resources.oreo_smoothie
import sweetea.composeapp.generated.resources.taro_milk_tea
import sweetea.composeapp.generated.resources.thai_milk_tea

@Composable
fun FeaturedItem(
    image: @Composable () -> Unit,
    itemName: String,
    imageHeight: Int,
    onClick: () -> Unit = {},
){
    val paddingRatio = 0.05f
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

open class LabeledImage(
    val imageImageResource: DrawableResource,
    val itemName: String,
)

val featuredItems = listOf(
    LabeledImage(
        imageImageResource = Res.drawable.flaming_tiger_pearl_milk,
        itemName= "Flaming Tiger Pearl Milk Tea"
    ),
    LabeledImage(
        imageImageResource = Res.drawable.thai_milk_tea,
        itemName = "Thai Milk Tea"
    ),
    LabeledImage(
        imageImageResource = Res.drawable.taro_milk_tea,
        itemName= "Taro Milk Tea"
    ),
    LabeledImage(
        imageImageResource = Res.drawable.oreo_smoothie,
        itemName = "Oreo Smoothie"
    )
)

@Composable
fun MenuPage(
    modifier: Modifier = Modifier,
    navHostController: NavHostController,
    appViewModel: AppViewModel,
){
    LaunchedEffect(Unit){
        appViewModel.updateInfo()
    }

    val itemHeight = 120

    val imageCache = remember { mutableStateMapOf<DrawableResource, Painter>() }
    var searchTerms by remember { mutableStateOf("") }

    val menuCategoryState by appViewModel.categoryList.collectAsStateWithLifecycle()
    val menuProductState by appViewModel.productList.collectAsStateWithLifecycle()
    println("Menu Categories $menuCategoryState")

    fun getSearchProducts(): List<ProductData> = menuProductState.fastMapNotNull{ product:ProductData ->
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

    @Composable
    fun cachedImage(drawableResource: DrawableResource): Painter{
        var returnImage = imageCache[drawableResource]
        if(returnImage == null){
            returnImage = painterResource(drawableResource)
            imageCache[drawableResource] = returnImage
        }
        return returnImage
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
        Row(
            modifier = Modifier.horizontalScroll(rememberScrollState()),
        ){
            featuredItems.forEach{
                FeaturedItem(
                    image = {
                        Image(
                            painter = cachedImage(it.imageImageResource),
                            contentDescription = it.itemName,
                            contentScale = ContentScale.FillHeight
                        )},
                    itemName = it.itemName,
                    imageHeight = itemHeight
                )
            }
        }
        HorizontalDivider()
        Column(Modifier.fillMaxWidth()) {
            if(searchTerms.isEmpty()) {
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
                            navHostController.navigate(SubMenu.route)
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
                            navHostController.navigate(ProductCustomPage.route)
                        }
                    )
                    if (index != searchedProducts.size - 1) HorizontalDivider()
                }
            }
        }
    }
}
