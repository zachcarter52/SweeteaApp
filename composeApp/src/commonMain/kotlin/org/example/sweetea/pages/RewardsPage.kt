package org.example.sweetea.pages

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import moe.tlaster.precompose.navigation.Navigator
import org.example.sweetea.dataclasses.local.AppViewModel

import org.example.sweetea.ui.components.BearPageTemplate
import org.example.sweetea.ui.components.CustomCircularProgressIndicator

@Composable
fun RewardsPage(modifier: Modifier, navigator: Navigator, appViewModel: AppViewModel){
    var positionValue by remember {mutableIntStateOf(0)}
    val appStatus by appViewModel.appStatus.collectAsState()
    BearPageTemplate(
        modifier = modifier,
    ){
        ElevatedCard(
            elevation = CardDefaults.cardElevation(10.dp),
            modifier = Modifier.fillMaxWidth(0.90f)
                .clickable { positionValue++ },
        ) {
            Column(
                modifier = Modifier.fillMaxWidth()
                    .padding(0.dp, 0.dp, 0.dp, 40.dp),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(
                    "$1 / 1 Bear",
                    modifier = Modifier.padding(16.dp),
                    fontSize = 18.sp,
                    fontWeight = FontWeight.Bold,
                )
                CustomCircularProgressIndicator(
                    modifier = Modifier
                        .size(250.dp),
                    primaryColor = MaterialTheme.colorScheme.primary,
                    secondaryColor = MaterialTheme.colorScheme.secondary,
                    maxValue = appStatus.bearValue,
                    circleRadius = 230f,
                    positionValue = positionValue,
                )
            }
        }
        Text("Free drink at ${appStatus.bearValue} bears!",
            modifier = Modifier.padding(16.dp),
            fontSize = 18.sp,
            fontWeight = FontWeight.Bold,
        )
    }
}
