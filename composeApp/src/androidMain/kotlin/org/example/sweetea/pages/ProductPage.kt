package org.example.sweetea.pages

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Card
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material.Checkbox
import androidx.compose.material.DropdownMenu
import androidx.compose.material.DropdownMenuItem
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.AbsoluteAlignment
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import coil3.compose.AsyncImage
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.ui.components.BearPageTemplate

@Composable
fun ProductPage(
    modifier: Modifier = Modifier,
    navController: NavController,
    appViewModel: AppViewModel
) {
    Column(
        modifier = modifier.fillMaxWidth()
            .verticalScroll(rememberScrollState()),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Column(
            modifier = modifier.fillMaxWidth(.9f),
            horizontalAlignment = Alignment.Start
        ) {
            //Display Product name
            Text(
                appViewModel.currentProduct!!.name,
                style = MaterialTheme.typography.headlineMedium,
                modifier = Modifier
                    .padding(0.dp, 0.dp, 0.dp, 20.dp)
                    .align(Alignment.CenterHorizontally),
            )

            //Display price
            val price = appViewModel.currentProduct!!.price.regular_high_with_modifiers
            Text(
                "$%.2f".format(price),
                fontSize = 20.sp,
                style = MaterialTheme.typography.bodyLarge,
                modifier = Modifier
                    .padding(0.dp, 0.dp, 0.dp, 20.dp)
                    .align(Alignment.CenterHorizontally),
            )

            //Display product image
            val itemHeight = 350
            val url = "${appViewModel.currentProduct!!.images.data[0].url}?height=${3 * itemHeight}"
            HorizontalDivider(
                modifier = Modifier
                    .padding(0.dp, 0.dp, 0.dp, 20.dp)
                    .align(Alignment.CenterHorizontally),
            )
            Surface(
                modifier = Modifier.align(Alignment.CenterHorizontally),
                shape = RoundedCornerShape(12.dp),
                elevation = 10.dp
            ) {
                AsyncImage(
                    model = url,
                    contentDescription = appViewModel.currentProduct!!.name,
                    modifier = Modifier.height(itemHeight.dp)
                        .width(itemHeight.dp),
                    contentScale = ContentScale.FillHeight,
                )
            }
            HorizontalDivider(
                modifier = Modifier
                    .padding(0.dp, 20.dp, 0.dp, 20.dp)
            )

            //Display options
            appViewModel.currentProduct?.modifiers?.data?.forEach { modifierData ->
                if (modifierData.max_selected == 1) { //if only one choice allowed use a dropdown
                    val dropExpand = remember {
                        mutableStateOf(false)
                    }
                    val dropDownText = remember {
                        mutableStateOf(modifierData.choices[0].name)
                    }

                    val position = remember {
                        mutableStateOf(0)
                    }
                    Column(
                        horizontalAlignment = AbsoluteAlignment.Left,
                    ) {
                        Text(
                            modifierData.name, //Display Modification name (Size, Milk, etc.)
                            fontSize = 20.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.SansSerif
                        )
                    }

                    Box(
                        modifier = Modifier
                            .align(Alignment.CenterHorizontally)
                    ) {
                        Row(
                            modifier = Modifier.clickable {
                                dropExpand.value = true
                            }
                                .padding(0.dp, 20.dp, 0.dp, 20.dp),
                        ) {

                            Text(
                                dropDownText.value, //Display standard option in the dropdown box (100% ice, whole milk, etc)
                                fontFamily = FontFamily.SansSerif
                            )
                            Image(
                                imageVector = Icons.Default.ArrowDropDown,
                                contentDescription = "DropDown Arrow",
                            )
                        }
                        DropdownMenu(
                            expanded = dropExpand.value,
                            onDismissRequest = {
                                dropExpand.value = false
                            }
                        ) {
                            modifierData.choices.forEachIndexed { index, choiceData ->
                                androidx.compose.material3.DropdownMenuItem(text = {
                                    if (choiceData.price != 0.0f) { //if the mod is an extra cost, display that cost
                                        Text(
                                            choiceData.name + " - " + "$%.2f".format(choiceData.price),
                                            fontFamily = FontFamily.SansSerif
                                        )
                                    } else { //else just show the name
                                        Text(
                                            choiceData.name,
                                            fontFamily = FontFamily.SansSerif
                                        )
                                    }
                                },
                                    onClick = {
                                        dropDownText.value =
                                            choiceData.name //once a user clicks on a mod, replace value in dropbox with chosen mod
                                        dropExpand.value = false
                                        position.value = index
                                    })
                            }
                        }
                    }
                } else { //if multiple options are allowed, show checkboxes
                    Column {
                        Text(
                            modifierData.name, //Display name of modification type (Ex.: "Toppings", "Sugar Level", "Ice Level", "Milk")
                            fontSize = 20.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.SansSerif
                        )
                        modifierData.choices.forEachIndexed { index, choiceData ->
                            Row(
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                var checked by remember {
                                    mutableStateOf(false)
                                }

                                Checkbox(
                                    checked = checked,
                                    onCheckedChange = { checked = it }
                                )
                                Text(
                                    choiceData.name + " - " + "$%.2f".format(choiceData.price), //next to box show name and price of mod
                                    fontFamily = FontFamily.SansSerif
                                )
                            }
                        }
                    }
                }
            }
        }
    }
}