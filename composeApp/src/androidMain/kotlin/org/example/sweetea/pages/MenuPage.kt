package org.example.sweetea.pages

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController

import org.example.sweetea.R
import org.example.sweetea.SubMenu
import org.example.sweetea.dataclasses.local.AppViewModel
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

open class LabeledImage(
    val imageID: Int,
    val itemName: String,
)

val featuredItems = listOf(
    LabeledImage(
        imageID = R.drawable.flaming_tiger_pearl_milk,
        itemName= "Flaming Tiger Pearl Milk Tea"
    ),
    LabeledImage(
        imageID = R.drawable.thai_milk_tea,
        itemName = "Thai Milk Tea"
    ),
    LabeledImage(
        imageID = R.drawable.taro_milk_tea,
        itemName= "Taro Milk Tea"
    ),
    LabeledImage(
        imageID = R.drawable.oreo_smoothie,
        itemName = "Oreo Smoothie"
    )
)

@Composable
fun MenuPage(
    modifier: Modifier = Modifier,
    navController: NavController,
    appViewModel: AppViewModel,
){
    LaunchedEffect(Unit){
        appViewModel.updateInfo()
    }

    val configuration = LocalConfiguration.current
    val screenHeight = configuration.screenHeightDp
    println("ScreenHeight $screenHeight")

    val itemHeight = 120

    val imageCache = remember { mutableStateMapOf<Int, Painter>() }

    val menuCategoryState by appViewModel.categoryList.collectAsState()
    println("Menu Categories $menuCategoryState")

    @Composable
    fun cachedImage(id: Int): Painter{
        var returnImage = imageCache[id]
        if(returnImage == null){
            returnImage = painterResource(id = id)
            imageCache[id] = returnImage
        }
        return returnImage
    }

    BearPageTemplate(
        modifier = modifier,
        showBear = false,
    ){
        HorizontalDivider()
        Row(
            modifier = Modifier.horizontalScroll(rememberScrollState()),
        ){
            featuredItems.forEach{
                FeaturedItem(
                    image =
                    {Image(
                        painter = cachedImage(it.imageID),
                        contentDescription = it.itemName,
                        contentScale = ContentScale.FillHeight
                    )},
                    itemName = it.itemName,
                    imageHeight = itemHeight
                )
            }
        }
        HorizontalDivider()
        menuCategoryState.forEachIndexed{
                                        index, menuCategory ->
            val url = "${menuCategory.images.data[0].url}?height=${3*itemHeight}"
            MenuItem(
                url = url,
                contentDescription = menuCategory.name,
                contentScale = ContentScale.FillBounds,
                itemName = menuCategory.name,
                imageHeight = itemHeight,
                onClick = {
                    //appViewModel.currentCategory = menuCategory.site_category_id.toInt()
                    appViewModel.setCategory(menuCategory)
                    navController.navigate(SubMenu.route)
                }
            )
            if(index != menuCategoryState.size - 1) HorizontalDivider()
        }
    }
}
