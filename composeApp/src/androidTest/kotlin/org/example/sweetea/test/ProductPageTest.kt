//import kotlin.Test
import android.media.Image
import androidx.activity.viewModels
import androidx.compose.ui.test.assertTextEquals
import androidx.compose.ui.test.assertValueEquals
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.test.onAllNodesWithTag
import androidx.compose.ui.test.onNodeWithTag
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.performClick
import androidx.compose.ui.test.performScrollTo
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.test.platform.app.InstrumentationRegistry
import aws.smithy.kotlin.runtime.util.length
import junit.framework.TestCase.assertEquals
import org.example.sweetea.AuthViewModel
import org.example.sweetea.MainScreen
//import org.example.sweetea.viewmodel.AppViewModel
import org.example.sweetea.dataclasses.retrieved.BadgeData
import org.example.sweetea.dataclasses.retrieved.BasicCategoryData
import org.example.sweetea.dataclasses.retrieved.ChoiceData
import org.example.sweetea.dataclasses.retrieved.Data
import org.example.sweetea.dataclasses.retrieved.ImageData
import org.example.sweetea.dataclasses.retrieved.InventoryData
import org.example.sweetea.dataclasses.retrieved.ModifierData
import org.example.sweetea.dataclasses.retrieved.PriceData
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.viewmodel.AppViewModel
import org.junit.Assert.assertTrue
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import kotlin.random.Random
import kotlin.test.assertFails
import kotlin.test.assertFailsWith
import java.io.ByteArrayOutputStream
import java.io.PrintStream


class ProductPageTest {

    @get:Rule
    val composeTestRule = createAndroidComposeRule<MainScreen>()
    @Before
    fun setup() {
        val permissionList = listOf(
            android.Manifest.permission.ACCESS_FINE_LOCATION,
            android.Manifest.permission.ACCESS_COARSE_LOCATION
        )

        permissionList.forEach { permission ->
            InstrumentationRegistry.getInstrumentation().uiAutomation.grantRuntimePermission("org.example.sweetea", permission)
        }
    }

    @Test
    fun myTest() {
        val auth = AuthViewModel()
        val viewModel = AppViewModel(auth)
        val product = createProduct()
        viewModel.setProduct(product)

        val listofchoices: MutableList<ChoiceData> = mutableListOf(
            ChoiceData(
                id = "choicedataid",
                name = "choicedata",
                price = 0.00f,
                display_order = 1,
                sold_out = false,
            )
        )

        val modData = ModifierData(
            id = "modDataID",
            site_product_id = 2,
            name = "foam",
            min_selected = 0,
            max_selected = 1,
            type = "type",
            display_order = 1,
            visible_on_invoice = 1,
            choices = listofchoices
        )

        viewModel.currentProduct?.modifiers?.data?.set(0, modData)

        assertEquals(product.name, viewModel.getCurrProduct()?.name)
    }
        /*composeTestRule.waitForIdle()

        composeTestRule
            .onNodeWithText("Menu")
            .performClick()
            .performClick()

        composeTestRule
            .onNodeWithText("Signature")
            .performClick()

        composeTestRule
            .onNodeWithText("Flaming Tiger Pearl Milk")
            .performClick()

        // Select random Ice Level Option
        composeTestRule
            .onNodeWithTag("icelevel_dropdown")
            .performClick()
        val iceLevelOptions = composeTestRule.onAllNodesWithTag("icelevel_dropdown_item").fetchSemanticsNodes()
        composeTestRule
            .onAllNodesWithTag("icelevel_dropdown_item")[Random.nextInt(iceLevelOptions.size)].performClick()

        // Select random Sugar Level Option
        composeTestRule
            .onNodeWithTag("sugarlevel_dropdown")
            .performScrollTo()
            .performClick()
        val sugarLevelOptions = composeTestRule.onAllNodesWithTag("sugarlevel_dropdown_item").fetchSemanticsNodes()
        composeTestRule
            .onAllNodesWithTag("sugarlevel_dropdown_item")[Random.nextInt(sugarLevelOptions.size - 1)].performClick()

        // Select random Milk Option
        composeTestRule
            .onNodeWithTag("milk_dropdown")
            .performScrollTo()
            .performClick()
        val milkOptions = composeTestRule.onAllNodesWithTag("milk_dropdown_item").fetchSemanticsNodes()
        composeTestRule
            .onAllNodesWithTag("milk_dropdown_item")[Random.nextInt(milkOptions.size)].performClick()

        // Select 3 random choices

        composeTestRule
            .onNodeWithTag("milk_dropdown")
            .performScrollTo()
            .performClick()

        composeTestRule
            .onNodeWithTag("toppings_choice")
            .performScrollTo()
            .performClick()
        for(c in 0..3){
            val choiceOption = composeTestRule
                .onAllNodesWithTag("choice").fetchSemanticsNodes()
            composeTestRule
                .onAllNodesWithTag("choice")[Random.nextInt(choiceOption.size)].performClick()
        }

        composeTestRule
            .onNodeWithTag("add", useUnmergedTree = true)
            .performScrollTo()
            .performClick()

        composeTestRule
            .onNodeWithTag("checkout")
            .performClick()

        composeTestRule
            .onNodeWithTag("continue_shopping")
            .performClick()*/
    @Test
    fun priceUpdatesCorrectly(){
        composeTestRule.waitForIdle()

        composeTestRule
            .onNodeWithText("Menu")
            .performClick()
            .performClick()

        composeTestRule
            .onNodeWithText("Signature")
            .performClick()

        composeTestRule
            .onNodeWithText("Flaming Tiger Pearl Milk")
            .performClick()

        // Select random Ice Level Option
        composeTestRule
            .onNodeWithTag("icelevel_dropdown")
            .performClick()
        val iceLevelOptions = composeTestRule.onAllNodesWithTag("icelevel_dropdown_item").fetchSemanticsNodes()
        composeTestRule
            .onAllNodesWithTag("icelevel_dropdown_item")[0].performClick()

        // Select random Sugar Level Option
        composeTestRule
            .onNodeWithTag("sugarlevel_dropdown")
            .performScrollTo()
            .performClick()
        val sugarLevelOptions = composeTestRule.onAllNodesWithTag("sugarlevel_dropdown_item").fetchSemanticsNodes()
        composeTestRule
            .onAllNodesWithTag("sugarlevel_dropdown_item")[0].performClick()

        // Select random Milk Option
        composeTestRule
            .onNodeWithTag("milk_dropdown")
            .performScrollTo()
            .performClick()
        val milkOptions = composeTestRule.onAllNodesWithTag("milk_dropdown_item").fetchSemanticsNodes()
        composeTestRule
            .onAllNodesWithTag("milk_dropdown_item")[1].performClick()

        composeTestRule
            .onNodeWithTag("milk_dropdown")
            .performScrollTo()
            .performClick()

        composeTestRule
            .onNodeWithText("Toppings")
            .performScrollTo()


        composeTestRule
            .onAllNodesWithTag("choice").fetchSemanticsNodes()

        composeTestRule
            .onAllNodesWithTag("choice")[0].performScrollTo().performClick()

        composeTestRule
            .onAllNodesWithTag("choice")[1].performScrollTo().performClick()

        composeTestRule
            .onAllNodesWithTag("choice")[2].performScrollTo().performClick()

        composeTestRule
            .onNodeWithTag("price")
            .performScrollTo()
            //.assertValueEquals("$9.25")
            .assertTextEquals("$9.45")

    }
    @Test
    fun testAddButtonAddsItemToCart() {
        val auth = AuthViewModel()
        val viewModel = AppViewModel(auth)

        val product = createProduct() // A mock product with name/price/etc.

        //set it as the working item
        viewModel.setProduct(product)
        // Simulate pressing "Add" button
        viewModel.workingItem?.let { viewModel.shoppingCart.add(it) }

        val cartItems = viewModel.shoppingCart

        assertEquals(1, cartItems.size)
        assertEquals(product.id, cartItems[0].id)
    }

    @Test
    fun testFavButtonAddsItemToFavs() {
        var auth = AuthViewModel()
        var viewModel = AppViewModel(auth)

        val product = createProduct() // A mock product with name/price/etc.

        val auth2 = AuthViewModel()
        val viewModel2 = AppViewModel(auth2)
        //now test the case in which they are logged, which means they should be able to add to favs
        viewModel2.authViewModel.setLoginState(true)

        viewModel2.setProduct(product)
        viewModel2.workingItem?.let { viewModel2.shoppingCart.add(it) }

        viewModel2.workingItem?.let {
            viewModel2.addFavorite(
                viewModel2.authViewModel.emailAddress.value,
                viewModel2.shoppingCart[0]
            )
        }

        val cartItems = viewModel2.shoppingCart

        assertEquals(1, cartItems.size)
        assertEquals(product.id, cartItems[0].id)
    }

    @Test//(expected = IllegalStateException::class.java)
    fun testFailFavButtonAddsItemToFavs() {
        var auth = AuthViewModel()
        var viewModel = AppViewModel(auth)

        val product = createProduct() // A mock product with name/price/etc.
        viewModel.authViewModel.setLoginState(false)

        //set it as the working item
        viewModel.setProduct(product)
        viewModel.workingItem?.let { viewModel.shoppingCart.add(it) }

        // Simulate pressing "Add" button
        viewModel.addFavorite(viewModel.authViewModel.emailAddress.value, product)
        assertEquals(0, viewModel.favoriteProducts.value.size)
    }

    @Test
    fun productViewModelTest() {
        val auth = AuthViewModel()
        val viewModel= AppViewModel(auth)
        val product = createProduct()
        viewModel.setProduct(product)
        assertEquals(product.id, viewModel.currentProduct?.id)
    }
    
    fun createProduct() : ProductData{
        val inventory = InventoryData(
            total=  1,
            lowest = 1,
            enabled = true,
            all_variations_sold_out = false,
            some_variations_sold_out = false,
            all_inventory_total = 30,
        )
        val price = PriceData(
            high = 0.00f,
            high_with_modifiers = 0.00f,
            high_formatted = "0.00f",
            high_subunits = 2,
            low = 0.00f,
            low_with_modifiers = 0.00f,
            low_with_subscriptions = 0.00f,
            low_formatted = "lowformatted",
            low_subunits = 1,
            regular_high = 0.00f,
            regular_high_with_modifiers = 0.00f,
            regular_high_formatted = "reghighformatted",
            regular_high_subunits = 1,
            regular_low = 0.00f,
            regular_low_with_modifiers = 0.00f,
            regular_low_formatted = "reglowformatted",
            regular_low_subunits = 1,
        )
        //mapOf("key1" to "value1", "key2" to "value2")
        val badges = BadgeData(
            low_stock = false,
            out_of_stock = false,
            on_sale = false,
        )
        val imageData = ImageData(
            id = "000",
            owner_id = "ownerid",
            site_id= "siteid",
            site_product_image_id= "siteimageid",
            url= "url",
            absolute_url= "url",
            urls= mapOf("key1" to "value1", "key2" to "value2"),
            width= 12,
            height= 12,
            format= "format",
            created_at= "createdat",
            updated_at= "updatedat",
            absolute_urls= mapOf("key1" to "value1", "key2" to "value2"),
        )
        val thumbnail : Data<ImageData> = Data(imageData)
        val listofimages: List<ImageData> = listOf(imageData, imageData)
        val choices = ChoiceData(
            id = "choicedataid",
            name = "choicedata",
            price = 0.00f,
            display_order = 1,
            sold_out = false,
        )

        val listofchoices: MutableList<ChoiceData> = mutableListOf(choices)
        val modData = ModifierData(
            id = "modDataID",
            site_product_id= 2,
            name= "modData",
            min_selected = 0,
            max_selected = 1,
            type = "type",
            display_order = 1,
            visible_on_invoice = 1,
            choices = listofchoices
        )

        val listofmods: MutableList<ModifierData> = mutableListOf(modData)
        val dataImageList: Data<List<ImageData>> = Data(listofimages)
        val modifiers: Data<MutableList<ModifierData>> = Data(listofmods)
        val categorydata = BasicCategoryData(
            site_category_id= "categorydataid",
            name= "categorydata",
        )
        val categorylist: List<BasicCategoryData> = listOf(categorydata)
        val categories: Data<List<BasicCategoryData>> = Data(categorylist)
        val product = ProductData(
            id = "123",
            site_product_id = "",
            visibility = "",
            name = "before test",
            short_description = "",
            product_type = "",
            taxable = true,
            site_link = "",
            inventory = inventory,
            price = price,
            per_order_max = 1,
            badges = badges,
            thumbnail = thumbnail,
            images = dataImageList,
            modifiers = modifiers,
            categories = categories
        )

        return product
    }
}