package org.example.sweetea

import org.example.sweetea.dataclasses.local.AppViewModel
import org.koin.core.context.startKoin
import org.koin.core.module.dsl.viewModel
import org.koin.dsl.KoinAppDeclaration
import org.koin.dsl.module

val AppViewModelModule = module{
    viewModel{ AppViewModel() }
}

private var koinIsStarted = false
fun initKoin(appDeclaration: KoinAppDeclaration = {}){
    if(!koinIsStarted) {
        startKoin {
            appDeclaration()
            modules(
                AppViewModelModule
            )
        }
        koinIsStarted = true
    }
}