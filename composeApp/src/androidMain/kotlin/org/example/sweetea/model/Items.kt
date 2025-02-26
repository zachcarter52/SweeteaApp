package org.example.sweetea.model

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes


data class Items(
    @StringRes val stringResourceId: Int,
    @DrawableRes val imageResourceId: Int,
)

