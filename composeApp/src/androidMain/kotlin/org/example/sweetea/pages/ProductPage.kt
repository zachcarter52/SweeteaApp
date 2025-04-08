package org.example.sweetea.pages

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Surface
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material.icons.filled.ShoppingCart
import androidx.compose.material3.Button
import androidx.compose.material3.Checkbox
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
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
import androidx.navigation.NavController
import coil3.compose.AsyncImage
import org.example.sweetea.CheckPage
import org.example.sweetea.ProductCustomPage
import org.example.sweetea.dataclasses.local.AppViewModel
import org.example.sweetea.dataclasses.retrieved.ChoiceData

data class K (val data: String) : Cloneable {

}

@Composable
fun ProductPage(
    modifier: Modifier = Modifier,
    navController: NavController,
    appViewModel: AppViewModel
) {
    // workingItem : ProductData - a copy of what we clicked on
    // when a custom choice is selected, change the workingItem choice to match
    /*
    val workingItem = ProductData(productData);// appViewModel.currentProduct?.clone()
    workingItem?.modifiers?.data?.forEach { modifierData ->
        if (modifierData.max_selected == 1) {
            // Drink will have the default "[0]" option saved for single modifier choices

            // WORKING ITEM NEEDS TO BE CLONED, IT STILL REFERNCES THE CURRENT PRODUCT
            //modifierData.choices = mutableListOf(modifierData.choices[0])
        } else {
            // Drink will have no checkbox options selected
            //modifierData.choices = mutableListOf()
        }
    }
    */

    println("DBG: Working Item: " + appViewModel.workingItem?.modifiers?.data + appViewModel.workingItem?.modifiers?.data?.size)
    println("DBG: Current Product: " + appViewModel.currentProduct?.modifiers?.data + appViewModel.currentProduct?.modifiers?.data?.size)

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
            DisplayName(navController, appViewModel)

            Row(
                horizontalArrangement = Arrangement.SpaceBetween,
                modifier = Modifier.fillMaxWidth().padding(16.dp, 0.dp, 16.dp, 0.dp),
            ) {
                Column {
                    Button(
                        onClick = {
                            appViewModel.shoppingCart.add(appViewModel.workingItem!!)
                            println("DBG: Shopping Cart" + appViewModel.shoppingCart)
                            resetWorkingItem(appViewModel)
                            navController.navigate(
                                ProductCustomPage.route
                            )
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
                                //appViewModel.shoppingCart.add(appViewModel.workingItem!!)
                                println("DBG: Shopping Cart" + appViewModel.shoppingCart)
                                navController.navigate(CheckPage.route)
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
            var price = DisplayPrice(navController, appViewModel)

            //Display product image
            DisplayProductImage(navController, appViewModel)

            //Display options
            appViewModel.currentProduct?.modifiers?.data?.forEachIndexed { modidx, modifierData ->
                if (modifierData.max_selected == 1) { //if only one choice allowed use a dropdown

                    //OneChoiceDropDown(navController, appViewModel, modifierData, choices)
                    val dropExpand = remember {
                        mutableStateOf(false)
                    }
                    val dropDownText = remember {
                        mutableStateOf(modifierData.choices[0].name)
                    }

                    val position = remember {
                        mutableIntStateOf(0)
                    }
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
                                dropDownText.value, //standard option in the dropdown box (100% ice, whole milk, etc)
                                //fontSize = 20.sp,
                                //fontWeight = FontWeight.Bold,
                                fontFamily = FontFamily.SansSerif
                            )
                            Image(
                                imageVector =  Icons.Default.ArrowDropDown,
                                contentDescription = "DropDown Arrow",
                            )
                        }
                        DropdownMenu(
                            expanded = dropExpand.value,
                            onDismissRequest = {
                                dropExpand.value = false
                            }
                        ) {
                            modifierData.choices.forEachIndexed { choiceidx, choiceData ->
                                DropdownMenuItem(
                                    text = {
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
                                        //println("working item before click: " +  userMods.toString() + " " + userMods.size)
                                        dropDownText.value = choiceData.name //once a user clicks on a mod, replace value in dropbox with chosen mod
                                        dropExpand.value = false
                                        position.value = choiceidx
                                        /*appViewModel.workingItem?.price?.high_with_modifiers =
                                            appViewModel.workingItem?.price?.high_with_modifiers?.plus(
                                                choiceData.price
                                            )!!*/

                                        //appViewModel.workingItem?.price?.high_with_modifiers = price.value!!

                                        println("DBG: Price" + appViewModel.workingItem?.price?.high_with_modifiers)

                                        appViewModel.workingItem?.modifiers?.data?.forEachIndexed { wiModIdx, wiMod ->
                                            if (wiModIdx == modidx) {
                                                wiMod.choices = mutableListOf(ChoiceData(choiceData))
                                            }
                                        }
                                    }
                                )
                            }
                        }
                    }
                } else { //if multiple options are allowed, show checkboxes
                    //MultipleChoiceCheckBox(navController, appViewModel, modifierData, choices)
                    Column {
                        Text(
                            modifierData.name, //Display name of modification type (Ex.: "Toppings", "Sugar Level", "Ice Level", "Milk")
                            fontSize = 20.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.SansSerif
                        )

                        val ptrToChoices = appViewModel.workingItem?.modifiers?.data?.get(modidx)?.choices
                        val maxChoicesChecked = 3
                        var checkedChoicesCounter by remember {
                            mutableIntStateOf(0)
                        }

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
                                        if(checkedChoicesCounter >= 3){
                                            checked = false
                                        }

                                        if(isChecked){
                                            ptrToChoices?.add(choiceData)
                                            checkedChoicesCounter++
                                        }

                                        if(!checked){
                                            ptrToChoices?.remove(choiceData)
                                            checkedChoicesCounter--
                                        }
                                    }
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


fun resetWorkingItem(
    appViewModel: AppViewModel,
) {
    appViewModel.currentProduct?.let { appViewModel.setProduct(it) }
}

/*@Composable
fun MultipleChoiceCheckBox(
    navController: NavController,
    appViewModel: AppViewModel,
    modifierData: ModifierData, choices: MutableList<String>) {
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

                        if(isChecked){
                            choices.add(choiceData.name)
                            println(choices + " " + choices.size)
                            //price.value += choiceData.price
                        }
                        /*
                        workingItem?.modifiers?.data?.forEachIndexed { wiModIdx, wiMod ->
                            if (wiModIdx == modidx) {
                                if (isChecked) {
                                    //wiMod.choices.add(choiceData)
                                } else {
                                    //wiMod.choices.remove(choiceData)
                                }
                            }
                        }

                         */
                    }
                )
                Text(
                    choiceData.name + " - " + "$%.2f".format(choiceData.price), //next to box show name and price of mod
                    fontFamily = FontFamily.SansSerif
                )
            }
        }
    }
}

@Composable
fun ColumnScope.OneChoiceDropDown(
    navController: NavController,
    appViewModel: AppViewModel,
    modifierData: ModifierData,
    choices: MutableList<String>
) {
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
                dropDownText.value, //standard option in the dropdown box (100% ice, whole milk, etc)
                //fontSize = 20.sp,
                //fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.SansSerif
            )
            Image(
                imageVector =  Icons.Default.ArrowDropDown,
                contentDescription = "DropDown Arrow",
            )
        }
        DropdownMenu(
            expanded = dropExpand.value,
            onDismissRequest = {
                dropExpand.value = false
            }
        ) {
            val choiceMade = "";
            modifierData.choices.forEachIndexed { choiceidx, choiceData ->
                DropdownMenuItem(
                    text = {
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
                        dropDownText.value = choiceData.name //once a user clicks on a mod, replace value in dropbox with chosen mod
                        dropExpand.value = false
                        position.value = choiceidx
                        choices.add(choiceData.name)
                        println(choices + " " + choices.size)
                        //price.value += choiceData.price
                        //appViewModel.setPrice(price.value)

                        /*
                        // wokingItem updated
                        workingItem?.modifiers?.data?.forEachIndexed { wiModIdx, wiMod ->
                            if (wiModIdx == modidx) {
                                //wiMod.choices = mutableListOf(choiceData)
                            }
                        }
                         */
                    }
                )
            }
        }
    }
}
 */

@Composable
fun ColumnScope.DisplayName(
    navController: NavController,
    appViewModel: AppViewModel
) {
    Text(
        appViewModel.currentProduct!!.name,
        style = MaterialTheme.typography.headlineMedium,
        modifier = Modifier
            .padding(0.dp, 0.dp, 0.dp, 20.dp)
            .align(Alignment.CenterHorizontally),
    )
}

@Composable
fun ColumnScope.DisplayPrice(
    navController: NavController,
    appViewModel: AppViewModel,
): MutableState<Float?> {
    val price =
        remember { mutableStateOf(appViewModel.workingItem?.price?.high_with_modifiers) }


    val itemSubtotal = appViewModel.workingItem?.modifiers?.data?.size?.let { MutableList(it){ 0.0f } }

    appViewModel.workingItem?.modifiers?.data?.forEachIndexed { index, modifierData ->
        modifierData.choices.forEach { choice ->
            if(modifierData.max_selected == 1){
                if (itemSubtotal != null) {
                    itemSubtotal[index] = choice.price
                }
            } else {
                if (itemSubtotal != null) {
                    itemSubtotal += choice.price
                }
            }

            if (itemSubtotal != null) {
                appViewModel.workingItem?.price?.high_with_modifiers = appViewModel.currentProduct?.price?.high_with_modifiers?.plus(
                    itemSubtotal.sum()
                )!!
            }


            price.value = appViewModel.workingItem?.price?.high_with_modifiers

            println("DBG: " + itemSubtotal.toString())


        }

    }
    Text(
        "$%.2f".format(price.value),
        fontSize = 20.sp,
        fontWeight = FontWeight.Bold,
        modifier = Modifier
            .padding(0.dp, 0.dp, 0.dp, 20.dp)
            .align(Alignment.CenterHorizontally),
        fontFamily = FontFamily.SansSerif
    )
    return price
}

@Composable
fun ColumnScope.DisplayProductImage(
    navController: NavController,
    appViewModel: AppViewModel,
){
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
}
