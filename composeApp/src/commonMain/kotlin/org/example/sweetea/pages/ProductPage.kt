package org.example.sweetea.pages

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material.icons.filled.ShoppingCart
import androidx.compose.material3.Button
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Checkbox
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.Text
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.ElevatedCard
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.AbsoluteAlignment
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.util.fastRoundToInt
import androidx.navigation.NavHostController
import androidx.navigation.NavController
//import aws.smithy.kotlin.runtime.util.length
import coil3.compose.AsyncImage
import coil3.request.ImageRequest
import org.example.sweetea.CheckPage
import org.example.sweetea.Home
import org.example.sweetea.ProductCustomPage
import org.example.sweetea.SubMenu
import org.example.sweetea.dataclasses.retrieved.ChoiceData
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.ui.components.BearPageTemplate
import org.example.sweetea.dataclasses.local.AppViewModel
import kotlin.math.floor
import kotlin.math.pow

fun Float.toString(decimalPrecision: Int): String{
    val integerValue = floor(this).fastRoundToInt()

    if(decimalPrecision > 0){
        val remainder = this - integerValue
        val decimalAsInt: Int = (remainder * 10f.pow(decimalPrecision)).fastRoundToInt()
        return "$integerValue.$decimalAsInt"
    }
    return integerValue.toString()

}

@Composable
fun ProductPage(
    modifier: Modifier = Modifier,
    navHostController: NavHostController,
    appViewModel: AppViewModel
) {

    // workingItem : ProductData - a copy of what we clicked on
    // when a custom choice is selected, change the workingItem choice to match
    val workingItem: ProductData? = appViewModel.currentProduct?.clone()
    workingItem?.modifiers?.data?.forEach { modifierData ->
        if (modifierData.max_selected == 1) {
            // Drink will have the default "[0]" option saved for single modifier choices

            // WORKING ITEM NEEDS TO BE CLONED, IT STILL REFERNCES THE CURRENT PRODUCT
            modifierData.choices = mutableListOf(modifierData.choices[0])
        } else {
            // Drink will have no checkbox options selected
            modifierData.choices = mutableListOf()
        }
    }

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

            Row(
                horizontalArrangement = Arrangement.SpaceBetween,
                modifier = Modifier.fillMaxWidth().padding(16.dp, 0.dp, 16.dp, 0.dp),
            ) {
                Column {
                    Button(
                        onClick = {

                        },

                        ) {
                        Image(
                            imageVector = Icons.Default.Add,
                            contentDescription = "Add to Shopping Cart"
                        )
                    }
                }
                Column {
                    Button(
                        onClick =
                        {
                            navHostController.navigate(CheckPage.route)
                        },
                    ) {
                        Image(
                            imageVector = Icons.Default.ShoppingCart,
                            contentDescription = "Checkout Bag"
                        )
                    }
                }
            }

            //Display price
            val price = appViewModel.currentProduct!!.price.regular_high_with_modifiers
            Text(
                text = "\$${price.toString(2)}",
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
            ElevatedCard(
                modifier = Modifier.align(Alignment.CenterHorizontally),
                elevation = CardDefaults.elevatedCardElevation(10.dp)
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
            appViewModel.currentProduct?.modifiers?.data?.forEachIndexed { modidx, modifierData ->
                val dropExpand = remember {
                    mutableStateOf(false)
                }
                val dropDownText = remember {
                    mutableStateOf(modifierData.choices[0].name)
                }

                val position = remember {
                    mutableStateOf(0)
                }
                if (modifierData.max_selected == 1) { //if only one choice allowed use a dropdown
                    Column(
                        horizontalAlignment = AbsoluteAlignment.Left,
                    ) {
                        Text(
                            modifierData.name, //Display Modification name (Ice Level, Sugar Level, Milk, etc.)
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
                                modifierData.name, //Display Modification name (Size, Milk, etc.)
                                fontSize = 20.sp,
                                fontWeight = FontWeight.Bold,
                                fontFamily = FontFamily.SansSerif
                            )
                        }
                        DropdownMenu(
                            expanded = dropExpand.value,
                            onDismissRequest = {
                                dropExpand.value = false
                            }
                        ) {
                            modifierData.choices.forEachIndexed { choiceidx, choiceData ->
                                DropdownMenuItem(text = {
                                    if (choiceData.price != 0.0f) { //if the mod is an extra cost, display that cost
                                        Text(
                                            "${choiceData.name} - \$${
                                                choiceData.price.toString(
                                                    2
                                                )
                                            }",
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
                                        position.value = choiceidx

                                        // wokingItem updated
                                        workingItem?.modifiers?.data?.forEachIndexed { wiModIdx, wiMod ->
                                            if (wiModIdx == modidx) {
                                                wiMod.choices = mutableListOf(choiceData)
                                            }
                                        }
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
                                    onCheckedChange = { isChecked ->
                                        checked = isChecked
                                        workingItem?.modifiers?.data?.forEachIndexed { wiModIdx, wiMod ->
                                            if (wiModIdx == modidx) {
                                                if (isChecked) {
                                                    wiMod.choices.add(choiceData)
                                                } else {
                                                    wiMod.choices.remove(choiceData)
                                                }
                                            }
                                        }
                                    }
                                )
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
                                                "${choiceData.name} - \$${
                                                    choiceData.price.toString(
                                                        2
                                                    )
                                                }",
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
                    }
                }
            }
        }
    }
}