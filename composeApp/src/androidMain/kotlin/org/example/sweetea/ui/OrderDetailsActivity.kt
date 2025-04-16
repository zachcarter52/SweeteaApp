package org.example.sweetea.ui

//import com.google.firebase.firestore.FirebaseFirestore
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.google.firebase.firestore.FirebaseFirestore
import org.example.sweetea.ui.theme.AppTheme

data class Order(
    val orderId: String = "",
    val customerName: String = "",
    val items: List<String> = emptyList(),
    val totalPrice: Double = 0.0,
    val status: String = ""
)

class OrderDetailsActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val orderId = intent.getStringExtra("ORDER_ID") ?: ""

        setContent {
            AppTheme {
                Surface(modifier = Modifier.fillMaxSize()) {
                    OrderDetailsScreen(orderId)
                }
            }
        }
    }
}

@Composable
fun OrderDetailsScreen(orderId: String, isTest: Boolean = false) {
    var order by remember { mutableStateOf<Order?>(null) }

    LaunchedEffect(orderId) {
        if (isTest) {
            // Mock data for testing
            order = Order(
                orderId = orderId,
                customerName = "Test User",
                items = listOf("Oreo Smoothie", "Taro Smoothie"),
                totalPrice = 15.99,
                status = "Delivered"
            )
        } else {
            // Fetch real data from Firestore
            FirebaseFirestore.getInstance().collection("orders").document(orderId).get()
                .addOnSuccessListener { document ->
                    if (document != null && document.exists()) {
                        order = Order(
                            orderId = document.id,
                            customerName = document.getString("customerName") ?: "Unknown",
                            items = (document.get("items") as? List<String>) ?: emptyList(),
                            totalPrice = document.getDouble("totalPrice") ?: 0.0,
                            status = document.getString("status") ?: "Pending"
                        )
                    }
                }
        }
    }

    if (order == null) {
        LoadingScreen()
    } else {
        OrderDetailsContent(order!!)
    }
}

@Composable
fun LoadingScreen() {
    Box(modifier = Modifier.fillMaxSize(), contentAlignment = androidx.compose.ui.Alignment.Center) {
        CircularProgressIndicator()
    }
}

@Composable
fun OrderDetailsContent(order: Order) {
    Column(modifier = Modifier.padding(16.dp)) {
        Text(text = "Order ID: ${order.orderId}", style = MaterialTheme.typography.titleLarge)
        Text(text = "Customer: ${order.customerName}", style = MaterialTheme.typography.bodyMedium)
        Text(text = "Status: ${order.status}", style = MaterialTheme.typography.bodyMedium)

        Spacer(modifier = Modifier.height(16.dp))

        Text(text = "Items:", style = MaterialTheme.typography.titleMedium)
        LazyColumn {
            items(order.items) { item ->
                Text(text = "- $item", style = MaterialTheme.typography.bodyMedium, modifier = Modifier.padding(4.dp))
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        Text(text = "Total Price: $${order.totalPrice}", style = MaterialTheme.typography.bodyLarge)
    }
}