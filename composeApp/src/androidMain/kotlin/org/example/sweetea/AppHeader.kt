package org.example.sweetea

import androidx.compose.foundation.Image
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
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
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun AppHeader(
    modifier: Modifier = Modifier,
    headerText: @Composable (() -> Unit)? = null,
    hideLocation: Boolean? = false,
    hideTopBarHeader: Boolean? = false,
    content: @Composable (() -> Unit)? = null,
) {
    if(hideTopBarHeader != null && !hideTopBarHeader){
        Column(modifier = modifier.fillMaxWidth(1f)) {
            Row(
                modifier = Modifier.align(Alignment.End)
            ) {
                Text(
                    text = if(hideLocation != null && !hideLocation) {buildAnnotatedString {
                        append("location: ")
                        withStyle(
                            style = SpanStyle(color = MaterialTheme.colorScheme.primary)
                        ) {
                            append("4010 Foothills Blvd #101, Roseville, CA 95747")
                        }
                    }} else {
                        buildAnnotatedString{}
                    },
                    fontSize = 10.sp,
                    modifier = Modifier.fillMaxWidth(0.6f),
                )
            }

            Box(
                modifier = Modifier.height(38.dp)
            ){
                if(headerText != null){
                    headerText()
                } else {
                    Text(
                        text = "Hi, <username>",
                        fontSize = 34.sp,
                        fontWeight = FontWeight.Bold
                    )
                }
            }
        }
    }
    if(content != null) content()
}