package org.example.sweetea.pages

import android.app.Activity
import android.content.Intent
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.ActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.FavoriteBorder
import androidx.compose.material.icons.filled.KeyboardArrowDown
import androidx.compose.material.icons.filled.KeyboardArrowUp
import androidx.compose.material.icons.outlined.Favorite
import androidx.compose.material3.Button
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.LinkAnnotation
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.TextLinkStyles
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.withLink
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import com.google.gson.Gson
import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass
import kotlinx.serialization.ExperimentalSerializationApi
import org.example.sweetea.CardEntryActivity
import org.example.sweetea.Menu
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.navigateSingleTopTo
import org.example.sweetea.ui.components.MenuDisplayImage
import org.example.sweetea.PrepPage

@JsonClass(generateAdapter = true)
data class LineItem @OptIn(ExperimentalSerializationApi::class) constructor(
    val price: Float,
    val quantity: String = 1.toString(),
    @Json(name = "name")
    val productName: String,
    val productId: String,
    val siteProductId: String,
    val productModifiers: MutableList<CartItemChoiceDetails>,
    val basePriceMoney: CartItemPriceDetails
)

@JsonClass(generateAdapter = true)
data class CartItemChoiceDetails(
    val choiceName: String,
    val choiceId: String,
    val price: Float
)

@JsonClass(generateAdapter = true)
data class CartItemPriceDetails(
    val amount: Float,
    val currency: String = "USD"
)

@JsonClass(generateAdapter = true)
data class LineItem @OptIn(ExperimentalSerializationApi::class) constructor(
    val price: Float,
    val quantity: String = 1.toString(),
    @Json(name = "name")
    val productName: String,
    val productId: String,
    val siteProductId: String,
    val productModifiers: MutableList<CartItemChoiceDetails>,
    val basePriceMoney: CartItemPriceDetails
)

@JsonClass(generateAdapter = true)
data class CartItemChoiceDetails(
    val choiceName: String,
    val choiceId: String,
    val price: Float
)

@JsonClass(generateAdapter = true)
data class CartItemPriceDetails(
    val amount: Float,
    val currency: String = "USD"
)

@Composable
fun CheckoutPage(
    modifier: Modifier = Modifier,
    navController: NavController,
    appViewModel: AppViewModel,
){
    val intent = LocalContext.current
    val lineItems = mutableListOf<LineItem>()

    val paymentLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.StartActivityForResult()
    ) { result: ActivityResult ->
        println("DBG: Started CheckoutPage() result(): ActivityResult")
        println("DBG: Result Code " + result.resultCode)
        println("DBG: Result Data " + result.data)
        if(result.resultCode == Activity.RESULT_OK){
            navController.navigate(PrepPage.route)
            val data = result.data
            println("Data" + data)
        }
        println("DBG: Finished CheckoutPage() result(): ActivityResult")
    }

    HorizontalDivider()

    Column(
        modifier = modifier
            .fillMaxWidth()
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
        if(appViewModel.shoppingCart.size > 0) {
            appViewModel.shoppingCart.forEachIndexed { idx, cartItem ->
                lineItems.add(
                    LineItem(
                        price = cartItem.price.regular_high,
                        productName = cartItem.name,
                        productId = cartItem.id,
                        siteProductId = cartItem.site_product_id,
                        productModifiers = mutableListOf<CartItemChoiceDetails>().apply {
                            cartItem.modifiers.data.forEach { modifierData ->
                                modifierData.choices.forEach { choiceData ->
                                    add(
                                        CartItemChoiceDetails(
                                            choiceName = choiceData.name,
                                            choiceId = choiceData.id,
                                            price = choiceData.price
                                        )
                                    )
                                }
                            }
                        },
                        basePriceMoney = CartItemPriceDetails(
                            amount = cartItem.price.high_with_modifiers,
                            currency = "USD"
                        )
                    )
                )

                itemSubtotal[idx] += appViewModel.shoppingCartQuantities[idx] * cartItem.price.high_with_modifiers

                val url = "${cartItem.images.data[0].url}?height=${3 * itemHeight}"
                CheckoutItem(
                    imageHeight = itemHeight,
                    url = url,
                    cartItem = cartItem,
                    contentScale = ContentScale.FillHeight,
                    index = idx,
                    appViewModel = appViewModel,
                )
            }
        } else {
            Text(
                modifier = Modifier.padding(0.dp, 80.dp),
                text = buildAnnotatedString {
                    append("You don't have anything in your cart,\n add something from the ")
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
                        append("menu")
                    }
                    append(" first.")
                }
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
            onClick = {
                val localIntent: Intent = Intent(intent, CardEntryActivity::class.java)
                localIntent.putExtra("jsonLineItems", Gson().toJson(lineItems))
                println("INTENT DATA: " + localIntent)
                paymentLauncher.launch(localIntent)
            },
            modifier = Modifier
                .size(height = 48.dp, width = 360.dp),

            ){
            Text(
                text ="Checkout",
                fontSize = 24.sp
            )
        }
    }
}

@Composable
fun CheckoutItem(
    imageHeight: Int,
    url: String,
    cartItem: ProductData,
    contentScale: ContentScale,
    index : Int,
    appViewModel: AppViewModel,
){
    val textPadding = 24.dp
    val itemTextSize = 24.sp

    HorizontalDivider()
    Row(
        modifier = Modifier.fillMaxWidth(),
    ) {
        Row(
            modifier = Modifier.padding(10.dp),
            //.height(imageHeight.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            MenuDisplayImage(
                imageHeight = imageHeight,
                url = url,
                contentDescription = cartItem.name,
                contentScale = contentScale,
            )
            Column(
                modifier = Modifier.padding(textPadding, 0.dp)
            ) {
                Text(
                    text = cartItem.name,
                    fontSize = itemTextSize,
                )
                appViewModel.shoppingCart[index].modifiers.data.forEach { modifier ->
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
                Row(
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Box(
                        modifier = Modifier.fillMaxWidth(0.5f),
                    ) {
                        Text(
                            text = "$%.2f".format(cartItem.price.high_with_modifiers),
                            color = MaterialTheme.colorScheme.primary
                        )
                    }
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.End
                    ) {
                        var isFavorite = appViewModel.favoriteDrinks.indexOf(appViewModel.shoppingCart[index]) != -1
                        Button(
                            modifier = Modifier.size(24.dp),
                            onClick = {
                                if(isFavorite){
                                    appViewModel.favoriteDrinks.remove(appViewModel.shoppingCart[index])
                                } else {
                                    appViewModel.favoriteDrinks.add(appViewModel.shoppingCart[index])
                                }
                                isFavorite = !isFavorite
                            },
                            contentPadding = PaddingValues(2.dp)
                        ) {
                            Icon(
                                imageVector = if(isFavorite) Icons.Filled.Favorite else Icons.Filled.FavoriteBorder,
                                contentDescription = "Favorite",
                                modifier = Modifier.size(18.dp)
                            )
                        }
                        Spacer(modifier = Modifier.width(8.dp))
                        Button(
                            modifier = Modifier.size(24.dp),
                            onClick = {
                                appViewModel.shoppingCartQuantities[index]--
                                if(appViewModel.shoppingCartQuantities[index] == 0){
                                    appViewModel.shoppingCart.removeAt(index)
                                    appViewModel.shoppingCartQuantities.removeAt(index)
                                }
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
                            text = appViewModel.shoppingCartQuantities[index].toString()
                        )
                        Button(
                            modifier = Modifier.size(24.dp),
                            onClick = {
                                appViewModel.shoppingCartQuantities[index]++
                            },
                            contentPadding = PaddingValues(2.dp)
                        ) {
                            Icon(
                                imageVector = Icons.Filled.KeyboardArrowUp,
                                contentDescription = "Increase Quantity",

                                modifier = Modifier.size(18.dp)
                            )
                        }
                        /*
                        Button(
                            modifier = Modifier.size(24.dp),
                            onClick = {
                                appViewModel.shoppingCart.remove(cartItem)
                            },
                            contentPadding = PaddingValues(2.dp)
                        ) {
                            Icon(
                                imageVector = Icons.Filled.Delete,
                                contentDescription = "Remove from Cart",
                                modifier = Modifier.size(18.dp)
                            )
                        }
                         */
                    }

                }
            }
        }
    }
    HorizontalDivider()
}
