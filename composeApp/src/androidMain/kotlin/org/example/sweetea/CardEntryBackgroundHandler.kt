package org.example.sweetea

import android.content.res.Resources
import okio.IOException
import org.example.sweetea.pages.LineItem
import sqip.Call
import sqip.CardDetails
import sqip.CardEntryActivityCommand
import sqip.CardNonceBackgroundHandler


class CardEntryBackgroundHandler(private val chargeCallFactory: ChargeCall.Factory, private val resources: Resources, private val lineItems: List<LineItem>) : CardNonceBackgroundHandler {
    override fun handleEnteredCardInBackground(cardDetails: CardDetails): CardEntryActivityCommand {
        try{
            val chargeCall: Call<ChargeResult> = chargeCallFactory.create(cardDetails.nonce, lineItems)
            val chargeResult: ChargeResult = chargeCall.execute()

            if(chargeResult.success){
                return CardEntryActivityCommand.Finish()
            }else if(chargeResult.networkError){
                return CardEntryActivityCommand.ShowError("Network failure.")
            }else{
                return CardEntryActivityCommand.ShowError(chargeResult.errorMessage)
            }
        }catch (e: IOException){
            return CardEntryActivityCommand.ShowError("Network failure.")
        }
    }
}

