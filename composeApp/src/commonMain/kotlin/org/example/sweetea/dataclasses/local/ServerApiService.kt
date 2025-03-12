package org.example.sweetea.dataclasses.local

import org.example.sweetea.ResponseClasses.AppStatus

interface ServerApiService {
    suspend fun getAppStatus(): Result<AppStatus>
}