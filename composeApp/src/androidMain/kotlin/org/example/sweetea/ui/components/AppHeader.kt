package org.example.sweetea.ui.components

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.EnterTransition
import androidx.compose.animation.ExitTransition
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
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
    hideLocation: Boolean = false,
    hideTopBarHeader: Boolean? = false,
    enterTransition: () -> EnterTransition,
    exitTransition: () -> ExitTransition,
    content: @Composable (() -> Unit)? = null,
) {
    val visible = hideTopBarHeader != null && !hideTopBarHeader
    Column(modifier = modifier.fillMaxWidth(1f)) {
        Row(
            modifier = Modifier.height(28.dp).
            align(Alignment.End)
        ) {
            AnimatedVisibility(
                visible = !hideLocation && visible,
                enter = enterTransition(),
                exit = exitTransition(),
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
                    lineHeight = 14.sp,
                    modifier = Modifier.fillMaxWidth(0.6f),
                )
            }
        }

        Row(
            modifier = Modifier.height(38.dp),
            verticalAlignment = Alignment.Bottom
        ){
            AnimatedVisibility(
                visible = visible,
                enter = enterTransition(),
                exit = exitTransition(),
            ) {
                if(headerText != null){
                    headerText()
                } else {
                    Text(
                        modifier = Modifier.padding(4.dp, 0.dp, 0.dp, 0.dp),
                        text = "Hi, <username>",
                        fontSize = 34.sp,
                        fontWeight = FontWeight.Bold
                    )
                }
            }
        }
        Row(){
            if(content != null) content()
        }
    }
}