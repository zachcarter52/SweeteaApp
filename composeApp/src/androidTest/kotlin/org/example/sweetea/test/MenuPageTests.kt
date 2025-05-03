package org.example.sweetea.test

import androidx.test.platform.app.InstrumentationRegistry
import org.example.sweetea.AuthViewModel
import org.example.sweetea.dataclasses.local.SquareService
import org.example.sweetea.viewmodel.AppViewModel
import org.junit.Test
import org.mockito.Mockito.mock
import org.mockito.Mockito.`when`
import io.mockk.mockk
import io.mockk.coEvery
import org.example.sweetea.dataclasses.retrieved.Availability
import org.example.sweetea.dataclasses.retrieved.AvailabilityData
import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.CategoryImages
import org.example.sweetea.dataclasses.retrieved.Data
import org.example.sweetea.dataclasses.retrieved.ImageData
import org.example.sweetea.dataclasses.retrieved.MetaData
import org.example.sweetea.dataclasses.retrieved.PaginationData
import org.example.sweetea.dataclasses.retrieved.ProductCountData
import org.example.sweetea.dataclasses.retrieved.SquareApiRequest
import org.junit.Assert.assertEquals
import org.junit.Before


class MenuPageTests {
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

    @Test
    fun myCategoryTest() {

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
            id= "",
             site_category_id= "",
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

        // Arrange
        val mockService: SquareService = mock(SquareService::class.java)
        val mockCategories: Result<SquareApiRequest<CategoryData>> = Result.success(sqApiReq)

        val mockAuthViewModel = mockk<AuthViewModel>(relaxed = true)
        coEvery{mockService.getCategories()} returns mockCategories

        val appViewModel = AppViewModel(mockAuthViewModel)
        assertEquals(appViewModel.getCategories(), mockCategories)

    }
}