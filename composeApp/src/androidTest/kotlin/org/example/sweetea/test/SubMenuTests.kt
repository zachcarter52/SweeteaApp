package org.example.sweetea.test

import android.Manifest
import android.content.Intent
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.performClick
import androidx.test.core.app.ApplicationProvider
import androidx.test.platform.app.InstrumentationRegistry
import org.example.sweetea.MainScreen
import org.junit.Before
import org.junit.Rule
import org.junit.Test

class SubMenuTests {

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
    fun navigateToProductPage() {
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

        composeTestRule
            .onNodeWithText("Flaming Tiger Pearl Milk")
            .assertExists()
    }
}