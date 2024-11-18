package org.example.sweetea


import android.os.Bundle
import android.os.Looper
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.ElevatedButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.squareup.sdk.mobilepayments.MobilePaymentsSdk
import com.squareup.sdk.mobilepayments.authorization.AuthorizeErrorCode
import com.squareup.sdk.mobilepayments.core.CallbackReference
import com.squareup.sdk.mobilepayments.core.Result
import com.squareup.sdk.mobilepayments.payment.AdditionalPaymentMethod
import com.squareup.sdk.mobilepayments.payment.CurrencyCode
import com.squareup.sdk.mobilepayments.payment.Money
import com.squareup.sdk.mobilepayments.payment.PaymentHandle
import com.squareup.sdk.mobilepayments.payment.PaymentParameters
import com.squareup.sdk.mobilepayments.payment.PromptMode
import com.squareup.sdk.mobilepayments.payment.PromptParameters
import java.util.UUID



class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        installSplashScreen()
        //parameter of the function needs to be solved
        //MobilePaymentsSdk.initialize(getId(), this)
        setContent {
            //Displays current screen
            //App()- default *REMOVED*
            MainScreen()
        }
    }
}

/*--------------square payment api functionality--------------*/
//actions after success and failure need to be added
/*fun onResume() {
    val authorizationManager = MobilePaymentsSdk.authorizationManager()
    // Authorize and handle authorization successes or failures
    callbackReference = authorizationManager.authorize(accessToken, locationId) { result ->
        when (result) {
            is Result.Success -> {
                finishWithAuthorizedSuccess(result.value)
            }

            is Result.Failure -> {
                when (result.errorCode) {
                    AuthorizeErrorCode.NO_NETWORK -> // show error message and retry suggestion
                    AuthorizeErrorCode.USAGE_ERROR-> // show error message
                }
            }
        }
    }
}*/

fun onPause() {
    // Remove the callback reference to prevent memory leaks
}

//actions after success and failure need to be added
/*fun startPaymentActivity() {
    val paymentManager = MobilePaymentsSdk.paymentManager()
    // Configure the payment parameters
    val paymentParams = PaymentParameters.Builder(
        amount = Money(100, CurrencyCode.USD),
        idempotencyKey = UUID.randomUUID().toString()
    )
        .referenceId("1234")
        .note("Chocolate Cookies and Lemonade")
        .autocomplete(true)
        .build()
    // Configure the prompt parameters
    val promptParams = PromptParameters(
        mode = PromptMode.DEFAULT,
        additionalPaymentMethods = listOf(AdditionalPaymentMethod.Type.KEYED)
    )
    // Start the payment activity
    handle = paymentManager.startPaymentActivity(paymentParams, promptParams) { result ->
        // Callback to handle the payment result
        when (result) {
            is Result.Success -> // show payment details
            is Result.Failure -> // show error message
        }
    }
}*/

fun onDestroy() {

}

