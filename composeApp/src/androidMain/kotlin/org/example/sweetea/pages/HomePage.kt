package org.example.sweetea.pages

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import androidx.navigation.NavHostController
import org.example.sweetea.*
import org.example.sweetea.ui.components.BearPageTemplate
import org.jetbrains.compose.ui.tooling.preview.Preview

@Preview
@Composable
fun HomePage(modifier: Modifier=Modifier, navController: NavController) {
    val featuredItemsImage = painterResource(id = R.drawable.featured_items)
    var clicked by remember { mutableStateOf(false) }

    //Calculates top padding based on screen height.
    //Change the floating point value in calculatedPadding to change the image placement.
    val configuration = LocalConfiguration.current
    val screenHeight = configuration.screenHeightDp.dp
    val calculatedPadding = with(LocalDensity.current) { (screenHeight.toPx() * 0.1f).toDp() }

    BearPageTemplate(
        modifier = modifier,
    ) {
        ElevatedCard(
            elevation = CardDefaults.cardElevation(10.dp),
            modifier = Modifier.fillMaxWidth(0.90f)
                .height(300.dp),
            onClick = {
                navController.navigateSingleTopTo(
                    Menu.route
                )
            }
        ){
            Column(
                modifier = Modifier/*.border(
                    width = (1).dp,
                    color = MaterialTheme.colorScheme.outline,
                    shape = RoundedCornerShape(16.dp))*/,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(
                    text = "Featured Menu Items",
                    textAlign = TextAlign.Center
                )
                Box(
                    modifier = Modifier.height((300-24).dp)
                ){

                    Image(
                        painter = featuredItemsImage,
                        contentDescription = "Featured Items",
                        contentScale = ContentScale.FillHeight,
                        modifier = Modifier
                            .fillMaxWidth()
                            .wrapContentSize(Alignment.Center)
                        //.padding(top = calculatedPadding)
                    )
                }
            }
        }
        Column() {
            Button(
                elevation = ButtonDefaults.elevatedButtonElevation(),
                onClick = {
                    navController.navigateSingleTopTo(
                        Menu.route
                    )
                }
            ) {
                Text("Order Now")
            }
        }
    }

}

