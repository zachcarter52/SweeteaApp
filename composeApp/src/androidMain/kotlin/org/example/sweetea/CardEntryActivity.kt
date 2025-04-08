package org.example.sweetea

import android.app.Activity
import android.app.ComponentCaller
import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.google.gson.Gson
import org.example.sweetea.pages.LineItem
import retrofit2.Retrofit
import sqip.Callback
import sqip.CardDetails
import sqip.CardEntry
import sqip.CardEntry.DEFAULT_CARD_ENTRY_REQUEST_CODE
import sqip.CardEntryActivityResult

class CardEntryActivity : AppCompatActivity() {
    private lateinit var chargeCallFactory: ChargeCall.Factory

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val intentData = intent.getStringExtra("jsonLineItems")
        val lineItems = Gson().fromJson(intentData, Array<LineItem>::class.java).toList()
        println("INTENT DATA: " + lineItems.toString())

        val retrofit: Retrofit = ConfigHelper.createRetroFitInstance()
        chargeCallFactory = ChargeCall.Factory(retrofit)

        val cardHandler = CardEntryBackgroundHandler(chargeCallFactory, resources, lineItems)
        CardEntry.setCardNonceBackgroundHandler(cardHandler)
        CardEntry.startCardEntryActivity(this, true, DEFAULT_CARD_ENTRY_REQUEST_CODE)
    }

    override fun onActivityResult(
        requestCode: Int,
        resultCode: Int,
        data: Intent?,
        caller: ComponentCaller
    ) {
        super.onActivityResult(requestCode, resultCode, data, caller)
        CardEntry.handleActivityResult(
            data = data,
            callback = object : Callback<CardEntryActivityResult> {
                override fun onResult(result: CardEntryActivityResult) {
                    println("DBG: CardEntryActivity onResult() Started")
                    if (result.isSuccess()) {
                        println(result.getSuccessValue())
                        val cardResult: CardDetails = result.getSuccessValue()
                        val nonce = cardResult.nonce

                        intent.putExtra("successNonce", result.getSuccessValue().nonce)
                        intent.putExtra("successCardName", result.getSuccessValue().card.brand)
                        intent.putExtra("successCardDigits", result.getSuccessValue().card.lastFourDigits)
                        setResult(Activity.RESULT_OK)
                    } else if (result.isCanceled()) {
                        println("DBG: CardEntryActivity onResult() Cancelled")
                        setResult(Activity.RESULT_CANCELED)
                    }
                    println("DBG: CardEntryActivity onResult() Finished")
                }
            }
        )
        finish()
    }

    override fun onStop(){
        super.onStop()
        println("DBG: CardEntryActivity onStop()")
        finish()
    }

    override fun onDestroy(){
        super.onDestroy()
        println("DBG: CardEntryActivity onDestroy()")
        finish()
    }
}