package org.example.sweetea.test

import androidx.test.platform.app.InstrumentationRegistry
import io.mockk.coEvery
import org.example.sweetea.AuthViewModel
import org.example.sweetea.viewmodel.AppViewModel
import org.junit.Test
import org.example.sweetea.dataclasses.retrieved.Availability
import org.example.sweetea.dataclasses.retrieved.AvailabilityData
import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.CategoryImages
import org.example.sweetea.dataclasses.retrieved.Data
import org.example.sweetea.dataclasses.retrieved.MetaData
import org.example.sweetea.dataclasses.retrieved.PaginationData
import org.example.sweetea.dataclasses.retrieved.ProductCountData
import org.example.sweetea.dataclasses.retrieved.SquareApiRequest
import org.junit.Assert.assertEquals
import org.junit.Before
import io.mockk.mockk
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.test.StandardTestDispatcher
import kotlinx.coroutines.test.runTest
import org.example.sweetea.dataclasses.local.SquareRepository

class MenuPageTest {
    @Before
    fun setup() {
        val permissionList = listOf(
            android.Manifest.permission.ACCESS_FINE_LOCATION,
            android.Manifest.permission.ACCESS_COARSE_LOCATION
        )

        permissionList.forEach { permission ->
            InstrumentationRegistry.getInstrumentation().uiAutomation.grantRuntimePermission(
                "org.example.sweetea",
                permission
            )
        }
    }

   @OptIn(ExperimentalCoroutinesApi::class)
   @Test
    fun myCategoryTest() = runTest {
        val urls = mapOf("One" to "Two")

        val catImg = CategoryImages(
            id = "",
            path= "",
            width= 0,
            height= 0,
            url= "",
            absolute_url= "",
            urls= urls,
        )
        val listCatImg: Data<List<CategoryImages>> = Data(listOf(catImg))
        val countdata = ProductCountData(
            total = 0,
            visible =  0,
        )
        val avail = Availability(
             hours= listOf(0,0,0,0),
             root_hours= listOf(0,0,0,0),
             should_display_now= true,
             is_custom_times= false,
        )
        val availData = AvailabilityData(
             delivery = avail,
             pickup = avail,
             dine_in = avail,
             shipping = false,
        )
        val category = CategoryData(
            id= "99",
             site_category_id= "99",
             name= "",
             root_parent_category_id= 0,
             seo_page_description= "",
             seo_page_title= "",
             site_link= "",
             permalink= "",
            // og_title= "",
            // og_description= "",
             published= false,
            // unpublished_ancestor= "",
             parent= "",
             is_custom_times= false,
             depth= 0,
            // product_counts= ProductCountsData,
             updated_date= "",
             hide_from_parent= false,
             page_layout= "",
             show_sub_categories= false,
             product_count= countdata,
            // children= List<"">,
            // preferred_order_product_ids= List<"">
             images= listCatImg,
             availability= availData
        )
        //val auth = AuthViewModel()
        val sqApiReq = SquareApiRequest(
            data = listOf(category),
            meta = MetaData (
                pagination =  PaginationData(
                     total= 0,
                     count= 0,
                     per_page= 0,
                     current_page= 0,
                     total_pages= 0,
                )
            )
        )

       val mockSquareRepository = mockk<SquareRepository>()
       val mockCategories = listOf(category)
       coEvery { mockSquareRepository.getCategories() } returns mockCategories

       val mockAuthViewModel = mockk<AuthViewModel>()
       coEvery { mockAuthViewModel.emailAddress } returns MutableStateFlow("").asStateFlow()

       val testDispatcher = StandardTestDispatcher()
       val appViewModel = AppViewModel(
           authViewModel = mockAuthViewModel,
           dispatcher = testDispatcher,
           squareRepository = mockSquareRepository
       )
       appViewModel.getCategories()
       testDispatcher.scheduler.advanceUntilIdle()

       assertEquals(mockCategories, appViewModel.categoryList.value)
    }
}