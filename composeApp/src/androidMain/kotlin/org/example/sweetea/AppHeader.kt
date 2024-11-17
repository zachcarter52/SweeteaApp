package org.example.sweetea

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.spring
import androidx.compose.animation.expandVertically
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.shrinkVertically
import androidx.compose.animation.slideInHorizontally
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutHorizontally
import androidx.compose.animation.slideOutVertically
import androidx.compose.foundation.Image
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalDensity
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
    hideLocation: Boolean = false,
    hideTopBarHeader: Boolean? = false,
    content: @Composable (() -> Unit)? = null,
) {
    val enterTransistion = {
        slideInHorizontally()
    }
    val exitTransition = {
        slideOutHorizontally(targetOffsetX = {fullWidth -> fullWidth}) +
                fadeOut()
    }
    AnimatedVisibility(
        visible = hideTopBarHeader != null && !hideTopBarHeader,
        enter = enterTransistion() + slideInHorizontally(),
        exit = exitTransition() + slideOutHorizontally(),
    ) {
        Column(modifier = modifier.fillMaxWidth(1f)) {
            Row(
                modifier = Modifier.height(28.dp).
                align(Alignment.End)
            ) {
                val density = LocalDensity.current
                AnimatedVisibility(
                    visible = !hideLocation,
                    enter = enterTransistion(),
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
    }
    if(content != null) content()
}