package org.example.sweetea.pages

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.FavoriteBorder
import androidx.compose.material.icons.filled.KeyboardArrowDown
import androidx.compose.material.icons.filled.KeyboardArrowUp
import androidx.compose.material.icons.filled.ShoppingCart
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.LineBreak
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import kotlinx.coroutines.flow.forEach
import org.example.sweetea.AuthViewModel
import org.example.sweetea.ProductCustomPage
import org.example.sweetea.model.Order
import org.example.sweetea.ui.components.ModifiedProductItem
import org.example.sweetea.ui.components.defaultPriceText
import org.example.sweetea.viewmodel.AppViewModel
import org.example.sweetea.viewmodel.OrderHistoryViewModel

@Composable
fun OrderHistoryPage(
    modifier: Modifier = Modifier,
    navController: NavController,
    appViewModel: AppViewModel,
    authViewModel: AuthViewModel
){
    val isLoggedIn by authViewModel.isUserLoggedIn.collectAsState()
    val orders by appViewModel.orders.collectAsState()
    val favoriteProducts by appViewModel.favoriteProducts.collectAsState()
    Column(
        modifier = modifier
            .fillMaxWidth()
            .verticalScroll(rememberScrollState()),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        if(isLoggedIn){
            if(orders.isNotEmpty()){
            orders.reversed().forEach{ order ->
                Row(Modifier.padding(0.dp).fillMaxWidth(0.9f)) {
                    Text(
                        text = order.date.toString()
                    )
                }
                order.orderedProducts.forEach { product ->
                    val productData = appViewModel.toProductData(product.modifiedProduct)
                    var isFavorite by remember{
                        if(productData != null) {
                            mutableStateOf(appViewModel.getIsFavorite(productData))
                        } else {
                            mutableStateOf(false)
                        }
                    }
                    var quantity by remember { mutableIntStateOf(product.quantity) }
                    ModifiedProductItem(
                        cartItem = productData!!,
                        quantity = quantity,
                        priceText = { price: Float, quantity: Int ->
                            Text(
                                text = if(product.quantity == 1) "$%.2f".format(price) else
                                "${product.quantity}(${"$%.2f".format(price)}) = ${"$%.2f".format(price * product.quantity)}"
                            )
                            if(quantity != product.quantity) {
                                defaultPriceText(price, quantity)
                            } else {
                                Text(" ")
                            }
                        },
                        onClick = {
                            appViewModel.productIDMap[productData.id]?.let {
                                appViewModel.setProduct(it, productData)
                                navController.navigate(ProductCustomPage.route)
                            }
                        },
                    ){
                        Button(
                            modifier = Modifier.size(24.dp),
                            onClick = {
                                if (isFavorite) {
                                    appViewModel.removeFavorite(
                                        authViewModel.emailAddress.value,
                                        productData
                                    )
                                } else {
                                    appViewModel.addFavorite(
                                        authViewModel.emailAddress.value,
                                        productData
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
                                val indexInCart = appViewModel.shoppingCart.indexOf(productData)
                                if(indexInCart == -1) {
                                    appViewModel.shoppingCart.add(productData)
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
            } else {
                Text(
                    text = "You have to order something before an order can show up here",
                    modifier = Modifier.padding(0.dp, 80.dp),
                )
            }
        } else {
            Text(
                text = "Please login to track your orders",
                modifier = Modifier.padding(0.dp, 80.dp),
            )
        }
    }

}
/*@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun OrderHistoryScreen(viewModel: OrderHistoryViewModel = viewModel) {
    val orders by viewModel.orders.collectAsState()

    Scaffold(
        topBar = {
            TopAppBar(title = { Text("Order History") })
        }
    ) { innerPadding ->
        if (orders.isEmpty()) {
            Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                Text("No past orders")
            }
        } else {
            LazyColumn(modifier = Modifier.padding(16.dp)) {
                items(orders) { order ->
                    OrderCard(order)
                }
            }
        }

    }
}
 */



@Composable
fun OrderCard(order: Order) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 8.dp),
        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text("Restaurant: ${order.restaurantName}", style = MaterialTheme.typography.titleMedium)
            Text("Items: ${order.items.joinToString(", ")}")
            Text("Total: $${order.totalAmount}")
            Text("Date: ${order.orderDate}", style = MaterialTheme.typography.labelSmall)
        }
    }
}