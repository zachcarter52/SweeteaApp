package org.example.sweetea.ui.components

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.material3.Text
import androidx.compose.material3.CircularProgressIndicator

sealed interface AsyncResult<out T>{
    data class Success<T>(val data: T): AsyncResult<T>
    data class Error(val exception: Throwable? = null) : AsyncResult<Nothing>
    data object Loading: AsyncResult<Nothing>
}

@Composable
fun <T> AsyncResultHandler(
    asyncResult: AsyncResult<T>,
    onError: @Composable (String) -> Unit = { message ->
        Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            Text(
                text = message,
                modifier = Modifier.padding(16.dp),
                textAlign = TextAlign.Center
            )
        }
    },
    onLoading: @Composable () -> Unit = {
        Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            CircularProgressIndicator()
        }
    },
    onSuccess: @Composable (T) -> Unit
) {
    when (asyncResult) {
        is AsyncResult.Loading -> onLoading()
        is AsyncResult.Success -> onSuccess(asyncResult.data)
        is AsyncResult.Error -> onError(asyncResult.exception?.message ?: "Unknown error")
    }
}