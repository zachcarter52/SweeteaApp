package org.example.sweetea.pages

import android.app.Activity
import android.content.Intent
import android.os.Parcel
import android.os.Parcelable
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.ActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.Row
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
import androidx.compose.material3.Button
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
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
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.testTag
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
import org.example.sweetea.AuthViewModel
import org.example.sweetea.CardEntryActivity
import org.example.sweetea.Menu
import org.example.sweetea.OrderedProduct
import org.example.sweetea.viewmodel.AppViewModel
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.navigateSingleTopTo
import org.example.sweetea.ui.components.MenuDisplayImage
import org.example.sweetea.PrepPage
import org.example.sweetea.ProductOrder
import org.example.sweetea.ui.components.ModifiedProductItem

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
    authViewModel: AuthViewModel
){
    println("DBG: Local Context: " + LocalContext.current.toString())
    val intent = LocalContext.current
    val isLoggedIn by authViewModel.isUserLoggedIn.collectAsState()
    val lineItems = mutableListOf<LineItem>()

    val paymentLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.StartActivityForResult()
    ) { result: ActivityResult ->
        println("DBG: Started CheckoutPage() result(): ActivityResult")
        println("DBG: Result Code " + result.resultCode)
        println("DBG: Result Data " + result.data)
        if(result.resultCode == Activity.RESULT_OK){
            if(isLoggedIn) {
                val order = appViewModel.orderCart()
                println(order.encodeToString())
                appViewModel.saveOrder(order)
                appViewModel.getAppStatus()
            }
            navController.navigateSingleTopTo(PrepPage.route)
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

                CheckoutItem(
                    cartItem = cartItem,
                    index = idx,
                    appViewModel = appViewModel,
                    authViewModel = authViewModel,
                    isLoggedIn = isLoggedIn
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
            onClick = { navController.navigateSingleTopTo(Menu.route) },
            modifier = Modifier.padding(bottom = 20.dp)
                .size(height = 48.dp, width = 360.dp)
                .testTag("continue_shopping"),
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
                .size(height = 48.dp, width = 360.dp)
                .testTag("checkout")

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
    cartItem: ProductData,
    index : Int,
    appViewModel: AppViewModel,
    authViewModel: AuthViewModel,
    isLoggedIn: Boolean
){
    ModifiedProductItem(
        cartItem = cartItem,
        quantity = appViewModel.shoppingCartQuantities[index],
    ) {

        if(isLoggedIn) {
            var isFavorite by remember{
                mutableStateOf(appViewModel.getIsFavorite(appViewModel.shoppingCart[index]))
            }
            Button(
                modifier = Modifier.size(24.dp),
                onClick = {
                    if (isFavorite) {
                        appViewModel.removeFavorite(
                            authViewModel.emailAddress.value,
                            appViewModel.shoppingCart[index])
                    } else {
                        appViewModel.addFavorite(
                            authViewModel.emailAddress.value,
                            appViewModel.shoppingCart[index]
                        )
                    }
                    isFavorite = !isFavorite
                },
                contentPadding = PaddingValues(2.dp)
            ) {
                Icon(
                    imageVector = if (isFavorite) Icons.Filled.Favorite else Icons.Filled.FavoriteBorder,
                    contentDescription = "Favorite",
                    modifier = Modifier.size(18.dp)
                )
            }
            Spacer(modifier = Modifier.width(8.dp))
        }
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
    }
}
