package org.example.sweetea.pages

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ElevatedButton
import androidx.compose.material3.Icon
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import org.example.sweetea.R

open class AccountPageCard(
    val text:String,
    val icon: Painter,
    val onClick: () -> Unit = {}
)

@Composable
fun AccountPage(modifier: Modifier=Modifier, navController: NavController){
    val uriHandler = LocalUriHandler.current
    val openLink = {link: String -> uriHandler.openUri(link)}
    val cards = listOf(
        AccountPageCard(
            text = "Email us",
            icon = painterResource(id = R.drawable.mail),
            onClick = {openLink("mailto:contact@sweetea.us")},
        ),
        AccountPageCard(
            text = "My Orders",
            icon = painterResource(id = R.drawable.orders_icon)
        ),
        AccountPageCard(
            text = "Join us",
            icon = painterResource(id = R.drawable.group_add),
            onClick = {openLink("https://forms.gle/7tyrVvi9SW17pZJc9")}
        ),
        AccountPageCard(
            text ="Instagram",
            icon = painterResource(id = R.drawable.instagram_glyph_white),
            onClick = {openLink("https://www.instagram.com/sweeteaus")},
        ),
    )

    BearPageTemplate(
        modifier = modifier) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceEvenly,
        ){
            Button(
                elevation = ButtonDefaults.elevatedButtonElevation(),
                onClick = {
                    navController.navigate("login"){
                    }
                }
            ) {
                Text("Log In")
            }
            ElevatedButton(
                onClick = {
                    navController.navigate("signup")
                }
            ) {
                Text("Sign Up")
            }
        }
        LazyVerticalGrid(
            columns = GridCells.Fixed(2),
        ) {
            items(cards.size){ index ->
                Box(
                    modifier = Modifier.padding(10.dp)
                        .fillMaxWidth()
                ) {
                    OutlinedButton(
                        modifier = Modifier.fillMaxWidth(),
                        onClick = cards[index].onClick,
                        shape = RoundedCornerShape(percent = 5)
                    ) {
                        Column(
                            modifier = Modifier.padding(20.dp).height(80.dp),
                            verticalArrangement = Arrangement.Center,
                            horizontalAlignment = Alignment.CenterHorizontally,
                        ) {
                            Icon(
                                modifier = Modifier.size(40.dp),
                                painter = cards[index].icon,
                                contentDescription = cards[index].text,
                            )
                            Text(
                                text = cards[index].text,
                                modifier = Modifier.padding(0.dp, 4.dp, 0.dp, 0.dp),
                                fontSize = 16.sp,
                            )
                        }
                    }
                }
            }
        }
        Button(
            elevation = ButtonDefaults.elevatedButtonElevation(),
            onClick = {}
        ) {
            Text(
                text = "Log Out"
            )
        }
    }
}