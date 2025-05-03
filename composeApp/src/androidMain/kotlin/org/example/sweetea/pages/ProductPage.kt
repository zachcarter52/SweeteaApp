package org.example.sweetea.pages

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Surface
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material.icons.filled.KeyboardArrowDown
import androidx.compose.material.icons.filled.KeyboardArrowUp
import androidx.compose.material.icons.filled.ShoppingCart
import androidx.compose.material3.Button
import androidx.compose.material3.Checkbox
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.ElevatedButton
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.Icon
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
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.LinkAnnotation
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.withLink
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import coil3.compose.AsyncImage
import org.example.sweetea.ProductCustomPage
import org.example.sweetea.AuthViewModel
import org.example.sweetea.viewmodel.AppViewModel
import org.example.sweetea.dataclasses.retrieved.ChoiceData

@Composable
fun ProductPage(
    modifier: Modifier = Modifier,
    navController: NavController,
    appViewModel: AppViewModel,
    authViewModel: AuthViewModel
) {
    println("DBG: Working Item: " + appViewModel.workingItem?.modifiers?.data + appViewModel.workingItem?.modifiers?.data?.size)
    println("DBG: Current Product: " + appViewModel.currentProduct?.modifiers?.data + appViewModel.currentProduct?.modifiers?.data?.size)

    Column(
        modifier = modifier.fillMaxWidth()
            .verticalScroll(rememberScrollState()).padding(0.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Column(
            modifier = Modifier.fillMaxWidth(.9f),
            horizontalAlignment = Alignment.Start
        ) {
            //Display Product name
            DisplayName(navController, appViewModel)

            /*
            Row(
                horizontalArrangement = Arrangement.SpaceBetween,
                modifier = Modifier.fillMaxWidth().padding(16.dp, 0.dp, 16.dp, 0.dp),
            ) {
                Column {
                    Button(
                        modifier = Modifier.testTag("add"),
                        onClick = {
                            appViewModel.shoppingCart.add(appViewModel.workingItem!!)
                            appViewModel.shoppingCartQuantities.add(1)
                            println("DBG: Shopping Cart" + appViewModel.shoppingCart)
                            resetWorkingItem(appViewModel)
                            navController.popBackStack()
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
                        modifier = Modifier.testTag("cart"),
                        onClick =
                            {
                                //appViewModel.shoppingCart.add(appViewModel.workingItem!!)
                                appViewModel.shoppingCart.add(appViewModel.workingItem!!)
                                appViewModel.shoppingCartQuantities.add(1)
                                println("DBG: Shopping Cart" + appViewModel.shoppingCart)
                                resetWorkingItem(appViewModel)
                                navController.navigate(Checkout.route)
                            },
                    ) {
                        Image(
                            imageVector = Icons.Default.ShoppingCart,
                            contentDescription = "Checkout Bag"
                        )
                    }
                }
            }
             */

            //Display price
            var quantity by remember{mutableIntStateOf(1)}
            var price = displayPrice(navController, appViewModel, quantity)

            //Display product image
            val itemHeight = 350
            val url = "${appViewModel.currentProduct!!.images.data[0].url}?height=${3 * itemHeight}"
            /*
            HorizontalDivider(
                modifier = Modifier
                    .padding(0.dp, 0.dp, 0.dp, 20.dp)
                    .align(Alignment.CenterHorizontally),
            )
             */
            ElevatedCard(
                modifier = Modifier.align(Alignment.CenterHorizontally)
            ) {
                Box{
                    AsyncImage(
                        model = url,
                        contentDescription = appViewModel.currentProduct!!.name,
                        modifier = Modifier.height(itemHeight.dp)
                            .width(itemHeight.dp),
                        contentScale = ContentScale.FillHeight,
                    )
                    ElevatedButton(
                        modifier = Modifier.align(Alignment.BottomEnd)
                            .padding(0.dp, 0.dp, 5.dp, 0.dp),
                        //border = BorderStroke(2.dp, MaterialTheme.colorScheme.outline),
                        //elevation = ButtonDefaults.buttonElevation(20.dp),
                        onClick = {
                            val indexInCart = appViewModel.shoppingCart.indexOf(appViewModel.workingItem!!)
                            if(indexInCart == -1) {
                                appViewModel.shoppingCart.add(appViewModel.workingItem!!)
                                appViewModel.shoppingCartQuantities.add(quantity)
                                println("DBG: Shopping Cart" + appViewModel.shoppingCart)
                            } else {
                                appViewModel.shoppingCartQuantities[indexInCart] += quantity
                            }
                            resetWorkingItem(appViewModel)
                            quantity  = 1

                            //navController.popBackStack()
                        },
                    ) {
                        Text("Add",
                            modifier = Modifier
                            .testTag("add")
                        )
                    }
                }
            }

            Row(
                Modifier.padding(20.dp)
            ){
                Button(
                    modifier = Modifier.size(24.dp),
                    onClick = {
                        if(quantity > 1) quantity--
                    },
                    contentPadding = PaddingValues(2.dp)
                ) {
                    Icon(
                        imageVector = Icons.Filled.KeyboardArrowDown,
                        contentDescription = "Decrease Quantity",

                        modifier = Modifier.size(18.dp)
                    )
                }
                Text(
                    modifier = Modifier.padding(4.dp, 0.dp),
                    text = quantity.toString()
                )
                Button(
                    modifier = Modifier.size(24.dp),
                    onClick = {
                        quantity++
                    },
                    contentPadding = PaddingValues(2.dp)
                ) {
                    Icon(
                        imageVector = Icons.Filled.KeyboardArrowUp,
                        contentDescription = "Increase Quantity",
                        modifier = Modifier.size(18.dp)
                    )
                }
            }

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
                    appViewModel.workingItem?.modifiers?.data?.get(modidx)?.choices?.get(0)?.let {
                        dropDownText.value = it.name
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
                                .padding(0.dp, 20.dp, 0.dp, 20.dp)
                                .testTag(modifierData.name.lowercase().replace(" ", "") + "_dropdown"),
                        ) {
                            Text(
                                dropDownText.value, //standard option in the dropdown box (100% ice, whole milk, etc)
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
                                    modifier = Modifier.testTag(modifierData.name.lowercase().replace(" ", "") + "_dropdown_item"),
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
                                        println("DBG: " + modifierData.name.lowercase().replace(" ", "") + "_dropdown_item")

                                        dropDownText.value = choiceData.name //once a user clicks on a mod, replace value in dropbox with chosen mod
                                        dropExpand.value = false
                                        position.value = choiceidx

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
                            text = modifierData.name, //Display name of modification type (Ex.: "Toppings", "Sugar Level", "Ice Level", "Milk")
                            modifier = Modifier
                                .testTag(modifierData.name.lowercase() + "_choice"),
                            fontSize = 20.sp,
                            fontWeight = FontWeight.Bold,
                            fontFamily = FontFamily.SansSerif,
                        )

                        val ptrToChoices = appViewModel.workingItem?.modifiers?.data?.get(modidx)?.choices
                        var checkedChoicesCounter by remember {
                            mutableIntStateOf(0)
                        }
                        val maxCheckChoices = if(modifierData.max_selected == 0) 3 else modifierData.max_selected

                        modifierData.choices.forEachIndexed { index, choiceData ->
                            Row(
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                var checked by remember {
                                    println("[$index] ptrToChoices.indexOf(choiceData) : ${ptrToChoices?.indexOf(choiceData)!!}")
                                    mutableStateOf(ptrToChoices.indexOf(choiceData) > -1)
                                }

                                Checkbox(
                                    modifier = Modifier.testTag("choice"),
                                    checked = checked,
                                    onCheckedChange = { isChecked ->
                                        checked = isChecked
                                        if(checkedChoicesCounter >= maxCheckChoices){
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
                                    text = buildAnnotatedString{
                                        withLink(
                                            LinkAnnotation.Clickable(
                                                tag = "toggleClickedIfPossible",
                                                linkInteractionListener = {
                                                    if(checkedChoicesCounter < maxCheckChoices || checked){
                                                        checked = !checked

                                                        if(checked){
                                                            ptrToChoices?.add(choiceData)
                                                            checkedChoicesCounter++
                                                        }

                                                        if(!checked){
                                                            ptrToChoices?.remove(choiceData)
                                                            checkedChoicesCounter--
                                                        }
                                                    }
                                                }
                                            )
                                        ){
                                            append(
                                                choiceData.name + " - " + "$%.2f".format(choiceData.price), //next to box show name and price of mod
                                            )
                                        }
                                    },
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
fun ColumnScope.displayPrice(
    navController: NavController,
    appViewModel: AppViewModel,
    quantity: Int,
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
        }

    }
    println("DBG: " + itemSubtotal.toString())
    if (itemSubtotal != null) {
        appViewModel.workingItem?.price?.high_with_modifiers = appViewModel.currentProduct?.price?.high_with_modifiers?.plus(
            itemSubtotal.sum()
        )!!
    }
    price.value = appViewModel.workingItem?.price?.high_with_modifiers
    Text(
        text = "$%.2f".format(price.value!!)
                + if(quantity > 1) " (${"$%.2f".format(price.value!! * quantity)})" else "",
        fontSize = 20.sp,
        fontWeight = FontWeight.Bold,
        modifier = Modifier
            .padding(0.dp, 0.dp, 0.dp, 20.dp)
            .align(Alignment.CenterHorizontally)
            .testTag("price"),
        fontFamily = FontFamily.SansSerif
    )
    return price
}

