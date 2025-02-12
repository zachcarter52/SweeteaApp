package org.example.sweetea.ui.theme

import org.example.sweetea.R

import androidx.compose.material3.Typography
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp

import androidx.compose.ui.text.googlefonts.GoogleFont
import androidx.compose.ui.text.googlefonts.Font
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontStyle

val provider = GoogleFont.Provider(
    providerAuthority = "com.google.android.gms.fonts",
    providerPackage = "com.google.android.gms",
    certificates = R.array.com_google_android_gms_fonts_certs
)

val bodyFontFamily = FontFamily(
    Font(
        googleFont = GoogleFont("Courier Prime"),
        fontProvider = provider,
    ),
    Font(
        R.font.courier_prime,
        FontWeight.Normal
    ),
    Font(
        R.font.courier_prime_bold,
        FontWeight.Bold
    ),
    Font(
        R.font.courier_prime_italic,
        FontWeight.Normal,
        FontStyle.Italic
    ),
    Font(
        R.font.courier_prime_bold_italic,
        FontWeight.Bold,
        FontStyle.Italic
    )

)

val displayFontFamily = FontFamily(
    Font(
        googleFont = GoogleFont("Courier Prime"),
        fontProvider = provider,
    ),
    Font(
        R.font.courier_prime,
        FontWeight.Normal
    ),
    Font(
        R.font.courier_prime_bold,
        FontWeight.Bold
    ),
    Font(
        R.font.courier_prime_italic,
        FontWeight.Normal,
        FontStyle.Italic
    ),
    Font(
        R.font.courier_prime_bold_italic,
        FontWeight.Bold,
        FontStyle.Italic
    )
)

// Default Material 3 typography values
val baseline = Typography()

val CourierPrimeTypography = Typography(
    displayLarge = baseline.displayLarge.copy(fontFamily = displayFontFamily),
    displayMedium = baseline.displayMedium.copy(fontFamily = displayFontFamily),
    displaySmall = baseline.displaySmall.copy(fontFamily = displayFontFamily),
    headlineLarge = baseline.headlineLarge.copy(fontFamily = displayFontFamily),
    headlineMedium = baseline.headlineMedium.copy(fontFamily = displayFontFamily),
    headlineSmall = baseline.headlineSmall.copy(fontFamily = displayFontFamily),
    titleLarge = baseline.titleLarge.copy(fontFamily = displayFontFamily),
    titleMedium = baseline.titleMedium.copy(fontFamily = displayFontFamily),
    titleSmall = baseline.titleSmall.copy(fontFamily = displayFontFamily),
    bodyLarge = baseline.bodyLarge.copy(fontFamily = bodyFontFamily),
    bodyMedium = baseline.bodyMedium.copy(fontFamily = bodyFontFamily),
    bodySmall = baseline.bodySmall.copy(fontFamily = bodyFontFamily),
    labelLarge = baseline.labelLarge.copy(fontFamily = bodyFontFamily),
    labelMedium = baseline.labelMedium.copy(fontFamily = bodyFontFamily),
    labelSmall = baseline.labelSmall.copy(fontFamily = bodyFontFamily),
)

