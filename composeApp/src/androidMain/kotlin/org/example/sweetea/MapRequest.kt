package org.example.sweetea


import okhttp3.OkHttpClient
import okhttp3.Request
import org.json.JSONObject
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import android.util.Log
import com.google.android.gms.maps.model.LatLng
import java.util.concurrent.TimeUnit


suspend fun findNearestStoreRoadDistance(
    userLocation: LatLng,
    storeLocations: List<MainScreen.StoreLocation>, // List of StoreLocation
    apiKey: String = "APIKEY"): Pair<MainScreen.StoreLocation, Double> { // Return the StoreLocation object with the distance
    val client = OkHttpClient.Builder()
        .connectTimeout(10, TimeUnit.SECONDS)
        .readTimeout(10, TimeUnit.SECONDS)
        .build()

    var nearestStore: MainScreen.StoreLocation? = null
    var shortestDistance = Double.MAX_VALUE

    for (store in storeLocations) {
        val url = "https://maps.googleapis.com/maps/api/distancematrix/json?" +
                "origins=${userLocation.latitude},${userLocation.longitude}" +
                "&destinations=${store.location.latitude},${store.location.longitude}" + // Accessing location inside StoreLocation
                "&key=$apiKey"

        val request = Request.Builder()
            .url(url)
            .build()

        try {
            val response = withContext(Dispatchers.IO) { client.newCall(request).execute() }

            val jsonResponse = response.body.string().let { JSONObject(it) }

            // Handle null or unexpected API response
            val distanceInMeters = jsonResponse
                .getJSONArray("rows")
                .getJSONObject(0)
                ?.getJSONArray("elements")
                ?.getJSONObject(0)
                ?.getJSONObject("distance")
                ?.getInt("value")

            if (distanceInMeters != null) {
                val distanceInMiles = distanceInMeters / 1609.34 // Convert meters to miles

                // Update if this store is closer
                if (distanceInMiles < shortestDistance) {
                    shortestDistance = distanceInMiles
                    nearestStore = store
                }
            }
        } catch (e: Exception) {
            Log.e("DistanceMatrix", "Error fetching distance: ${e.message}")
        }
    }

    // Ensure nearestStore is found before returning
    return if (nearestStore != null) {
        nearestStore to shortestDistance // Return both the store and the distance
    } else {
        Log.e("DistanceMatrix", "No stores found")
        throw Exception("No stores found")
    }
}
