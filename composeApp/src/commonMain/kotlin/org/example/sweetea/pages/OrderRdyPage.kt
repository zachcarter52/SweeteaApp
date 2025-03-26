package org.example.sweetea.pages

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Card
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import org.example.sweetea.model.Items

@Composable
fun OrderRdyPage(number:String, modifier: Modifier, navController: NavController){
    Column(
        verticalArrangement =  Arrangement.Center,
        modifier = modifier.padding(8.dp)
    ){
        Text(
            text = number,
            fontsize = 24.sp,
            lineheight = 28.sp,
            modifier = Modifier.padding(bottom = 8.dp)
                .align(alignment = Alignment.Start)
        )
        Text(
            text = "Your Order is Now Ready For Pick-Up!",
            fontsize = 32.sp,
            lineheight = 36.sp,
        )


    }

}

/*remember to call ItemsList() function in the MainScreen.kt file
* usage: ItemsList(itemList = Datasource().loadItems(), modifier = Modifier)
*/

@Composable
fun ItemsList(itemsList: List<Items>, modifier: Modifier) {
    LazyColumn(modifier = modifier) {
        items(itemsList) { item ->
            ItemsCard(
                items = item,
                modifier = Modifier.padding(8.dp)
            )
        }
    }
}

@Composable
fun ItemsCard(items: Items, modifier: Modifier) {
    Card(modifier = modifier) {
         Column {
             Image(
                 painter = painterResource(items.imageResourceId),
                 contentDescription = stringResource(items.stringResourceId),
                 modifier = Modifier
                     .fillMaxWidth()
                     .height(194.dp),
                 contentScale = ContentScale.Crop
             )
             Text(
                 text = LocalContext.current.getString(items.stringResourceId),
                 modifier = Modifier.padding(16.dp),
                 style = MaterialTheme.typography.headlineSmall
             )
         }
    }
}



