import org.jetbrains.kotlin.gradle.ExperimentalKotlinGradlePluginApi
import org.jetbrains.kotlin.gradle.dsl.JvmTarget

plugins {
    alias(libs.plugins.kotlinSerialization)
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidApplication)
    alias(libs.plugins.jetbrainsCompose)
    alias(libs.plugins.compose.compiler)
    alias(libs.plugins.ksp)
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

            // Square In-App Payments SDK: see ( https://developer.squareup.com/docs/in-app-payments-sdk )
            implementation(libs.card.entry)

            //Retrofit
            implementation(libs.retrofit)

            // Moshi
            implementation(libs.moshi)
            implementation(libs.moshi.kotlin)
            implementation(libs.com.squareup.moshi.moshi.kotlin.codegen)
            implementation(libs.okhttp3.logging.interceptor)
            implementation(libs.squareup.converter.moshi)
            //implementation(libs.moshi.adapters)
            //implementation(libs.converter.moshi)
            //implementation("com.squareup.retrofit2:converter-moshi")
        }

        iosMain.dependencies {
            implementation(libs.ktor.client.ios)
        }

        commonMain.dependencies {
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material)
            implementation(compose.material3)
            implementation(compose.ui)
            implementation(compose.components.resources)
            implementation(compose.components.uiToolingPreview)
            implementation(libs.androidx.lifecycle.viewmodel)
            implementation(libs.androidx.lifecycle.runtime.compose)
            implementation(projects.shared)


            //Mobile payments sdk dependency - This API only applies to In-Person Payments: see ( https://developer.squareup.com/docs/mobile-payments-sdk )
            // We will use In-App Payments SDK in the androidMain dependency section
            //implementation(libs.mobile.payments.sdk)


            //mockreader ui dependency
            implementation(libs.mockreader.ui)
            //Image loader dependency
            implementation(libs.coil)
            implementation(libs.coil.network)
            implementation(libs.coil.compose)
            //ktor

            implementation (libs.maps.compose)
            implementation (libs.play.services.maps.v1800)
            //ktor
            implementation(libs.ktor.client.core)
            implementation(libs.ktor.client.content.negotiation)
            implementation(libs.ktor.serialization.kotlinx.json)

            implementation(libs.multiplatform.paths)
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

    implementation(libs.androidx.core)
    implementation(libs.play.services.location)
    implementation(libs.play.services.maps)

    implementation(libs.androidx.activity.compose)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.ui.graphics)
    implementation(libs.androidx.material3)

    implementation("com.android.volley:volley:1.2.1")

    implementation(platform("org.jetbrains.kotlin:kotlin-bom:${libs.versions.kotlin}"))
    implementation("com.google.android.libraries.places:places:3.5.0")
    implementation("com.google.maps.android:places-ktx:3.3.1")

    implementation(libs.androidx.ui.test.junit4.android)
    implementation(libs.androidx.lifecycle.viewmodel.android)
    androidTestImplementation(platform(libs.androidx.compose.bom))
    androidTestImplementation(libs.androidx.ui.test.junit4)
    androidTestImplementation(libs.ui.test.junit4)
    // Needed for createComposeRule(), but not for createAndroidComposeRule<YourActivity>():
    debugImplementation(libs.androidx.ui.test.manifest)

    debugImplementation(compose.uiTooling)
    coreLibraryDesugaring(libs.desugar.jdk.libs)

    implementation(libs.androidx.ui.v143)
    implementation(libs.androidx.material.v143)
    implementation(libs.androidx.ui.tooling.preview.v143)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    implementation(libs.accompanist.permissions)

    implementation(libs.maps.compose)
    implementation(libs.play.services.maps)
    implementation(libs.play.services.location)

    // Test rules and transitive dependencies:

    debugImplementation(libs.androidx.ui.tooling)
    debugImplementation(libs.androidx.ui.test.manifest)

    implementation(libs.androidx.room.runtime)
    ksp(libs.androidx.room.compiler)
    ksp(libs.com.squareup.moshi.moshi.kotlin.codegen)
    //implementation("com.squareup.moshi:moshi-kotlin-codegen")
    //ksp("com.squareup.moshi:moshi-kotlin-codegen")
}

