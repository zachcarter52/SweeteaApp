package org.example.sweetea.viewmodel

import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import org.example.sweetea.model.Order

class OrderHistoryViewModel : ViewModel() {
    // Simulated order history
    private val _orders = MutableStateFlow<List<Order>>(emptyList())
    val orders: StateFlow<List<Order>> = _orders

    init {
        // Simulate loading orders
        _orders.value = listOf(
            Order("1", "Sweetea", listOf("Mango", "Oreo"), 19.99, "2025-04-10"),
        )
    }
}