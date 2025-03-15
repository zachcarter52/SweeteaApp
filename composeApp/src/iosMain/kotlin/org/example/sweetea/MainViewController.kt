package org.example.sweetea

import androidx.compose.ui.window.ComposeUIViewController
import org.example.sweetea.dataclasses.local.AppViewModel

fun MainViewController() = ComposeUIViewController(
    configure = {
        initKoin()
    }
) {
    SweeteaApp()
}

// takes shared UI