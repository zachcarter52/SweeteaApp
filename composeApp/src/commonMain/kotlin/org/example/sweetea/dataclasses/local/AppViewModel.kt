package org.example.sweetea.dataclasses.local

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import org.example.sweetea.Constants
import org.example.sweetea.ResponseClasses.AppStatus
import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.ChoiceData
import org.example.sweetea.dataclasses.retrieved.LocationData
import org.example.sweetea.dataclasses.retrieved.ProductData

class AppViewModel: ViewModel() {

    private val serverRepository = ServerRepository()
    private val squareRepository = SquareRepository()

    private val _locationList = MutableStateFlow<List<LocationData>>(listOf())
    val locationList: StateFlow<List<LocationData>> = _locationList
    private val _categoryList = MutableStateFlow<List<CategoryData>>(listOf())
    val categoryList: StateFlow<List<CategoryData>> = _categoryList
    private val _productList = MutableStateFlow<List<ProductData>>(listOf())
    private val productList: StateFlow<List<ProductData>> = _productList
    private val _appStatus = MutableStateFlow(AppStatus.DefaultStatus)
    val appStatus: StateFlow<AppStatus> = _appStatus
    var currentLocation: LocationData? by mutableStateOf(null)
    var currentCategory: CategoryData? by mutableStateOf(null)
    var currentProduct: ProductData? by mutableStateOf(null)

    // workingItem : ProductData - a copy of what we clicked on
    // when a custom choice is selected, change the workingItem choice to match var workingItem: ProductData? by mutableStateOf(null)
    var workingItem: ProductData? by mutableStateOf(null)

    private val _shoppingCart = mutableStateListOf<ProductData>()
    var shoppingCart: MutableList<ProductData> = _shoppingCart

    var categoryMap: MutableMap<String, CategoryData> = mutableMapOf()
        private set
    private var productMapLocation: LocationData? by mutableStateOf(null)
    var productMap: MutableMap<String, ArrayList<ProductData>> = mutableMapOf()
        private set

    suspend fun updateInfo(){
        getAppStatus()
        if(currentLocation == null) getLocations()
        if(currentCategory == null) getCategories()
        if(currentLocation != null) getProducts(currentLocation!!.id)
    }

    fun setCategory(category: CategoryData){
        currentCategory = category
    }

    fun setProduct(product: ProductData){
        currentProduct = product
        workingItem = ProductData(currentProduct!!)

        workingItem?.modifiers?.data?.forEach { modifierData ->
            if (modifierData.max_selected == 1) {
                // Drink will have the default "[0]" option saved for single modifier choices
                modifierData.choices = mutableListOf(ChoiceData(modifierData.choices[0]))
            } else {
                // Drink will have no checkbox options selected
                modifierData.choices.clear()
            }
        }
    }
    
    private fun getAppStatus(){
        viewModelScope.launch{
            try{
                println("Getting Current appStatus")
                _appStatus.value = serverRepository.getAppStatus() ?: AppStatus.DefaultStatus
                //println("currentEvent:{name: ${getAppStatus.value.eventName}, url:${getAppStatus.value.eventImageURL}}")
            } catch (e: Exception){
                println("Unable to get App Status, ${e}")
                println("Url : ${Constants.SERVER_URL}:${Constants.SERVER_PORT}${Constants.APP_STATUS_ENDPOINT}")
                //throw e
            }
        }
    }

    private fun getLocations() {
        viewModelScope.launch {
            try {
                println("Getting Locations")
                val locations = squareRepository.getLocations()
                if(!locations.isNullOrEmpty()) {
                    _locationList.value = locations
                    if (currentLocation == null) locationList.value.forEach { location ->
                        if (location.address.data.is_primary) {
                            currentLocation = location
                            return@forEach
                        }
                    }
                }
            } catch (e: Exception){
                println("Unable to get locations, ${e}")
                println("Url : ${Constants.BASE_URL + Constants.LOCATIONS_ENDPOINT}")
                //throw e
            }
        }
    }

    private fun getCategories(){
        viewModelScope.launch {
            try{
                println("Getting Categories")
                val categories =  squareRepository.getCategories()
                if(!categories.isNullOrEmpty()) {
                    _categoryList.value = categories
                    _categoryList.value.forEach { category ->
                        categoryMap[category.site_category_id] = category
                    }
                }
            } catch (e: Exception){
                println("Unable to get categories, ${e}")
                //throw e
            }
        }
    }

    private fun getProducts(locationID: String){
        viewModelScope.launch {
            try{
                println("Getting products for location ${locationID}")
                val products = squareRepository.getProducts(locationID)
                if(!products.isNullOrEmpty()) {
                    _productList.value = products
                    productMapLocation = currentLocation
                    _productList.value.forEach { product ->
                        if (productMap[product.categories.data[0].site_category_id] == null) {
                            productMap[product.categories.data[0].site_category_id] = arrayListOf()
                        }
                        if (productMap[product.categories.data[0].site_category_id]?.indexOf(product) == -1) {
                            productMap[product.categories.data[0].site_category_id]?.add(product)
                        }
                    }
                }
            } catch (e: Exception){
                println("Unable to get products for location ${locationID}, ${e}")
                //throw e
            }
        }
    }
}

