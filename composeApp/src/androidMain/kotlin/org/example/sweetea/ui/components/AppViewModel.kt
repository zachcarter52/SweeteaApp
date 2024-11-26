package org.example.sweetea.ui.components

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch
import org.example.sweetea.SquareApi
import org.example.sweetea.dataclasses.CategoryData
import org.example.sweetea.dataclasses.LocationData
import org.example.sweetea.dataclasses.ProductData

class AppViewModel: ViewModel() {
    var categoryList: List<CategoryData>? by mutableStateOf(null)
        private set
    var locationsList: List<LocationData>? by mutableStateOf(null)
        private set
    var currentLocation: LocationData? by mutableStateOf(null)
        private set
    var productList: List<ProductData>? by mutableStateOf(null)
        private set
    var productMap: Map<Int, ArrayList<ProductData>>? by mutableStateOf(null)
        private set
    var currentCategory by mutableIntStateOf(2)
    init{
        println("App ViewModel initializing")
        getLocations()
        getMenu()
    }
    private fun getLocations() {
        viewModelScope.launch {
            locationsList = SquareApi.getLocations()
            println("Getting Locations")
            currentLocation = SquareApi.currentLocation
        }
    }
    private fun getMenu(){
        viewModelScope.launch {
            if(categoryList == null) {
                categoryList = SquareApi.getCategories()
                println("Getting Categories")
            }
            if(productList == null) {
                productList = SquareApi.getProducts()
                println("Getting product list")
            }
            if(productList != null && productMap == null){
                println("Making product map")
                productMap = mutableMapOf()
                val curProductMap = productMap as MutableMap<Int, ArrayList<ProductData>>
                productList!!.forEach{
                    product ->
                    val categoryID = product.categories.data[0].site_category_id.toInt()
                    if(curProductMap[categoryID] == null){
                        curProductMap[categoryID] = arrayListOf(product)
                    } else {
                        curProductMap[categoryID]?.add(product)
                    }
                }
            }
            println(productMap)
        }
    }
}

