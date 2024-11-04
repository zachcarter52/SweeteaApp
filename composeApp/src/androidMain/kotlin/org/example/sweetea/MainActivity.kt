package org.example.sweetea


import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent



class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            //Displays current screen
            //App()- default *REMOVED*
            MainScreen()
        }
    }
}

