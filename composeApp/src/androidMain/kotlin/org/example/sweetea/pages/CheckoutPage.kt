package org.example.sweetea.pages

import androidx.compose.foundation.layout.Column
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavController
import org.example.sweetea.dataclasses.local.AppViewModel

@Composable
fun CheckoutPage(
    modifier: Modifier = Modifier,
    navController: NavController,
    appViewModel: AppViewModel
){
    Column {
        Text(
        "Order"
    )
        HorizontalDivider()
        HorizontalDivider()


    }
}