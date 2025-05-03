//package org.example.sweetea.ui
//
//import androidx.compose.ui.test.junit4.createComposeRule
//import androidx.compose.ui.test.onNodeWithText
//import androidx.compose.ui.test.assertIsDisplayed
//import org.example.sweetea.ui.OrderDetailsScreen
//import org.junit.Rule
//import org.junit.Test
//
//class OrderDetailsScreenTest {
//
//    @get:Rule
////    val composeTestRule = createComposeRule()
//
//    @Test
//    fun testOrderDetailsScreenDisplaysCorrectInfo() {
//        composeTestRule.setContent {
//            OrderDetailsScreen(orderId = "test123", isTest = true)
//        }
//
//        // Check if mock order details are displayed
//        composeTestRule.onNodeWithText("Order ID: test123").assertIsDisplayed()
//        composeTestRule.onNodeWithText("Customer: Test User").assertIsDisplayed()
//        composeTestRule.onNodeWithText("Total Price: $15.99").assertIsDisplayed()
//        composeTestRule.onNodeWithText("Status: Delivered").assertIsDisplayed()
//    }
//}