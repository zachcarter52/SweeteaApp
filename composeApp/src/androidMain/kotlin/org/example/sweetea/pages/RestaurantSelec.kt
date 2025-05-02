package org.example.sweetea.pages

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.dataclasses.local.Stores

@Composable
fun StoreSelectionPage(
    modifier: Modifier = Modifier,  // Add the modifier parameter here
    navController: NavController,
    appViewModel: AppViewModel
) {
    val stores = listOf(
        Stores("Auburn", "1850 Grass Valley Hwy"),
        Stores("Fair Oaks", "8505 Madison Ave"),
        Stores("Roseville", "4010 Foothills Blvd")
    )

    Column(modifier = modifier.fillMaxSize()) {
        stores.forEach { store ->
            StoreCard(store = store) {
                appViewModel.updateSelectedStore(store)
                navController.navigate("menu")
            }
        }
    }
}
@Composable
fun StoreCard(store: Stores, onClick: () -> Unit) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(12.dp)
            .clickable { onClick() },
        elevation = CardDefaults.cardElevation(6.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(text = store.name)
            Text(text = store.address)
        }
    }
}




