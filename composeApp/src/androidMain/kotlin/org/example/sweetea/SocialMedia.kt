package org.example.sweetea

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Card
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.Text
import androidx.compose.material.Icon
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Star
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.scale
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.res.painterResource

@OptIn(ExperimentalMaterialApi::class)
@Composable
fun SocialMedia(){
    val uriHandler = LocalUriHandler.current
    val padding = 16.dp
    val cardIcons = listOf(
        painterResource(id = R.drawable.instagram_glyph_white),
        painterResource(id = R.drawable.mail),
        painterResource(id = R.drawable.group_add)
        //, Icons.Filled.Favorite
    )
    val cardText = listOf("Check out our Instagram", "Shoot us an Email", "Work for us")
    val cardURL = listOf("https://www.instagram.com/sweeteaus", "mailto:contact@sweetea.us", "https://forms.gle/7tyrVvi9SW17pZJc9")
    Column(
        Modifier.fillMaxWidth(),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        cardIcons.forEachIndexed { index, icon ->
            Card(
                modifier = Modifier.fillMaxWidth(0.8f)
                    .padding(vertical = padding),
                onClick = {uriHandler.openUri(cardURL[index])}
            ) {
                Column(
                    Modifier.padding(padding),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Icon(
                        icon,
                        contentDescription = "",
                    )
                    CourierPrimeText(
                        text = cardText[index],
                        fontSize = 20.sp
                    )
                }
            }
        }
    }

}