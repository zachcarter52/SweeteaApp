package org.example.sweetea.pages

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
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
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import moe.tlaster.precompose.navigation.Navigator
import org.example.sweetea.*
import org.example.sweetea.ui.components.BearPageTemplate
import org.jetbrains.compose.resources.painterResource
import sweetea.composeapp.generated.resources.Res
import sweetea.composeapp.generated.resources.group_add
import sweetea.composeapp.generated.resources.instagram_glyph_white
import sweetea.composeapp.generated.resources.mail
import sweetea.composeapp.generated.resources.orders_icon
import kotlin.math.ceil

open class AccountPageCard(
    val text:String,
    val icon: Painter,
    val onClick: () -> Unit = {}
)

@Composable
fun AccountPage(modifier: Modifier=Modifier, navigator: Navigator){
    val uriHandler = LocalUriHandler.current
    val openLink = {link: String -> uriHandler.openUri(link)}
    val cards = listOf(
        AccountPageCard(
            text = "Email us",
            icon = painterResource(Res.drawable.mail),
            onClick = {openLink("mailto:contact@sweetea.us")},
        ),
        AccountPageCard(
            text = "My Orders",
            icon = painterResource(Res.drawable.orders_icon)
        ),
        AccountPageCard(
            text = "Join us",
            icon = painterResource(Res.drawable.group_add),
            onClick = {openLink("https://forms.gle/7tyrVvi9SW17pZJc9")}
        ),
        AccountPageCard(
            text ="Instagram",
            icon = painterResource(Res.drawable.instagram_glyph_white),
            onClick = {openLink("https://www.instagram.com/sweeteaus")},
        ),
    )

    BearPageTemplate(
        modifier = modifier,
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceEvenly,
        ){
            Button(
                elevation = ButtonDefaults.elevatedButtonElevation(),
                onClick = {
                    navigator.navigate(Login.route)
                }
            ) {
                Text("Log In")
            }
            ElevatedButton(
                onClick = {
                    navigator.navigate(SignUp.route)
                }
            ) {
                Text("Sign Up")
            }
        }
        val columnCount = 2
        //card height calculation
        val boxPadding = 10
        val buttonVerticalPadding = 8
        val columnVerticalPadding = 20
        val columnHeight = 80
        //Padding values apply to top and bottom, so double them
        val cardHeight =  2 * (boxPadding + buttonVerticalPadding + columnVerticalPadding) + columnHeight
        val gridItems = listOf(
            //Add elements to the grid here
            cards,
        ).flatten()
        val gridHeight = (cardHeight) * ceil(gridItems.size.toFloat() / columnCount)
        LazyVerticalGrid(
            modifier = Modifier.height(gridHeight.dp),
            userScrollEnabled = false,
            columns = GridCells.Fixed(columnCount),
        ) {
            items(cards.size){ index ->
                Box(
                    modifier = Modifier.padding(boxPadding.dp)
                        .fillMaxWidth()
                ) {
                    OutlinedButton(
                        modifier = Modifier.fillMaxWidth(),
                        onClick = cards[index].onClick,
                        //horizontal is from ButtonDefaults.buttonHorizontalPadding (private val)
                        contentPadding = PaddingValues(horizontal = 24.dp, vertical = buttonVerticalPadding.dp),
                        shape = RoundedCornerShape(percent = 5)
                    ) {
                        Column(
                            modifier = Modifier.padding(vertical = columnVerticalPadding.dp)
                                .height(columnHeight.dp),
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
                                modifier = Modifier.padding(top = 4.dp),
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