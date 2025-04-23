package org.example.sweetea.ui.components

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.dataclasses.retrieved.ProductData

@Composable
fun ModifiedProductItem(
    cartItem: ProductData,
    imageHeight: Int = 120,
    contentScale: ContentScale = ContentScale.FillHeight,
    textPadding: Dp = 24.dp,
    itemTextSize: TextUnit = 24.sp,
    quantity: Int = 1,
    onClick: () -> Unit = {},
    buttons: @Composable () -> Unit
){
    Row(
        modifier = Modifier.fillMaxWidth().clickable{onClick()},
    ) {
        Row(
            modifier = Modifier.padding(10.dp),
            //.height(imageHeight.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            val url = "${cartItem.images.data[0].url}?height=${3 * imageHeight}"
            MenuDisplayImage(
                imageHeight = imageHeight,
                url = url,
                contentDescription = cartItem.name,
                contentScale = contentScale,
            )
            Column(
                modifier = Modifier.padding(textPadding, 0.dp)
            ) {
                Text(
                    text = cartItem.name,
                    fontSize = itemTextSize,
                )
                cartItem.modifiers.data.forEach { modifier ->
                    modifier.choices.forEach { choice ->
                        if(choice.price > 0) {
                            Text(
                                text = choice.name + " + " + "$%.2f".format(choice.price),
                                fontSize = 16.sp
                            )
                        } else {
                            Text(
                                text = choice.name,
                                fontSize = 16.sp
                            )
                        }
                    }
                }
                Row(
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Row() {
                        Text(
                            text = "$%.2f".format(cartItem.price.high_with_modifiers)
                             + if(quantity > 1) " (${"$%.2f".format(cartItem.price.high_with_modifiers * quantity)})" else "",
                            color = MaterialTheme.colorScheme.primary
                        )
                    }
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.End
                    ) {
                        buttons()
                    }
                }
            }
        }
    }
    HorizontalDivider()
}