package org.example.sweetea.ui.components

import android.util.Log
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
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import org.example.sweetea.AuthViewModel
import org.example.sweetea.dataclasses.local.AppViewModel

@Composable
fun AppHeader(
    modifier: Modifier = Modifier,
    viewModel: AppViewModel,
    authViewModel: AuthViewModel,
    headerText: @Composable ((viewModel: AppViewModel) -> Unit)? = null,
    hideLocation: Boolean = false,
    hideTopBarHeader: Boolean? = false,
    enterTransition: () -> EnterTransition,
    exitTransition: () -> ExitTransition,
    content: @Composable (() -> Unit)? = null,
) {
    val visible = hideTopBarHeader != null && !hideTopBarHeader
    val isLoggedIn by authViewModel.isUserLoggedIn.collectAsState()
    val username by authViewModel.username.collectAsState()

    LaunchedEffect(isLoggedIn, username) {
        if (isLoggedIn && username.isBlank()) {
            authViewModel.fetchUsername()
            Log.e("AuthDebug", "User logged in, fetching username")
        } else if (!isLoggedIn) {
            Log.d("AuthDebug", "User not logged in or username is blank")
        }
    }

    Log.e("HeaderDebug", "Recomposing. isLoggedIn: $isLoggedIn, username: $username")

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
                    headerText(viewModel)
                } else {
                    Text(
                        modifier = Modifier.padding(4.dp, 0.dp, 0.dp, 0.dp),
                        text = if (isLoggedIn) "Welcome, $username" else "Welcome",
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