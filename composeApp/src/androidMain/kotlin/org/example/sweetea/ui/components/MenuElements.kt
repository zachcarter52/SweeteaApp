package org.example.sweetea.ui.components

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun MenuDisplayImage(
    imageHeight: Int,
    image: @Composable () -> Unit
){
    val imageRatio = 0.92f
    ElevatedCard(
        elevation = CardDefaults.cardElevation(20.dp),
        modifier = Modifier.height(imageHeight.dp)
            .width(imageHeight.dp * imageRatio)
    ) {
        image()
    }
}

@Composable
fun MenuItem(
    image: @Composable () -> Unit,
    itemName: String,
    imageHeight: Int,
    price: Float? = null,
    onClick: (() -> Unit)? = {},
){
    val isHeader = price == null
    val textPadding = if(isHeader) {
        48.dp
    } else {
        24.dp
    }
    val itemTextSize = if(isHeader){
        24.sp
    } else {
        TextUnit.Unspecified
    }

    Row(
        modifier = Modifier.fillMaxWidth()
            .clickable{onClick!!()},
    ) {
        Row(
            modifier = Modifier.padding(10.dp)
                .height(imageHeight.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            MenuDisplayImage(
                image = image,
                imageHeight = imageHeight
            )
            Column(
                modifier = Modifier.padding(textPadding, 0.dp)
            ) {
                Text(
                    text = itemName,
                    fontSize = itemTextSize,
                )
                if(!isHeader){
                    Text(
                        text = "$%.2f".format(price),
                        color = MaterialTheme.colorScheme.primary
                    )
                }
            }
        }
    }
}
