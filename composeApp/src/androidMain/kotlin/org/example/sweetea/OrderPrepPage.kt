package org.example.sweetea

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Date
import java.util.Locale

@Composable
fun OrderPrepPage(){

    val date = getCurrentDateTime()
    val dateToString = date.toString("MMMM dd, yyyy hh:mm a")

    Column(
        Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            "Location:",
            modifier = Modifier.align(alignment = Alignment.End),
            fontSize = 18.sp,
            )
        Text(
            dateToString,
            modifier = Modifier.align(alignment = Alignment.Start),
            fontSize = 18.sp,
        )
        Text(
            "Order Number:",
            modifier = Modifier.align(alignment = Alignment.Start),
            fontSize = 18.sp,
        )
        Text(
            "Your Order is On the Way!",
            modifier = Modifier.padding(16.dp),
            color = Color.Blue,
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold,

        )
        Text(
            "MenuItems",
            modifier = Modifier.padding(60.dp),
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold,

            )

    }

}
fun Date.toString(format: String, locale: Locale = Locale.getDefault()): String {
    val formatter = SimpleDateFormat(format, locale)
    return formatter.format(this)
}

fun getCurrentDateTime(): Date {
    return Calendar.getInstance().time
}
