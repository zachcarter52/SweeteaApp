package org.example.sweetea

import androidx.activity.ComponentActivity
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.test.onNodeWithTag
import androidx.compose.ui.test.performClick
import androidx.compose.ui.test.assertIsDisplayed
import androidx.navigation.compose.ComposeNavigator
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.testing.TestNavHostController
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.pages.HomePage
import org.example.sweetea.pages.StoreSelectionPage
import org.junit.Before
import org.junit.Rule
import org.junit.Test

class StoreSelectionTest {

    @get:Rule
    val composeTestRule = createAndroidComposeRule<ComponentActivity>()

    private lateinit var appViewModel: AppViewModel
    private lateinit var navController: TestNavHostController

    @Before
    fun setup() {
        appViewModel = AppViewModel()
    }

    @Test
    fun testSelectStore() {
        composeTestRule.setContent {
            navController = TestNavHostController(composeTestRule.activity)
            navController.navigatorProvider.addNavigator(ComposeNavigator())

            StoreSelectionPage(
                navController = navController,
                appViewModel = appViewModel
            )
        }

        composeTestRule.onNodeWithTag("selectedStoreText")
            .assertIsDisplayed()
    }

    @Test
    fun testOrderNowButtonNavigates() {
        composeTestRule.setContent {
            navController = TestNavHostController(composeTestRule.activity)
            navController.navigatorProvider.addNavigator(ComposeNavigator())

            NavHost(navController = navController, startDestination = "home") {
                composable("home") {
                    HomePage(
                        navController = navController,
                        appViewModel = appViewModel,
                        authViewModel = AuthViewModel()
                    )
                }
                composable("menu") {}
                composable("storeSelection") {}
            }
        }

        composeTestRule.onNodeWithTag("orderNowButton")
            .assertIsDisplayed()
            .performClick()

        composeTestRule.runOnIdle {
            val destination = navController.currentDestination?.route
            assert(destination == "menu" || destination == "storeSelection")
        }
    }
}
