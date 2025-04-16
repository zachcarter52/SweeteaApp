package org.example.sweetea.ui.components

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp

@Composable
fun HomeCard(image: @Composable () -> Unit,
             imageHeader: String,
             buttonText: String,
             onClick:  () -> Unit) {
    ElevatedCard(
        elevation = CardDefaults.cardElevation(10.dp),
        modifier = Modifier.fillMaxWidth(0.90f)
            .height(300.dp),
        onClick =  onClick
    ){
        Column(
            modifier = Modifier.fillMaxWidth()/*.border(
                    width = (1).dp,
                    color = MaterialTheme.colorScheme.outline,
                    shape = RoundedCornerShape(16.dp))*/,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = imageHeader,
                textAlign = TextAlign.Center
            )
            Box(
                modifier = Modifier.height((300-24).dp)
            ){
                image()
            }
        }
    }
    Column() {
        Button(
            elevation = ButtonDefaults.elevatedButtonElevation(),
            onClick = onClick
        ) {
            Text(buttonText)
        }
    }
}