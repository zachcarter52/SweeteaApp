package org.example.sweetea.pages

import androidx.compose.material3.HorizontalDivider
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavController
import org.example.sweetea.Menu
import org.example.sweetea.ProductCustomPage
import org.example.sweetea.SubMenu
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.navigateSingleTopTo
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
            if (index != currentCategoryProducts.size -1) HorizontalDivider()
        }
    }

}