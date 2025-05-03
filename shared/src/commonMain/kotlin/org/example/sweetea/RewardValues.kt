package org.example.sweetea

import kotlinx.serialization.Serializable

@Serializable
data class RewardValues (
    val bears: Int = 0,
    val freeDrinks: Int = 0,
)