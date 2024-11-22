package org.example.sweetea.pages

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController

import org.example.sweetea.R

@Composable
fun DisplayImage(
    itemImage: Int,
    itemName: String,
    imageHeight: Float,
){
    val imageRatio = 0.92f
    ElevatedCard(
        elevation = CardDefaults.cardElevation(20.dp),
        modifier = Modifier.height(imageHeight.dp)
            .width(imageHeight.dp * imageRatio)
    ) {
        Image(
            painter = painterResource(id = itemImage),
            contentDescription = itemName,
            contentScale = ContentScale.FillHeight,
        )
    }
}

@Composable
fun MenuItem(
    itemImage: Int,
    itemName: String,
    imageHeight: Float,
    price: Float? = null,
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
            .clickable{},
    ) {
        Row(
            modifier = Modifier.padding(10.dp)
                .height(imageHeight.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            DisplayImage(
                itemImage = itemImage,
                itemName = itemName,
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

@Composable
fun FeaturedItem(
    itemImage: Int,
    itemName: String,
    imageHeight: Float,
    onClick: () -> Unit = {},
){
    val paddingRatio = 0.05f;
    val fontSize = imageHeight / 10
    Column(
        modifier = Modifier.clickable { onClick() }
            .height(imageHeight.dp * 11 / 8)
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier//.fillMaxWidth(0.2f)
                .width(imageHeight.dp * (1 + paddingRatio))
                .padding(imageHeight.dp * paddingRatio)
        ) {
            DisplayImage(
                itemImage = itemImage,
                itemName = itemName,
                imageHeight = imageHeight
            )
            Text(
                text = itemName,
                modifier = Modifier.padding(
                    top = fontSize.dp * 0.5f,
                ),
                fontSize = fontSize.sp,
                lineHeight = fontSize.sp * 1.1f,
                )
        }
    }
}

open class LabeledImage(
    val itemImage: Int,
    val itemName: String,
)

val featuredItems = listOf(
    LabeledImage(
        itemImage = R.drawable.flaming_tiger_pearl_milk,
        itemName= "Flaming Tiger Pearl Milk Tea"
    ),
    LabeledImage(
        itemImage = R.drawable.thai_milk_tea,
        itemName = "Thai Milk Tea"
    ),
    LabeledImage(
        itemImage = R.drawable.taro_milk_tea,
        itemName= "Taro Milk Tea"
    ),
    LabeledImage(
        itemImage = R.drawable.oreo_smoothie,
        itemName = "Oreo Smoothie"
    )
)

val subMenus = listOf(
    LabeledImage(
        itemImage = R.drawable.flaming_tiger_pearl_milk,
        itemName = "Signature"
    ),
    LabeledImage(
        itemImage = R.drawable.oreo_smoothie,
        itemName = "Smoothie"
    ),
    LabeledImage(
        itemImage = R.drawable.peach_bubbling,
        itemName = "Bubbling"
    ),
    LabeledImage(
        itemImage = R.drawable.peach_iced_tea,
        itemName = "Iced Tea"
    ),
    LabeledImage(
        itemImage = R.drawable.pearl_milk_tea,
        itemName = "Milk Tea"
    ),
    LabeledImage(
        itemImage = R.drawable.creamy_taro,
        itemName = "Creamy Series"
    ),
    LabeledImage(
        itemImage = R.drawable.strawberry_lemon_delight,
        itemName = "Delight"
    ),
    LabeledImage(
        itemImage = R.drawable.fruit_swiss_roll,
        itemName = "Desserts & Food"
    ),


)

@Composable
fun MenuPage(modifier: Modifier, navController: NavController){
    val configuration = LocalConfiguration.current
    val itemHeight = 120f
    Column(
        modifier = modifier.fillMaxWidth()
            .verticalScroll(rememberScrollState())
    ){
        HorizontalDivider()
        Row(
            modifier = Modifier.horizontalScroll(rememberScrollState()),
        ){
            featuredItems.forEach{
                FeaturedItem(
                    it.itemImage,
                    it.itemName,
                    itemHeight
                )
            }
        }
        HorizontalDivider()
        subMenus.forEachIndexed{
            index, subMenu ->
            MenuItem(
                itemImage = subMenu.itemImage,
                itemName = subMenu.itemName,
                imageHeight = itemHeight
            )
            if(index != subMenus.size - 1) HorizontalDivider()

        }
        /*
        HorizontalDivider()
        MenuItem(
            itemImage = R.drawable.flaming_tiger_pearl_milk,
            itemName = "Signature",
            imageHeight = itemHeight
        )
        HorizontalDivider()
        MenuItem(
            itemImage = R.drawable.strawberry_blossom,
            itemName = "Strawberry Blossom",
            price = 8.99f,
            imageHeight = itemHeight
        )
        HorizontalDivider()*/
    }
}
