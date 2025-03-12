package org.example.sweetea.dataclasses.local

import org.example.sweetea.ResponseClasses.AppStatus

class ServerRepository {
    private val serverService = KtorServiceHandler().serverService
    suspend fun getAppStatus(): AppStatus? {
        val statusResult = serverService.getAppStatus()
        println("Successfully got appStatus: ${statusResult.isSuccess}")
        return statusResult.getOrNull()
    }
}