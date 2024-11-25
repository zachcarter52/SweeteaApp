package org.example.sweetea.ui.components

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch
import org.example.sweetea.SquareApi
import org.example.sweetea.dataclasses.CategoryData
import org.example.sweetea.dataclasses.ProductData

class MenuViewModel: ViewModel() {
    var categoryList: List<CategoryData>? by mutableStateOf(null)
        private set
    var productList: List<ProductData>? by mutableStateOf(null)
        private set
    init{
        updateMenu()
    }
    private fun updateMenu(){
        viewModelScope.launch {
            categoryList = SquareApi.getCategories()
            productList = SquareApi.getProducts()
        }
    }

}

