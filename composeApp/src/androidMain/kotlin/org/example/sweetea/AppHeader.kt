package org.example.sweetea

import androidx.compose.foundation.Image
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.sp

@Composable
fun AppHeader(
    modifier: Modifier = Modifier,
    content: @Composable (() -> Unit)? = {},
) {
    val logo = if (!isSystemInDarkTheme()){
        painterResource(id = R.drawable.sweetealogo_homepage_light)
    } else {
        painterResource(id = R.drawable.sweetealogo_homepage_dark)
    }
    Column(modifier = modifier.fillMaxWidth(1f)) {
        Row(
            modifier = Modifier.align(Alignment.End)
        ) {
            Text(
                text = buildAnnotatedString {
                    append("location: ")
                    withStyle(
                        style = SpanStyle(color = MaterialTheme.colorScheme.primary)
                    ) {
                        append("4010 Foothills Blvd #101, Roseville, CA 95747")
                    }
                },
                fontSize = 10.sp,
                modifier = Modifier.fillMaxWidth(0.6f),
            )
        }
        Text(
            text = "Hi, <username>",
            fontSize = 34.sp,
            fontWeight = FontWeight.Bold
        )
    }
    content!!()
}