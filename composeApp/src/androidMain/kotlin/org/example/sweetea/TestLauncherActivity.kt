package org.example.sweetea

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import androidx.activity.result.ActivityResult
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import com.google.gson.Gson
import org.example.sweetea.pages.CartItemChoiceDetails
import org.example.sweetea.pages.CartItemPriceDetails
import org.example.sweetea.pages.LineItem
import sqip.CardEntryActivityResult

class TestLauncherActivity : AppCompatActivity() {
    val startForResult = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result: ActivityResult ->
        println("DBG: resultCode: ${result.resultCode}")

        TestResultHolder.resultCode = result.resultCode
        TestResultHolder.resultData = result.data

        finish()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val lineItems = mutableListOf<LineItem>()
        lineItems.add(
            LineItem(
                price = 6.95f,
                productName = "Flaming Tiger Pearl Milk",
                productId = "AFJQ3USFV4VICW43GYDYXJ5P",
                siteProductId = "6",
                productModifiers = mutableListOf<CartItemChoiceDetails>().apply {
                    add(CartItemChoiceDetails(
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
        val intent = Intent(this, CardEntryActivity::class.java).apply {
            putExtra("jsonLineItems", Gson().toJson(lineItems))
        }

        startForResult.launch(intent)
    }

    @Override
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        println("DBG: Test onActivityResult")
        super.onActivityResult(requestCode, resultCode, data)
        if(resultCode == -1){
            setResult(Activity.RESULT_OK)
        }
            TestResultHolder.resultCode = resultCode
            TestResultHolder.resultData = data

        finish() // Close TestLauncherActivity so the test can proceed
    }

    object TestResultHolder {
        var resultCode: Int = 0
        var resultData: Intent? = null
    }

    override fun onStop(){
        super.onStop()
        println("DBG: Test onStop()")
    }

    override fun onDestroy(){
        super.onDestroy()
        println("DBG: test onDestroy()")
    }
}