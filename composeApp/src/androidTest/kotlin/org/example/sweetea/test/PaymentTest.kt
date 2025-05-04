package org.example.sweetea.test

import android.app.Activity
import android.content.Intent
import androidx.test.core.app.ActivityScenario
import androidx.test.core.app.ApplicationProvider
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.action.ViewActions.closeSoftKeyboard
import androidx.test.espresso.action.ViewActions.typeText
import androidx.test.espresso.matcher.ViewMatchers.withId
import androidx.test.espresso.matcher.ViewMatchers.withText
import androidx.test.platform.app.InstrumentationRegistry
import com.google.gson.Gson
import org.example.sweetea.CardEntryActivity
import org.example.sweetea.pages.CartItemChoiceDetails
import org.example.sweetea.pages.CartItemPriceDetails
import org.example.sweetea.pages.LineItem
import org.junit.Before
import org.junit.Test


class PaymentTest {

    lateinit var activity: ActivityScenario<CardEntryActivity>

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
        val lineItems = mutableListOf<LineItem>()
        lineItems.add(
            LineItem(
                price = 6.95f,
                productName = "Payment Test",
                productId = "AFJQ3USFV4VICW43GYDYXJ5P",
                siteProductId = "6",
                productModifiers = mutableListOf<CartItemChoiceDetails>().apply {
                    add(
                        CartItemChoiceDetails(
                            choiceName = "100% Ice (Normal)",
                            choiceId = "11ec613d076603c6b3d7d2f78cb7156a",
                            price = 0.0f
                        )
                    )
                },
                basePriceMoney = CartItemPriceDetails(
                    amount = 6.95f,
                    currency = "USD"
                )
            )
        )
        val intent = Intent(ApplicationProvider.getApplicationContext(), CardEntryActivity::class.java)
        intent.putExtra("jsonLineItems", Gson().toJson(lineItems))

        activity = ActivityScenario.launchActivityForResult(intent)
    }

    @Test
    fun myTest() {
        onView(withId(2131361898))
            .perform(click())
            .perform(typeText("4111111111111111112611195823"))
            .perform(closeSoftKeyboard())
        onView(withText("Save")).perform(click())

        assert(Activity.RESULT_OK == activity.result.resultCode)
    }
}