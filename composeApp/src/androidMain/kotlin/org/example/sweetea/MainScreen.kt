package org.example.sweetea

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
import androidx.compose.runtime.mutableIntStateOf
import com.amplifyframework.AmplifyException
import com.amplifyframework.core.Amplify
import com.amplifyframework.auth.cognito.AWSCognitoAuthPlugin


import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import org.example.sweetea.ui.theme.AppTheme
import org.example.sweetea.ui.components.*


class MainScreen : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        installSplashScreen()
        //parameter of the function needs to be solved
        //MobilePaymentsSdk.initialize(getId(), this)
        setContent {
            //Displays current screen
            //App()- default *REMOVED*
            SweeteaApp()
            //LoginScreen()
            //VerificationScreen()
        }
        // Initialize Amplify / Cognito
        try {
            Amplify.addPlugin(AWSCognitoAuthPlugin())
            Amplify.configure(applicationContext)
            Log.i("MyAmplifyApp", "Initialized Amplify")

        } catch (error: AmplifyException) {
            Log.e("MyAmplifyApp", "Could not initialize Amplify", error)
        }

    }
}

@Composable
fun SweeteaApp(modifier: Modifier=Modifier){
    AppTheme(
        dynamicColor = false
    ){
        val navController = rememberNavController()
        val navBackStackEntry by navController.currentBackStackEntryAsState()
        var currentRoute by remember{mutableStateOf("")}

        val navRoute = navBackStackEntry?.destination?.route
        if(navRoute != null){
            currentRoute = navRoute
        }
        var selectedItem by remember { mutableIntStateOf(0) }
        var oldSelectedItem by remember { mutableIntStateOf(0) }

        val enterTransition = {
            if(selectedItem > oldSelectedItem){
                slideInHorizontally(initialOffsetX = {it}) +
                        fadeIn()
            } else {
                slideInHorizontally(initialOffsetX = {-it}) +
                        fadeIn()
            }
        }
        val exitTransition = {
            if(selectedItem > oldSelectedItem) {
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

                if(currentDest != null){
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
            bottomBar = { AppBottomBar(
                navController = navController,
                selectedItem = selectedItem,
                updateSelectedItem = {
                    oldSelectedItem = selectedItem
                    selectedItem = it
                }
            ) }
        ) {
            padding ->
            SweetTeaNavHost(
                navController = navController,
                modifier = Modifier.padding(padding),
                enterTransition = enterTransition,
                exitTransition = exitTransition
            )
        }
    }

}

fun onPause() {
    // Remove the callback reference to prevent memory leaks
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

