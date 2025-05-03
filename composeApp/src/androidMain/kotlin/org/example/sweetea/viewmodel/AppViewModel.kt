package org.example.sweetea.viewmodel

import androidx.collection.mutableFloatListOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import androidx.lifecycle.viewmodel.compose.viewModel
import aws.smithy.kotlin.runtime.collections.push
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import org.example.sweetea.AuthViewModel
import org.example.sweetea.Constants
import org.example.sweetea.ModifiedProduct
import org.example.sweetea.OrderedProduct
import org.example.sweetea.ProductOrder
import org.example.sweetea.ResponseClasses.AppStatus
import org.example.sweetea.dataclasses.local.ServerRepository
import org.example.sweetea.dataclasses.local.SquareRepository
import org.example.sweetea.dataclasses.local.Stores
import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.ChoiceData
import org.example.sweetea.dataclasses.retrieved.Data
import org.example.sweetea.dataclasses.retrieved.LocationData
import org.example.sweetea.dataclasses.retrieved.ModifierData
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.model.Order

class AppViewModel(val authViewModel: AuthViewModel): ViewModel() {

    private val serverRepository = ServerRepository()
    private val squareRepository = SquareRepository()

    private val _locationList = MutableStateFlow<List<LocationData>>(listOf())
    val locationList: StateFlow<List<LocationData>> = _locationList
    private val _categoryList = MutableStateFlow<List<CategoryData>>(listOf())
    val categoryList: StateFlow<List<CategoryData>> = _categoryList
    private val _productList = MutableStateFlow<List<ProductData>>(listOf())
    val productList: StateFlow<List<ProductData>> = _productList
    private val _appStatus = MutableStateFlow(AppStatus())
    val appStatus: StateFlow<AppStatus> = _appStatus
    var currentLocation: LocationData? by mutableStateOf(null)
    var currentCategory: CategoryData? by mutableStateOf(null)
    var currentProduct: ProductData? by mutableStateOf(null)

    // workingItem : ProductData - a copy of what we clicked on
    // when a custom choice is selected, change the workingItem choice to match var workingItem: ProductData? by mutableStateOf(null)
    var workingItem: ProductData? by mutableStateOf(null)

    private val _orders = MutableStateFlow<List<ProductOrder>>(mutableListOf())
    val orders: StateFlow<List<ProductOrder>> = _orders

    private val _favoriteProducts = MutableStateFlow<List<ProductData>>(mutableListOf())
    val favoriteProducts: StateFlow<List<ProductData>> = _favoriteProducts

    private val _shoppingCart = mutableStateListOf<ProductData>()
    var shoppingCart: MutableList<ProductData> = _shoppingCart
    private val _shoppingCartQuantities = mutableStateListOf<Int>()
    var shoppingCartQuantities: MutableList<Int> = _shoppingCartQuantities
    val emailAddress: StateFlow<String> by mutableStateOf(authViewModel.emailAddress)

    var categoryMap: MutableMap<String, CategoryData> = mutableMapOf()
        private set
    private var productMapLocation: LocationData? by mutableStateOf(null)
    var productIDMap: MutableMap<String, ProductData> = mutableMapOf()
        private set
    var productCategoryMap: MutableMap<String, ArrayList<ProductData>> = mutableMapOf()
        private set

    var selectedStore by mutableStateOf<Stores?>(null)
        private set

    fun updateSelectedStore(store: Stores) {
        selectedStore = store
    }
    fun retrieveSelectedStore(): Stores? {
        return selectedStore
    }

    fun updateInfo(){
        getAppStatus()
        if(currentLocation == null) getLocations()
        if(currentCategory == null) getCategories()
        if(currentLocation != null) getProducts(currentLocation!!.id)
        if(emailAddress.value.isNotBlank() ) {
            if(favoriteProducts.value.isEmpty()) getFavorites()
            if(orders.value.isEmpty()) getOrders()
        }
    }

    fun setCategory(category: CategoryData){
        currentCategory = category
    }

    fun setProduct(product: ProductData, modifiedProductData: ProductData? = null){
        currentProduct = product
        workingItem = ProductData(currentProduct!!)

        workingItem?.modifiers?.data?.forEachIndexed { idx, modifierData ->
            if(modifiedProductData != null && modifiedProductData.modifiers.data.size < idx){
                modifierData.choices = modifiedProductData.modifiers.data[idx].choices
            } else if (modifierData.max_selected == 1) {
                // Drink will have the default "[0]" option saved for single modifier choices
                modifierData.choices = mutableListOf(ChoiceData(modifierData.choices[0]))
            } else {
                // Drink will have no checkbox options selected
                modifierData.choices.clear()
            }
        }
    }
    
    fun getAppStatus(){
        viewModelScope.launch{
            try{
                println("Getting Current appStatus")
                if(emailAddress.value.isNotBlank()){
                    val newStatus = serverRepository.getAppStatus(emailAddress.value)
                    if(newStatus != null) _appStatus.value = newStatus
                } else {
                    _appStatus.value = serverRepository.getAppStatus() ?: AppStatus()
                    //println("currentEvent:{name: ${getAppStatus.value.eventName}, url:${getAppStatus.value.eventImageURL}}")
                }
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
                        productIDMap[product.id] = product
                        if (productCategoryMap[product.categories.data[0].site_category_id] == null) {
                            productCategoryMap[product.categories.data[0].site_category_id] = arrayListOf()
                        }
                        if (productCategoryMap[product.categories.data[0].site_category_id]?.indexOf(product) == -1) {
                            productCategoryMap[product.categories.data[0].site_category_id]?.add(product)
                        }
                    }
                }
            } catch (e: Exception){
                println("Unable to get products for location ${locationID}, ${e}")
                //throw e
            }
        }
    }

    fun getFavorites(){
        viewModelScope.launch {
            try{
                println("Getting Favorites")
                val favorites = serverRepository.getFavorites(emailAddress.value)
                if(favorites != null) {
                    _favoriteProducts.value = favorites.modifiedProducts.mapNotNull{toProductData(it!!)}
                }
            } catch (e: Exception){
                println("Unable to get favorites, ${e}")
                //throw e
            }
        }
    }

    private fun getOrders(){
        viewModelScope.launch {
            try{
                println("Getting Orders")
                val orders = serverRepository.getOrders(emailAddress.value)
                if(orders != null) {
                    _orders.value = orders
                }
            } catch (e: Exception){
                println("Unable to get orders, ${e}")
                //throw e
            }
        }
    }

    fun orderCart() = ProductOrder(
        emailAddress = emailAddress.value,
        restaurantName = currentLocation!!.nickname,
        orderedProducts = shoppingCart.mapIndexed{ index, productData ->
            OrderedProduct(
                modifiedProduct = productData.toModifiedProduct(),
                quantity = shoppingCartQuantities[index],
                price = productData.price.high_with_modifiers
            )
        }
    )


    fun toProductData(product: ModifiedProduct): ProductData? {
        productIDMap[product.productID]?.let{ prod ->
            val productData = prod.copy(modifiers = Data(mutableListOf()))
            val productModifiers = prod.modifiers.copy()
            //val modMap = mapOf(this.modifiers.map{it.modifierID} to this.modifiers.map{it.choiceID})
            val modifiersMap = mutableMapOf<String, ModifierData>()
            product.modifiers.forEach{ modifier ->
                val modifierIndex = productModifiers.data.map { it.id }.indexOf(modifier.modifierID)
                if (modifierIndex > -1) {
                    productData.modifiers.data.add(productModifiers.data[modifierIndex])
                    var choice = productModifiers.data[modifierIndex].choices[0]
                    val choiceIndex = productModifiers.data[modifierIndex].choices.map { it.id }.indexOf(modifier.choiceID)
                    if (choiceIndex > -1) {
                        choice = productModifiers.data[modifierIndex].choices[choiceIndex]
                    }
                    if(modifiersMap[modifier.modifierID] == null){
                        modifiersMap[modifier.modifierID] = productModifiers.data[modifierIndex]
                        modifiersMap[modifier.modifierID]!!.choices = mutableListOf()

                    }
                    modifiersMap[modifier.modifierID]!!.choices.add(ChoiceData(choice))
                    productData.modifiers.data[productData.modifiers.data.size - 1].choices = mutableListOf(ChoiceData(choice))
                }
            }
            /*
            modifiersMap.values.forEach{
                productData.modifiers.data.add(it)
            }
             */

            val itemSubtotal = MutableList(productData.modifiers.data.size){ 0.0f }

            productData.modifiers.data.forEachIndexed { index, modifierData ->
                modifierData.choices.forEach { choice ->
                    if(modifierData.max_selected == 1){
                        if (itemSubtotal != null) {
                            itemSubtotal[index] = choice.price
                        }
                    } else {
                        if (itemSubtotal != null) {
                            itemSubtotal += choice.price
                        }
                    }
                }
            }

            productData.price.high_with_modifiers += itemSubtotal.sum()
            return productData
        }
        return null
    }

    fun getIsFavorite(product: ProductData): Boolean{
        return favoriteProducts.value.indexOf(product) != -1
    }

    fun saveOrder(order: ProductOrder){
        viewModelScope.launch {
            val newID = serverRepository.saveOrder(order)
            if(newID != null && newID > 0UL) {
                shoppingCart.clear()
                shoppingCartQuantities.clear()
                getOrders()
            }
        }

    }

    fun addFavorite(emailAddress: String, newFavorite: ProductData){
        viewModelScope.launch {
            val newID = serverRepository.addFavorite(emailAddress, newFavorite.toModifiedProduct())
            if(newID != null && newID > 0UL) {
                getFavorites()
            }
        }
    }

    fun removeFavorite(emailAddress: String, oldFavorite: ProductData){
        viewModelScope.launch {
            serverRepository.removeFavorite(emailAddress, oldFavorite.toModifiedProduct())
            getFavorites()
        }
    }

    class AppViewModelFactory(private val authViewModel: AuthViewModel):
        ViewModelProvider.NewInstanceFactory() {
        override fun <T : ViewModel> create(modelClass: Class<T>): T = AppViewModel(authViewModel) as T
    }
}