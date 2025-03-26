package org.example.sweetea

import android.annotation.SuppressLint
import android.content.Intent
import android.content.pm.PackageManager
import android.location.Location
import android.net.Uri
import android.os.Bundle
import android.provider.Settings
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
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
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.ui.platform.LocalContext
import androidx.lifecycle.ViewModelProvider
import androidx.core.content.ContextCompat
import com.amplifyframework.AmplifyException
import com.amplifyframework.core.Amplify
import com.amplifyframework.auth.cognito.AWSCognitoAuthPlugin

import coil3.ImageLoader
import coil3.compose.setSingletonImageLoaderFactory
import coil3.disk.DiskCache
import coil3.disk.directory
import coil3.memory.MemoryCache
import coil3.request.CachePolicy
import coil3.util.DebugLogger
import com.google.android.gms.location.LocationServices
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.notifications.Notifications

import org.example.sweetea.ui.theme.AppTheme
import org.example.sweetea.ui.components.*
import org.example.sweetea.viewmodel.OrderViewModel
import java.io.File
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import android.Manifest
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.lifecycleScope
import com.google.android.gms.maps.model.LatLng
import kotlinx.coroutines.launch
import me.sujanpoudel.utils.paths.appCacheDirectory
import org.koin.android.ext.koin.androidContext


class MainScreen : ComponentActivity(){

    private val appViewModel: AppViewModel by viewModels()
    private val authViewModel: AuthViewModel by viewModels()
    private lateinit var orderViewModel: OrderViewModel
    private var userLocation: Location? = null

    private val appViewModel: AppViewModel by viewModels()
    private var nearestStore by mutableStateOf<StoreLocation?>(null)

    data class StoreLocation(
        val name: String,
        val location: LatLng
    )
    private val storeLocations = listOf(

        StoreLocation("Madison Ave ", LatLng( 38.664687,-121.243687)),
        StoreLocation("FootHills Blvd ", LatLng(38.753687,-121.311063)),
        StoreLocation("TEST ", LatLng(38.931576120528206, -121.08846144717354))
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        //create notification channel
        Notifications.createNotificationChannel(this)
        orderViewModel = ViewModelProvider(this)[OrderViewModel::class.java]
        //orderViewModel.listenForNewOrders() //start listening for orders

        installSplashScreen()

        setContent {
            var locationPermissionGranted by remember {
                mutableStateOf(areLocationPermissionsAlreadyGranted())
            }
            var shouldShowPermissionRationale by remember {
                mutableStateOf(
                    shouldShowRequestPermissionRationale(Manifest.permission.ACCESS_FINE_LOCATION) ||
                            shouldShowRequestPermissionRationale(Manifest.permission.ACCESS_COARSE_LOCATION)
                )
            }
            var shouldDirectUserToApplicationSettings by remember { mutableStateOf(false) }
            var currentPermissionStatus by remember {
                mutableStateOf(
                    decideCurrentPermissionStatus(
                        locationPermissionGranted,
                        shouldShowPermissionRationale
                    )
                )
            }

            val locationPermissions = arrayOf(
                Manifest.permission.ACCESS_FINE_LOCATION,
                Manifest.permission.ACCESS_COARSE_LOCATION
            )

            val locationPermissionLauncher = rememberLauncherForActivityResult(
                contract = ActivityResultContracts.RequestMultiplePermissions(),
                onResult = { permissions ->
                    locationPermissionGranted = permissions.all { it.value }

                    shouldShowPermissionRationale = false
                    for (permission in locationPermissions) {
                        if (shouldShowRequestPermissionRationale(permission)) {
                            shouldShowPermissionRationale = true
                            break
                        }
                    }

                    shouldDirectUserToApplicationSettings =
                        !shouldShowPermissionRationale && !locationPermissionGranted
                    currentPermissionStatus = decideCurrentPermissionStatus(
                        locationPermissionGranted,
                        shouldShowPermissionRationale
                    )

                    if (locationPermissionGranted) {
                        getUserLocation() // Fetch user location after permission is granted
                    }
                })

            // Automatically request location permission when the screen loads if not granted
            LaunchedEffect(Unit) {
                if (!locationPermissionGranted) {
                    locationPermissionLauncher.launch(locationPermissions)
                }
            }

            SweeteaApp()

            // Button to manually request location permission, should be removed
//            Box(
//                modifier = Modifier
//                    .fillMaxSize()  // Takes up the full screen size
//                    .padding(16.dp)
//            ) {
//                Button(
//                    onClick = { locationPermissionLauncher.launch(arrayOf(Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION)) },
//                    modifier = Modifier.align(Alignment.Center)  // Centers button, should be removed before pushing
//                ) {
//                    Text("Request Location Permission")
//                }
//            }
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

    private fun decideCurrentPermissionStatus(
        locationPermissionsGranted: Boolean,
        shouldShowPermissionRationale: Boolean
    ): String {
        return when {
            locationPermissionsGranted -> "Granted"
            shouldShowPermissionRationale -> "Rejected"
            else -> "Denied"
        }
    }

    private fun areLocationPermissionsAlreadyGranted(): Boolean {
        val locationPermissions = arrayOf(
            Manifest.permission.ACCESS_FINE_LOCATION,
            Manifest.permission.ACCESS_COARSE_LOCATION
        )

        for (permission in locationPermissions) {
            if (ContextCompat.checkSelfPermission(this, permission) != PackageManager.PERMISSION_GRANTED) {
                return false
            }
        }

        return true // If all permissions are granted, return true
    }

    private fun openApplicationSettings() {
        Intent(
            Settings.ACTION_APPLICATION_DETAILS_SETTINGS,
            Uri.fromParts("package", packageName, null)
        ).also {
            startActivity(it)
        }
    }

    @SuppressLint("MissingPermission") // Suppresses IDE warning

    private fun getUserLocation() {
        if (ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.ACCESS_FINE_LOCATION
            ) == PackageManager.PERMISSION_GRANTED ||
            ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.ACCESS_COARSE_LOCATION
            ) == PackageManager.PERMISSION_GRANTED
        ) {

            val fusedLocationClient = LocationServices.getFusedLocationProviderClient(this)

            try {
                fusedLocationClient.lastLocation.addOnSuccessListener { location: Location? ->
                    if (location != null) {
                        userLocation = location
                        Log.d("Location", "Lat: ${location.latitude}, Lng: ${location.longitude}")

                        // Convert user's Location to LatLng
                        val userLatLng = LatLng(location.latitude, location.longitude)

                        // Launch coroutine to call the suspend function
                        lifecycleScope.launch {
                            try {
                                val (nearest, distance) = findNearestStoreRoadDistance(userLatLng, storeLocations, "APIKEY")
                                nearestStore = nearest
                                // Handle the result here (e.g., log the nearest store and distance)
                                Log.d("Location", "Nearest store: ${nearest.name}${nearest.location.latitude}, ${nearest.location.longitude}")
                                Log.d("Location", "Distance: $distance miles")
                                // You can update your UI with this info
                            } catch (e: Exception) {
                                Log.e("Location", "Error finding nearest store: ${e.message}")
                            }
                        }

                    } else {
                        Log.e("Location", "Location unavailable")
                    }
                }.addOnFailureListener { e ->
                    Log.e("Location", "Failed to get location: ${e.message}")
                }
            } catch (e: SecurityException) {
                Log.e("Location", "SecurityException: ${e.message}")
            }
        } else {
            Log.e("Location", "Permissions not granted")
        }
    }






//    fun onPause() {
//        // Remove the callback reference to prevent memory leaks
//    }

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

//    fun onDestroy() {
//
//    }
}

