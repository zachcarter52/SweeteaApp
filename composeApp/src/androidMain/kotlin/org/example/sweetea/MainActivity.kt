package org.example.sweetea


import android.os.Bundle
import android.os.Looper
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
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
        //parameter of the function needs to be solved
        //MobilePaymentsSdk.initialize(getId(), this)
        setContent {
            //Displays current screen
            //App()- default *REMOVED*
            SweeteaApp()
        }
    }
}

@Composable
fun SweeteaApp( modifier: Modifier=Modifier){
    MaterialTheme{
        val navController = rememberNavController()
        Scaffold(
            bottomBar = { AppBottomBar(navController) }
        ) {
            padding -> HomeScreen(Modifier.padding(padding))
            SweetTeaNavHost(
                navController = navController,
                modifier = Modifier.padding(padding)
            )
        }
    }

}

@Preview
@Composable
fun HomeScreen(modifier: Modifier=Modifier) {
    var clicked by remember { mutableStateOf(false) }
    val logo = painterResource(id = R.drawable.sweetealogo_homepage)

    //Calculates top padding based on screen height.
    //Change the floating point value in calculatedPadding to change the image placement.
    val configuration = LocalConfiguration.current
    val screenHeight = configuration.screenHeightDp.dp
    val calculatedPadding = with(LocalDensity.current) { (screenHeight.toPx() * 0.1f).toDp() }
    Row(modifier = modifier) {
        Box(modifier = Modifier.fillMaxSize()) {
            Image(
                painter = logo,
                contentDescription = "App Logo",
                contentScale = ContentScale.Fit,
                modifier = Modifier
                    .fillMaxWidth()
                    .wrapContentSize(Alignment.Center)
                    .padding(top = calculatedPadding)
            )

        }
        Column(modifier = modifier) {
            ElevatedButton(onClick = {clicked = !clicked}) {
                Text("Events")
            }
        }
    }

}

//navhost function of Navigation
@Composable
fun SweetTeaNavHost(
    navController: NavHostController,
    modifier: Modifier = Modifier
){
    NavHost(
        navController = navController,
        startDestination = Account.route,
        modifier = modifier
    ) {
        composable(route = Account.route){
            AccountPage(navController)
        }
    }
}

fun NavHostController.navigateSingleTopTo(route:String) =
    this.navigate(route){
        launchSingleTop = true
    }

@Composable
private fun AppBottomBar(navController: NavHostController, modifier: Modifier=Modifier){
    NavigationBar(modifier = modifier) {
        NavigationBarItem(
            icon = {
                Icon(
                    imageVector = Icons.Default.Home,
                    contentDescription = null
                )
            },
            label = {
                Text("Home")
            },
            selected = false,
            onClick = {}
        )
        NavigationBarItem(
            icon = {
                Icon(
                    imageVector = Icons.Default.Menu,
                    contentDescription = null
                )
            },
            label = {
                Text("Menu")
            },
            selected = false,
            onClick = {}
        )
        NavigationBarItem(
            icon = {
                Icon(
                    imageVector = Icons.Default.Star,
                    contentDescription = null
                )
            },
            label = {
                Text("Reward")
            },
            selected = false,
            onClick = {}
        )
        NavigationBarItem(
            icon = {
                Icon(
                    imageVector = Icons.Default.AccountCircle,
                    contentDescription = null
                )
            },
            label = {
                Text("Account")
            },
            selected = false,
            onClick = {
                navController.navigateSingleTopTo(Account.route)
            }
        )
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

