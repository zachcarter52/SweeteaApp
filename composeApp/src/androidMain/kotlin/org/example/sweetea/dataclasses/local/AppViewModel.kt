package org.example.sweetea.dataclasses.local

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch
import org.example.sweetea.Constants.Companion
import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.LocationData
import org.example.sweetea.dataclasses.retrieved.ProductData

class AppViewModel: ViewModel() {
    private val repository = SquareRepository()

    private val _locationList = MutableLiveData<List<LocationData>>()
    val locationList: LiveData<List<LocationData>> = _locationList
    private val _categoryList = MutableLiveData<List<CategoryData>>()
    val categoryList: LiveData<List<CategoryData>> = _categoryList
    private val _productList = MutableLiveData<List<ProductData>>()
    val productList: MutableLiveData<List<ProductData>> = _productList

    var currentLocation: LocationData? by mutableStateOf(null)
    var currentCategory: CategoryData? by mutableStateOf(null)
    var categoryMap: MutableMap<String, CategoryData> = mutableMapOf()
        private set
    private var productMapLocation: LocationData? by mutableStateOf(null)
    var productMap: MutableMap<String, ArrayList<ProductData>> = mutableMapOf()
        private set

    fun updateInfo(){
        println("Updating info")
        if(currentLocation == null) getLocations()
        if(currentCategory == null) getCategories()
        if(currentLocation != null) getProducts(currentLocation!!.id)
    }

    fun setCategory(category: CategoryData){
        currentCategory = category
    }

    private fun getLocations() {
        viewModelScope.launch {
            try {
                println("Getting Locations")
                _locationList.value = repository.getLocations()
                if(currentLocation == null) locationList.value!!.forEach{
                    location ->
                    if( location.address.data.is_primary ){
                        currentLocation = location
                        return@forEach
                    }
                }
            } catch (e: Exception){
                println("Unable to get locations, ${e}")
                println("Url : ${Companion.BASE_URL + Companion.LOCATIONS_ENDPOINT}")
                throw e
            }
        }
    }

    private fun getCategories(){
        viewModelScope.launch {
            try{
                println("Getting Categories")
                _categoryList.value = repository.getCategories()
                _categoryList.value!!.forEach{
                    category ->
                    categoryMap[category.site_category_id] = category
                }
            } catch (e: Exception){
                println("Unable to get categories, ${e}")
                throw e
            }
        }
    }

    private fun getProducts(locationID: String){
        viewModelScope.launch {
            try{
                println("Getting products for location ${locationID}")
                _productList.value = repository.getProducts(locationID)
                productMapLocation = currentLocation
                _productList.value!!.forEach {
                    product ->
                    if( productMap[product.categories.data[0].site_category_id] == null ){
                        productMap[product.categories.data[0].site_category_id] = arrayListOf()
                    }
                    if( productMap[product.categories.data[0].site_category_id]?.indexOf(product) == -1 ) {
                        productMap[product.categories.data[0].site_category_id]?.add(product)
                    }
                }
            } catch (e: Exception){
                println("Unable to get products for location ${locationID}, ${e}")
                throw e
            }
        }
    }

}

