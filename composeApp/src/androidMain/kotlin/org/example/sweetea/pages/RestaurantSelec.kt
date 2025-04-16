package org.example.sweetea.pages

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.model.CameraPosition
import com.google.android.gms.maps.model.LatLng
import com.google.maps.android.compose.GoogleMap
import com.google.maps.android.compose.Marker
import com.google.maps.android.compose.rememberCameraPositionState
import com.google.maps.android.compose.rememberMarkerState
import org.example.sweetea.model.Restaurant

@Composable
fun RestaurantSelection(){
    val restaurants = listOf(
        Restaurant("Restaurant0", LatLng(37.4221, -122.0841)),
        Restaurant("Restaurant1", LatLng(37.4221, -122.0841)),
        Restaurant("Restaurant2", LatLng(37.4221, -122.0841))
    )

    var selectedLocation by remember { mutableStateOf<LatLng?>(null) }

    Column(modifier = Modifier.fillMaxSize()) {
        RestaurantMap(
            restaurants = restaurants,
            selectedLocation = selectedLocation
        )
        /*
        RestaurantList(restaurants) { restaurant ->
            selectedLocation = restaurant.location
        }
        */

    }

}

//Restaurant map:
@Composable
fun RestaurantMap(restaurants: List<Restaurant>, selectedLocation: LatLng?) {
    val cameraPositionState = rememberCameraPositionState {
        position = CameraPosition.fromLatLngZoom(restaurants[0].location, 12f)
    }

    GoogleMap(
        modifier = Modifier.fillMaxWidth().height(300.dp),
        cameraPositionState = cameraPositionState
    ) {
        restaurants.forEach { restaurant ->
            Marker(
                state = rememberMarkerState(position = restaurant.location),
                title = restaurant.name,
            )
        }
        selectedLocation?.let {
            LaunchedEffect(it) {
                cameraPositionState.animate(
                    CameraUpdateFactory.newLatLngZoom(it, 15f)
                )
            }
        }

    }
}
/*
//Restaurant list:
@Composable
fun RestaurantList(restaurants: List<Restaurant>, onRestaurantSelected: (Restaurant) -> Unit){
    LazyColumn (modifier = Modifier.fillMaxWidth().padding(8.dp)){
        items(restaurants) { restaurant ->
            RestaurantItem(restaurant, onRestaurantSelected)
        }
    }
}

@Composable
fun RestaurantItem(restaurant: Int, onRestaurantSelected: (Restaurant) -> Unit) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp)
            .clickable { onRestaurantSelected(restaurant) },
        elevation = 4.dp
    ) {
        Text(
            text = restaurant.name,
            fontSize = 18.sp,
            modifier = Modifier.padding(16.dp)
        )
    }
}
*/




