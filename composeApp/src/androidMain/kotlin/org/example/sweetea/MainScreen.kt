package org.example.sweetea

import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
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
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutHorizontally
import androidx.compose.animation.slideOutVertically
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.ui.platform.LocalContext
import com.amplifyframework.AmplifyException
import com.amplifyframework.core.Amplify
import com.amplifyframework.auth.cognito.AWSCognitoAuthPlugin

import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import coil3.ImageLoader
import coil3.annotation.ExperimentalCoilApi
import coil3.compose.setSingletonImageLoaderFactory
import coil3.disk.DiskCache
import coil3.disk.directory
import coil3.memory.MemoryCache
import coil3.request.CachePolicy
import coil3.util.DebugLogger
import org.example.sweetea.dataclasses.local.AppViewModel

import org.example.sweetea.ui.theme.AppTheme
import org.example.sweetea.ui.components.*
import java.io.File

class MainScreen : ComponentActivity(){

    private val appViewModel: AppViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        installSplashScreen()
        //parameter of the function needs to be solved
        //MobilePaymentsSdk.initialize(getId(), this)
        setContent {
            //Displays current screen
            //App()- default *REMOVED*
            SweeteaApp(
                viewModel = appViewModel,
                cacheDir = cacheDir
            )
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
fun SweeteaApp(
    modifier:Modifier = Modifier,
    viewModel: AppViewModel,
    cacheDir: File
){
    LaunchedEffect(Unit){
        viewModel.updateInfo()
    }

    setSingletonImageLoaderFactory { context ->
        ImageLoader.Builder(context)
            .memoryCachePolicy(CachePolicy.ENABLED)
            .memoryCache {
                MemoryCache.Builder()
                    .maxSizePercent(context, 0.20)
                    .build()
            }
            .diskCachePolicy(CachePolicy.ENABLED)
            .networkCachePolicy(CachePolicy.ENABLED)
            .diskCache {
                DiskCache.Builder()
                    .directory(cacheDir.resolve("image_cache"))
                    .maxSizeBytes(5 * 1024 * 1024)
                    .build()
            }
            .logger(DebugLogger())
            .build()
    }

    AppTheme(
        dynamicColor = false
    ){

        val navController = rememberNavController()
        val navBackStackEntry by navController.currentBackStackEntryAsState()
        var currentRoute by remember{mutableStateOf("")}

        var selectedItem by remember { mutableIntStateOf(0) }
        var oldSelectedItem by remember { mutableIntStateOf(0) }

        val navPageRoute = navBackStackEntry?.id
        val navRoute = navBackStackEntry?.destination?.route
        var currentRouteObject by remember { mutableStateOf(destMap(Home.route)) }
        if(navRoute != null && navRoute != currentRoute){
            currentRoute = navRoute
            val curRouteObj = destMap( navRoute )
            if(curRouteObj != null && curRouteObj.index >= 0 ){
                currentRouteObject = curRouteObj
                oldSelectedItem = selectedItem
                selectedItem = curRouteObj.index
            }
        }

        val enterTransition = {
            when{
                selectedItem > oldSelectedItem ->
                    slideInHorizontally(initialOffsetX = { it }) +
                            fadeIn()
                selectedItem < oldSelectedItem ->
                    slideInHorizontally(initialOffsetX = { -it }) +
                            fadeIn()
                else ->
                    if(BaseDestinations.indexOf(currentRouteObject) == -1) {
                        slideInVertically(initialOffsetY = { it }) +
                                fadeIn()
                    } else {
                        slideInVertically(initialOffsetY = { -it }) +
                                fadeIn()
                    }
            }
        }

        val exitTransition = {
            when{
                selectedItem > oldSelectedItem ->
                    slideOutHorizontally(targetOffsetX = { -it }) +
                            fadeOut()
                selectedItem < oldSelectedItem ->
                    slideOutHorizontally(targetOffsetX = { it }) +
                            fadeOut()
                else ->
                    if(BaseDestinations.indexOf(currentRouteObject) == -1) {
                        slideOutVertically(targetOffsetY = { -it }) +
                                fadeOut()
                    } else{
                        slideOutVertically(targetOffsetY = { it }) +
                                fadeOut()
                    }
            }
        }

        //appViewModel.currentCategory = 3
        val locationList by viewModel.locationList.observeAsState(emptyList())
        println("LocationData $locationList")
        println("Current Categegory ${viewModel.currentCategory}")
        //val coroutineScope = rememberCoroutineScope()

        Scaffold(
            topBar = {
                if(currentRouteObject != null){
                    AppHeader(
                        modifier = modifier,
                        viewModel = viewModel,
                        headerText = currentRouteObject!!.topBarHeaderText,
                        hideLocation = currentRouteObject!!.hideLocation,
                        hideTopBarHeader = currentRouteObject!!.hideTopBarHeader,
                        enterTransition = enterTransition,
                        exitTransition = exitTransition
                    )
                } else {
                    AppHeader(
                        modifier = modifier,
                        viewModel = viewModel,
                        enterTransition = enterTransition,
                        exitTransition = exitTransition
                    )
                }
            },
            bottomBar = { AppBottomBar(
                navController = navController,
                selectedItem = selectedItem,
            ) }
        ) {
            padding ->
            SweetTeaNavHost(
                viewModel = viewModel,
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

