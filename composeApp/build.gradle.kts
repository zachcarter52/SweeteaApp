import org.jetbrains.compose.desktop.application.dsl.TargetFormat
import org.jetbrains.kotlin.gradle.ExperimentalKotlinGradlePluginApi
import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import org.jetbrains.kotlin.gradle.utils.IMPLEMENTATION

plugins {
    alias(libs.plugins.kotlinSerialization)
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidApplication)
    alias(libs.plugins.jetbrainsCompose)
    alias(libs.plugins.compose.compiler)
}

kotlin {
    androidTarget {
        @OptIn(ExperimentalKotlinGradlePluginApi::class)
        compilerOptions {
            jvmTarget.set(JvmTarget.JVM_11)
        }
    }
    
    listOf(
        iosX64(),
        iosArm64(),
        iosSimulatorArm64()
    ).forEach { iosTarget ->
        iosTarget.binaries.framework {
            baseName = "ComposeApp"
            isStatic = true
        }
    }
    
    sourceSets {
        
        androidMain.dependencies {

            implementation(compose.preview)
            implementation(compose.uiTooling)
            implementation(libs.androidx.activity.compose)
            implementation(libs.androidx.appcompat)
            implementation(libs.androidx.compose.ui)
            implementation(libs.androidx.compose.ui.text.googlefonts)
            implementation(libs.androidx.compose.runtime.livedata)
            implementation(libs.androidx.lifecycle.viewmodel)
            implementation(libs.androidx.lifecycle.runtime.compose)
            implementation(libs.androidx.material3.android)
            implementation(libs.androidx.navigation.runtime.ktx)
            implementation(libs.androidx.navigation.compose)
            implementation(libs.androidx.legacy.support.v4)
            implementation(libs.androidx.cardview)
            implementation(libs.core.splashscreen)
            //Jetpack Compose dependencies
            implementation(libs.androidx.compose.ui.tooling.preview) // Preview support
            implementation(libs.androidx.compose.material) // Material Design components
            implementation(libs.androidx.activity.compose) // Integration with Activities
            implementation(libs.androidx.navigation.compose)
            //Amazon Cognito / Amplify dependencies
            implementation(libs.aws.amplify.core) //amplify library
            implementation(libs.aws.auth.cognito)  //cognito library

            implementation(libs.ktor.client.android)
            implementation(libs.kotlinx.coroutines.android)
        }

        iosMain.dependencies {
            implementation(libs.ktor.client.ios)
        }

        commonMain.dependencies {
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material)
            implementation(compose.ui)
            implementation(compose.components.resources)
            implementation(compose.components.uiToolingPreview)
            implementation(projects.shared)
            //Mobile payments sdk dependency
            implementation(libs.mobile.payments.sdk)
            //mockreader ui dependency
            implementation(libs.mockreader.ui)
            //Image loader dependency
            implementation(libs.coil)
            implementation(libs.coil.network)
            implementation(libs.coil.compose)
            //ktor
            implementation(libs.ktor.client.core)
            implementation(libs.ktor.client.content.negotiation)
            implementation(libs.ktor.serialization.kotlinx.json)
            //Connectivity Status dependency
            implementation(libs.connectivity.core)
            implementation(libs.connectivity.device)
            implementation(libs.connectivity.compose.device)
        }
    }
}

android {

    buildFeatures {
        compose = true
    }

    composeOptions {
        kotlinCompilerExtensionVersion = "1.1.1"
    }

    namespace = "org.example.sweetea"
    compileSdk = libs.versions.android.compileSdk.get().toInt()

    defaultConfig {
        applicationId = "org.example.sweetea"
        minSdk = libs.versions.android.minSdk.get().toInt()
        targetSdk = libs.versions.android.targetSdk.get().toInt()
        versionCode = 1
        versionName = "1.0"
    }
    packaging {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
    buildTypes {
        getByName("release") {
            isMinifyEnabled = false
        }
    }
    compileOptions {
        isCoreLibraryDesugaringEnabled = true
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
}

dependencies {

    debugImplementation(compose.uiTooling)
    coreLibraryDesugaring(libs.desugar.jdk.libs)
}

