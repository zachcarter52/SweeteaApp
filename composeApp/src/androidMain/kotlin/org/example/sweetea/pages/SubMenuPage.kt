package org.example.sweetea.pages

import androidx.compose.material3.HorizontalDivider
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavController
import coil.compose.AsyncImage
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.ui.components.BearPageTemplate
import org.example.sweetea.ui.components.MenuItem

@Composable
fun SubMenuPage(
    modifier: Modifier = Modifier,
    navController: NavController,
    appViewModel: AppViewModel
){
    val itemHeight = 120

    val currentCategory = appViewModel.currentCategory
    val productMap = appViewModel.productMap
    val currentCategoryProducts = productMap[currentCategory?.site_category_id]
    BearPageTemplate(
        modifier = modifier,
        showBear = false,
    ){
        HorizontalDivider()
        currentCategoryProducts?.forEachIndexed { index, product ->
            MenuItem(
                image = {
                    AsyncImage(
                        model = product.images.data[0].url,
                        contentDescription = product.name,
                        contentScale = ContentScale.FillHeight
                    )
                },
                itemName = product.name,
                imageHeight = itemHeight,
                price = product.price.regular_high_with_modifiers
            )
            if (index != currentCategoryProducts.size -1) HorizontalDivider()
        }
    }

}