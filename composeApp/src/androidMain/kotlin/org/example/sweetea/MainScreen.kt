package org.example.sweetea
import services.SquarePaymentService
import kotlinx.coroutines.*

import android.app.Application
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInHorizontally
import androidx.compose.animation.slideOutHorizontally
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import com.amplifyframework.AmplifyException
import com.amplifyframework.core.Amplify
import com.amplifyframework.auth.cognito.AWSCognitoAuthPlugin


import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import org.example.sweetea.ui.theme.AppTheme
import com.squareup.sdk.mobilepayments.MobilePaymentsSdk
import com.squareup.sdk.mobilepayments.core.CallbackReference
import com.squareup.sdk.mobilepayments.core.Result
import com.squareup.sdk.mobilepayments.payment.CurrencyCode
import com.squareup.sdk.mobilepayments.payment.Money
import com.squareup.sdk.mobilepayments.payment.PaymentParameters
import com.squareup.sdk.mobilepayments.payment.PromptMode
import com.squareup.sdk.mobilepayments.payment.*



import org.example.sweetea.ui.components.*
import java.util.UUID



class MainScreen : ComponentActivity() {
    private var callbackReference: CallbackReference? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        installSplashScreen()

        // Initialize the Mobile Payments SDK
        MobilePaymentsSdk.initialize(getId(), applicationContext as Application)
        // Sandbox tokens
        val token = ""
        val locationId = ""


        // Initialize Amplify / Cognito (remains the same)
        try {
            Amplify.addPlugin(AWSCognitoAuthPlugin())
            Amplify.configure(applicationContext)
            Log.i("MyAmplifyApp", "Initialized Amplify")
        } catch (error: AmplifyException) {
            Log.e("MyAmplifyApp", "Could not initialize Amplify", error)
        }

        setContent {
            SweeteaApp()
        }
    }




    override fun onResume() {
        super.onResume()

    }
    override fun onPause() {
        super.onPause()
        // Remove the callback reference to prevent memory leaks
        callbackReference?.clear()
    }



    fun startPaymentActivity(
        onStartPaymentError: (StartPaymentError) -> Unit
    ) {
        val paymentManager = MobilePaymentsSdk.paymentManager()
        // Configure the payment parameters
        val paymentParams = PaymentParameters.Builder(
            amount = Money(100, CurrencyCode.USD), // $1
            idempotencyKey = UUID.randomUUID().toString()
        )
            .referenceId("1234")
            .note("Donut")
            .autocomplete(true)
            .build()

        // Configure the prompt parameters
        val promptParams = PromptParameters(
            mode = PromptMode.DEFAULT,
        )

        // Start the payment activity
        paymentManager.startPaymentActivity(paymentParams, promptParams) { result ->
            // Callback to handle the payment result
            when (result) {
                is Result.Success -> {
                    Log.i("TAG", "Success")
                    val paymentDetails = result.value

                    // Safely unwrap referenceId and amount, using default values if needed
                    val referenceId = paymentDetails.referenceId ?: UUID.randomUUID().toString() // Default to a new UUID
                    val amount = paymentDetails.amountMoney.amount ?: 0 // Default to 0 if amount is null

                    // Launch a coroutine to process the payment
                    CoroutineScope(Dispatchers.Main).launch {
                        try {
                            val paymentResponse = SquarePaymentService.processPayment(referenceId, amount)
                            if (paymentResponse.success) {
                                Log.i("Payment", "Payment processed successfully")
                                // Handle success: show success message, navigate, etc.
                            } else {
                                Log.e("Payment", "Payment failed: ${paymentResponse.message}")
                                // Handle failure: show error message
                            }
                        } catch (e: Exception) {
                            Log.e("Payment", "Error processing payment: ${e.message}")
                            // Handle exception: show error message
                        }
                    }
                }
                is Result.Failure -> {
                    Log.e("TAG", "Start payment failed: ${result.errorCode}-${result.errorMessage}")
                    onStartPaymentError(StartPaymentError(result.errorCode, result.errorMessage))
                }
            }
        }
    }

    data class StartPaymentError(
        val errorCode: PaymentErrorCode,
        val errorMessage: String
    )




    @Composable
    fun SweeteaApp(modifier: Modifier = Modifier) {
        AppTheme(
            dynamicColor = false
        ) {
            val context = LocalContext.current
            val navController = rememberNavController()
            val navBackStackEntry by navController.currentBackStackEntryAsState()
            var currentRoute by remember { mutableStateOf("") }

            val navRoute = navBackStackEntry?.destination?.route
            if (navRoute != null) {
                currentRoute = navRoute
            }
            var selectedItem by remember { mutableIntStateOf(0) }
            var oldSelectedItem by remember { mutableIntStateOf(0) }

            val enterTransition = {
                if (selectedItem > oldSelectedItem) {
                    slideInHorizontally(initialOffsetX = { it }) +
                            fadeIn()
                } else {
                    slideInHorizontally(initialOffsetX = { -it }) +
                            fadeIn()
                }
            }
            val exitTransition = {
                if (selectedItem > oldSelectedItem) {
                    slideOutHorizontally(targetOffsetX = { -it }) +
                            fadeOut()
                } else {
                    slideOutHorizontally(targetOffsetX = { it }) +
                            fadeOut()
                }
            }

            Scaffold(
                topBar = {
                    val currentDest = DestMap(currentRoute)

                    if (currentDest != null) {
                        AppHeader(
                            modifier,
                            headerText = currentDest.topBarHeaderText,
                            hideLocation = currentDest.hideLocation,
                            hideTopBarHeader = currentDest.hideTopBarHeader,
                            enterTransition = enterTransition,
                            exitTransition = exitTransition
                        )
                    } else {
                        AppHeader(
                            modifier = modifier,
                            enterTransition = enterTransition,
                            exitTransition = exitTransition
                        )
                    }
                },
                bottomBar = {
                    AppBottomBar(
                        navController = navController,
                        selectedItem = selectedItem,
                        updateSelectedItem = {
                            oldSelectedItem = selectedItem
                            selectedItem = it
                        }
                    )
                }
            ) { padding ->
                SweetTeaNavHost(
                    navController = navController,
                    modifier = Modifier.padding(padding),
                    enterTransition = enterTransition,
                    exitTransition = exitTransition
                )

                // Add a button that triggers the payment activity
                Button(
                    onClick = {
                        // Ensure the context is properly cast to MainScreen before calling startPaymentActivity
                        (context as? MainScreen)?.startPaymentActivity { error ->
                            // Handle any errors if payment fails to start
                            Log.e("Payment", "Error starting payment: ${error.errorMessage}")
                        }
                    },
                    modifier = Modifier.padding(16.dp)  // Customize the button's padding and other styling
                ) {
                    Text("Start Payment")
                }
            }
        }
    }




    /*--------------square payment api functionality--------------*/
//actions after success and failure need to be added


//actions after success and failure need to be added
//fun startPaymentActivity() {
//    val paymentManager = MobilePaymentsSdk.paymentManager()
//    // Configure the payment parameters
//    val paymentParams = PaymentParameters.Builder(
//        amount = Money(100, CurrencyCode.USD),
//        idempotencyKey = UUID.randomUUID().toString()
//    )
//        .referenceId("1234")
//        .note("Chocolate Cookies and Lemonade")
//        .autocomplete(true)
//        .build()
//    // Configure the prompt parameters
//    val promptParams = PromptParameters(
//        mode = PromptMode.DEFAULT,
//        additionalPaymentMethods = listOf(AdditionalPaymentMethod.Type.KEYED)
//    )
//    // Start the payment activity
//    handle = paymentManager.startPaymentActivity(paymentParams, promptParams) { result ->
//        // Callback to handle the payment result
//        when (result) {
//            is Result.Success -> // show payment details
//            is Result.Failure -> // show error message
//        }
//    }
//}

override fun onDestroy() {
    super.onDestroy()

}
fun getId(): String {
    return "sandbox-sq0idb-Xd0meC1poQY_JUaZPFZYsA"
}

    }



