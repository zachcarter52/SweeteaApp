package org.example.sweetea

import android.location.Location
import androidx.test.core.app.ActivityScenario
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.google.android.gms.location.LocationServices
import org.junit.Assert.*
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class GetUserLocationTest {

    @Test
    fun testGetUserLocationReturnsLocation() {
        val scenario = ActivityScenario.launch(MainScreen::class.java)

        scenario.onActivity { activity ->
            val fusedLocationClient = LocationServices.getFusedLocationProviderClient(activity)

            val task = fusedLocationClient.lastLocation
            task.addOnSuccessListener { location: Location? ->
                if (location != null) {
                    assertNotNull("Location should not be null", location)
                } else {
                    assertNull("Location is null as expected", location)
                }
            }.addOnFailureListener {
                fail("Location request failed: ${it.message}")
            }

            Thread.sleep(2000)
        }
    }
}
