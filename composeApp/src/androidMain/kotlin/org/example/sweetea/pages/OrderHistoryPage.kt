package org.example.sweetea.pages

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import org.example.sweetea.model.Order
import org.example.sweetea.viewmodel.OrderHistoryViewModel

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