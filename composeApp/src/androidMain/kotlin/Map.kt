//package org.example.sweetea
//
//import android.Manifest
//import android.content.Context
//import android.content.pm.PackageManager
//import android.util.Log
//import androidx.activity.ComponentActivity
//import androidx.compose.foundation.layout.*
//import androidx.compose.runtime.*
//import androidx.compose.ui.Modifier
//import androidx.compose.ui.platform.LocalContext
//import com.google.android.gms.maps.model.LatLng
//import com.google.maps.android.compose.*
//import com.google.android.gms.maps.model.CameraPosition
//import com.google.android.gms.location.FusedLocationProviderClient
//import com.google.android.gms.location.LocationServices
//import androidx.core.app.ActivityCompat
//import androidx.core.content.ContextCompat
//
//@Composable
//fun MapScreen(modifier: Modifier = Modifier) {
//    var userLocation by remember { mutableStateOf(LatLng(37.7749, -122.4194)) } // Default to SF
//    var permissionGranted by remember { mutableStateOf(false) }
//
//    val cameraPositionState = rememberCameraPositionState {
//        position = CameraPosition.fromLatLngZoom(userLocation, 10f)
//    }
//
//    val context = LocalContext.current
//    val activity = context as ComponentActivity
//
//
//    val storeLocations = listOf(
//        LatLng(38.6666760861268, -121.24387092810233),
//        LatLng(38.757003316581, -121.31081027893458),
//        LatLng(38.931576120528206, -121.08846144717354)
//    )
//
//    var nearestStore by remember { mutableStateOf<LatLng?>(null) }
//    var nearestDistance by remember { mutableStateOf(0.0) }
//
//
//    LaunchedEffect(Unit) {
//        permissionGranted = ContextCompat.checkSelfPermission(
//            context,
//            Manifest.permission.ACCESS_FINE_LOCATION
//        ) == PackageManager.PERMISSION_GRANTED
//
//        if (permissionGranted) {
//            Log.d("PermissionCheck", "Location permission is already granted.")
//        } else {
//            Log.d("PermissionCheck", "Location permission is not granted. Requesting permission.")
//            requestLocationPermission(activity)
//        }
//    }
//
//
//    LaunchedEffect(permissionGranted) {
//        if (permissionGranted) {
//            Log.d("LocationFetch", "Permission granted. Attempting to fetch user location.")
//            getUserLocation(context) { location ->
//                userLocation = location
//                Log.d("LocationFetch", "User Location: $location")
//                cameraPositionState.position = CameraPosition.fromLatLngZoom(userLocation, 10f)
//
//
//                val (store, distance) = findNearestStore(userLocation, storeLocations)
//                nearestStore = store
//                nearestDistance = distance
//                Log.d("NearestStore", "Nearest Store: $store at $distance miles away.")
//            }
//        } else {
//            Log.d("LocationFetch", "Cannot fetch user location. Permission is not granted.")
//        }
//    }
//
//    Box(modifier = modifier.fillMaxSize()) {
//        GoogleMap(
//            modifier = Modifier.fillMaxSize(),
//            cameraPositionState = cameraPositionState
//        ) {
//            Marker(
//                state = MarkerState(position = userLocation),
//                title = "Your Location"
//            )
//
//            nearestStore?.let { store ->
//                Marker(
//                    state = MarkerState(position = store),
//                    title = "Nearest Store",
//                    snippet = "Distance: %.2f miles".format(nearestDistance)
//                )
//            }
//        }
//    }
//}
//
//fun requestLocationPermission(activity: ComponentActivity) {
//    val permission = Manifest.permission.ACCESS_FINE_LOCATION
//    if (ContextCompat.checkSelfPermission(activity, permission) != PackageManager.PERMISSION_GRANTED) {
//        Log.d("PermissionCheck", "Requesting location permission from the user.")
//        ActivityCompat.requestPermissions(
//            activity,
//            arrayOf(permission),
//            1
//        )
//    }
//}
//
//fun getUserLocation(context: Context, onLocationReceived: (LatLng) -> Unit) {
//    val fusedLocationClient: FusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(context)
//
//    if (ContextCompat.checkSelfPermission(context, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED) {
//        Log.d("LocationFetch", "Fetching user location from FusedLocationProvider.")
//        fusedLocationClient.lastLocation.addOnSuccessListener { location ->
//            location?.let {
//                val userLatLng = LatLng(it.latitude, it.longitude)
//                Log.d("LocationFetch", "Fetched Location: Latitude = ${it.latitude}, Longitude = ${it.longitude}")
//                onLocationReceived(userLatLng)
//            } ?: run {
//                Log.d("LocationFetch", "Location is null. Falling back to default.")
//                onLocationReceived(LatLng(37.7749, -122.4194))
//            }
//        }.addOnFailureListener { exception ->
//            Log.d("LocationFetch", "Failed to fetch location: ${exception.message}")
//        }
//    } else {
//        Log.d("LocationFetch", "Permission not granted. Cannot fetch user location.")
//    }
//}
//
//fun findNearestStore(userLocation: LatLng, storeLocations: List<LatLng>): Pair<LatLng, Double> {
//    var nearestStore: LatLng? = null
//    var shortestDistance = Double.MAX_VALUE
//
//    for (store in storeLocations) {
//        val distance = calculateDistance(
//            userLocation.latitude,
//            userLocation.longitude,
//            store.latitude,
//            store.longitude
//        )
//        if (distance < shortestDistance) {
//            nearestStore = store
//            shortestDistance = distance
//        }
//    }
//
//    return nearestStore!! to shortestDistance
//}
//
//fun calculateDistance(lat1: Double, lon1: Double, lat2: Double, lon2: Double): Double {
//    val radius = 3958.8
//    val dLat = Math.toRadians(lat2 - lat1)
//    val dLon = Math.toRadians(lon2 - lon1)
//    val a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//            Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2)) *
//            Math.sin(dLon / 2) * Math.sin(dLon / 2)
//    val c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
//    return radius * c
//}
