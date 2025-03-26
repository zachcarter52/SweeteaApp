package org.example.sweetea.pages

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import org.example.sweetea.Menu
import org.example.sweetea.ProductCustomPage
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.ui.components.MenuDisplayImage

@Composable
fun CheckoutPage(
    modifier: Modifier = Modifier,
    navController: NavController,
    appViewModel: AppViewModel,
){
    Column(
        modifier = modifier.fillMaxWidth()
            .verticalScroll(rememberScrollState()),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "Order",
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold,

            )
        val itemSubtotal = MutableList(appViewModel.shoppingCart.size){ 0.0f }

        val itemHeight = 120

        println("DBG: Cart item count = " + appViewModel.shoppingCart.size)
        appViewModel.shoppingCart.forEachIndexed { idx, cartItem ->
            itemSubtotal[idx] += cartItem.price.high_with_modifiers
            val url = "${cartItem.images.data[0].url}?height=${3*itemHeight}"
            CheckoutItem(
                imageHeight = itemHeight,
                url = url,
                contentDescription = cartItem.name,
                contentScale = ContentScale.FillHeight,
                itemName = cartItem.name,
                price = cartItem.price.high_with_modifiers,
                index = idx,
                appViewModel = appViewModel
                )
        }
        Text(
            text = "Subtotal",
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold,
        )
        Text(
            text = "$%.2f".format(itemSubtotal.sum())
        )

        Button(
            onClick = { navController.navigate(Menu.route) },
            modifier = Modifier.padding(bottom = 20.dp)
                .size(height = 48.dp, width = 360.dp)
        ) { Text(
            text ="Continue Shopping",
            fontSize = 24.sp,)
        }

        Button(
            onClick = { navController.navigate(Menu.route) },
            modifier = Modifier
                .size(height = 48.dp, width = 360.dp),

        ) { Text(
            text ="Checkout",
            fontSize = 24.sp,)
        }
    }
}

@Composable
fun CheckoutItem(
    imageHeight: Int,
    url: String,
    contentDescription: String,
    contentScale: ContentScale,
    itemName: String,
    price: Float? = null,
    index : Int,
    appViewModel: AppViewModel
){
    val isHeader = price == null
    val textPadding = if(isHeader) {
        48.dp
    } else {
        24.dp
    }
    val itemTextSize = if(isHeader){
        24.sp
    } else {
        20.sp
    }
    HorizontalDivider()
    Row(
        modifier = Modifier.fillMaxWidth()
    ) {
        Row(
            modifier = Modifier.padding(10.dp),
                //.height(imageHeight.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            MenuDisplayImage(
                imageHeight = imageHeight,
                url = url,
                contentDescription = contentDescription,
                contentScale = contentScale,
            )
            Column(
                modifier = Modifier.padding(textPadding, 0.dp)
            ) {
                Text(
                    text = itemName,
                    fontSize = itemTextSize,
                )
                if(!isHeader){
                    appViewModel.shoppingCart.get(index).modifiers.data.forEach { modifier ->
                        modifier.choices.forEach { choice ->
                            if(choice.price > 0) {
                                Text(
                                    text = choice.name + " + " + "$%.2f".format(choice.price),
                                    fontSize = 16.sp
                                )
                            } else {
                                Text(
                                    text = choice.name,
                                    fontSize = 16.sp
                                )
                            }
                        }
                    }
                    Text(
                        text = "$%.2f".format(price),
                        color = MaterialTheme.colorScheme.primary
                    )
                }
            }
        }
    }
    HorizontalDivider()
}