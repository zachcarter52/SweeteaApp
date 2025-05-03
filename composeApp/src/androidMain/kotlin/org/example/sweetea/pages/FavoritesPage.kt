package org.example.sweetea.pages

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.KeyboardArrowDown
import androidx.compose.material.icons.filled.KeyboardArrowUp
import androidx.compose.material.icons.filled.ShoppingCart
import androidx.compose.material3.Button
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import org.example.sweetea.AuthViewModel
import org.example.sweetea.ProductCustomPage
import org.example.sweetea.viewmodel.AppViewModel
import org.example.sweetea.ui.components.BearPageTemplate
import org.example.sweetea.ui.components.ModifiedProductItem

@Composable
fun FavoritesPage(
    modifier: Modifier = Modifier,
    navController: NavController,
    appViewModel: AppViewModel,
    authViewModel: AuthViewModel
){
    BearPageTemplate(
        modifier = modifier,
        showBear = false
    ){
        val favoriteProducts by appViewModel.favoriteProducts.collectAsState()
        favoriteProducts.forEach{ product ->
           var quantity by remember { mutableIntStateOf(1) }
           ModifiedProductItem(
               cartItem = product,
               quantity = quantity,
               onClick = {
                   appViewModel.productIDMap[product.id]?.let {
                       appViewModel.setProduct(it, product)
                       navController.navigate(ProductCustomPage.route)
                   }
               },
           ) {
               Button(
                   modifier = Modifier.size(24.dp),
                   onClick = {
                       appViewModel.removeFavorite(authViewModel.emailAddress.value, product)
                       if(favoriteProducts.isEmpty() || (favoriteProducts.size == 1 && favoriteProducts.indexOf(product) == 0)){
                           navController.popBackStack()
                       }
                   },
                   contentPadding = PaddingValues(2.dp)
               ) {
                   Icon(
                       imageVector = Icons.Filled.Favorite,
                       contentDescription = "Favorite",
                       modifier = Modifier.size(18.dp)
                   )
               }
               Spacer(modifier = Modifier.width(8.dp))
               Button(
                   modifier = Modifier.size(24.dp),
                   onClick = {
                       if(quantity > 1) quantity--
                   },
                   contentPadding = PaddingValues(2.dp)
               ) {
                   Icon(
                       imageVector = Icons.Filled.KeyboardArrowDown,
                       contentDescription = "Decrease Quantity",

                       modifier = Modifier.size(18.dp)
                   )
               }
               Text(
                   modifier = Modifier.padding(4.dp, 0.dp),
                   text = quantity.toString()
               )
               Button(
                   modifier = Modifier.size(24.dp),
                   onClick = {
                       quantity++
                   },
                   contentPadding = PaddingValues(2.dp)
               ) {
                   Icon(
                       imageVector = Icons.Filled.KeyboardArrowUp,
                       contentDescription = "Increase Quantity",
                       modifier = Modifier.size(18.dp)
                   )
               }
               Spacer(modifier = Modifier.width(8.dp))
               Button(
                   modifier = Modifier.size(24.dp),
                   onClick = {
                       val indexInCart = appViewModel.shoppingCart.indexOf(product)
                       if(indexInCart == -1) {
                           appViewModel.shoppingCart.add(product)
                           appViewModel.shoppingCartQuantities.add(quantity)
                       } else {
                           appViewModel.shoppingCartQuantities[indexInCart] += quantity
                       }
                   },
                   contentPadding = PaddingValues(2.dp)
               ) {
                   Icon(
                       imageVector = Icons.Filled.ShoppingCart,
                       contentDescription = "Add to cart",
                       modifier = Modifier.size(18.dp)
                   )
               }

           }
       }
    }

}