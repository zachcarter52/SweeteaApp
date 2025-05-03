package org.example.sweetea.test

import android.Manifest
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.test.onAllNodesWithTag
import androidx.compose.ui.test.onNodeWithTag
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.performClick
import androidx.compose.ui.test.performScrollTo
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.action.ViewActions.closeSoftKeyboard
import androidx.test.espresso.action.ViewActions.typeText
import androidx.test.espresso.matcher.ViewMatchers.withId
import androidx.test.espresso.matcher.ViewMatchers.withText
import androidx.test.platform.app.InstrumentationRegistry
import org.example.sweetea.MainScreen
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import androidx.compose.ui.test.assertIsDisplayed

class OrderProcessingTests {
    @get:Rule
    val composeTestRule = createAndroidComposeRule<MainScreen>()

    @Before
    fun setup() {

        val permissionList = listOf(
            Manifest.permission.ACCESS_FINE_LOCATION,
            Manifest.permission.ACCESS_COARSE_LOCATION
        )

        permissionList.forEach { permission ->
            InstrumentationRegistry.getInstrumentation().uiAutomation.grantRuntimePermission(
                "org.example.sweetea",
                permission
            )
        }
    }

    @Test
    fun leadsToProcessing() {
        composeTestRule.waitForIdle()

        composeTestRule
            .onNodeWithText("Menu")
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
            .onNodeWithTag("add", useUnmergedTree = true)
            .performScrollTo()
            .performClick()

        composeTestRule
            .onNodeWithTag("checkout")
            .performClick()

        composeTestRule
            .onNodeWithText("Checkout")
            .performClick()

        onView(withId(2131361898))
            .perform(click())
            .perform(typeText("4111111111111111112611195823"))
            .perform(closeSoftKeyboard())
        onView(withText("Save")).perform(click())

        // Wait for Compose to be restored
        composeTestRule.waitUntil(timeoutMillis = 5000) {
            try {
                composeTestRule.onAllNodesWithTag("orderprocess").fetchSemanticsNodes().isNotEmpty()
            } catch (e: IllegalStateException) {
                false // Compose not ready yet
            }
        }

// Now safely assert
        composeTestRule.onNodeWithTag("orderprocess")
            .assertIsDisplayed()

    }

}