package org.example.sweetea

import android.Manifest
import android.content.pm.PackageManager
import androidx.core.content.ContextCompat
import androidx.test.core.app.ActivityScenario
import androidx.test.ext.junit.runners.AndroidJUnit4
import org.junit.Assert.assertTrue
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class LocationPermissionTest {

    @Test
    fun testLocationPermissionsGranted() {
        val scenario = ActivityScenario.launch(MainScreen::class.java)
        scenario.onActivity { activity ->
            val fineLocationPermission = ContextCompat.checkSelfPermission(
                activity,
                Manifest.permission.ACCESS_FINE_LOCATION
            )
            val coarseLocationPermission = ContextCompat.checkSelfPermission(
                activity,
                Manifest.permission.ACCESS_COARSE_LOCATION
            )

            assertTrue(
                fineLocationPermission == PackageManager.PERMISSION_GRANTED ||
                        coarseLocationPermission == PackageManager.PERMISSION_GRANTED
            )
        }
    }

}
