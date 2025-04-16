package org.example.sweetea.ui.theme

import androidx.compose.material3.Typography
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.googlefonts.GoogleFont
import org.example.sweetea.R
import org.jetbrains.compose.resources.Font
import sweetea.composeapp.generated.resources.CherryBombOne_Regular
import sweetea.composeapp.generated.resources.Res
import sweetea.composeapp.generated.resources.Zain_Black
import sweetea.composeapp.generated.resources.Zain_Bold
import sweetea.composeapp.generated.resources.Zain_ExtraBold
import sweetea.composeapp.generated.resources.Zain_ExtraLight
import sweetea.composeapp.generated.resources.Zain_Italic
import sweetea.composeapp.generated.resources.Zain_Light
import sweetea.composeapp.generated.resources.Zain_LightItalic
import sweetea.composeapp.generated.resources.Zain_Regular

@Composable
fun SweeteaTypography(): Typography {
    val provider = GoogleFont.Provider(
        providerAuthority = "com.google.android.gms.fonts",
        providerPackage = "com.google.android.gms",
        certificates = R.array.com_google_android_gms_fonts_certs
    )

    val Zain = FontFamily(
        Font(
            Res.font.Zain_Black,
            FontWeight.Black
        ),
        Font(
            Res.font.Zain_Bold,
            FontWeight.Bold
        ),
        Font(
            Res.font.Zain_ExtraBold,
            FontWeight.ExtraBold
        ),
        Font(
            Res.font.Zain_ExtraLight,
            FontWeight.ExtraLight
        ),
        Font(
            Res.font.Zain_Italic,
            FontWeight.Normal,
            FontStyle.Italic
        ),
        Font(
            Res.font.Zain_Light,
            FontWeight.Light
        ),
        Font(
            Res.font.Zain_LightItalic,
            FontWeight.Light,
            FontStyle.Italic
        ),
        Font(
            Res.font.Zain_Regular,
            FontWeight.Normal
        ),
    )

    val CherryBomb = FontFamily(
        Font(
            Res.font.CherryBombOne_Regular,
            FontWeight.Normal
        )
    )

// Default Material 3 typography values
    val baseline = Typography()

    val sweeteaTypography = Typography(
        displayLarge = baseline.displayLarge.copy(fontFamily = CherryBomb),
        displayMedium = baseline.displayMedium.copy(fontFamily = CherryBomb),
        displaySmall = baseline.displaySmall.copy(fontFamily = CherryBomb),
        headlineLarge = baseline.headlineLarge.copy(fontFamily = CherryBomb),
        headlineMedium = baseline.headlineMedium.copy(fontFamily = CherryBomb),
        headlineSmall = baseline.headlineSmall.copy(fontFamily = CherryBomb),
        titleLarge = baseline.titleLarge.copy(fontFamily = CherryBomb),
        titleMedium = baseline.titleMedium.copy(fontFamily = CherryBomb),
        titleSmall = baseline.titleSmall.copy(fontFamily = CherryBomb),
        bodyLarge = baseline.bodyLarge.copy(fontFamily = Zain),
        bodyMedium = baseline.bodyMedium.copy(fontFamily = Zain),
        bodySmall = baseline.bodySmall.copy(fontFamily = Zain),
        labelLarge = baseline.labelLarge.copy(fontFamily = Zain),
        labelMedium = baseline.labelMedium.copy(fontFamily = Zain),
        labelSmall = baseline.labelSmall.copy(fontFamily = Zain),
    )
    return sweeteaTypography
}