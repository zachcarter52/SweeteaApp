# Sweetea Boba Mobile Ordering App -

A mobile application for Android and iOS to assist with ordering operations and provide users with a seamless experience to browse, customize,
and purchase their favorite drinks and desserts. Built using Kotlin and Jetpack Compose with AWS Amplify and Amazon RDS for backend services.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [Usage](#usage)
5. [Project Files](#project-files)



## Features
- User authentication (Sign Up, Log In, Log Out) via AWS Cognito.
- Browse a variety of boba tea options with customizable toppings.
- Secure order processing and confirmation using Square and Amazon RDS.
- Smooth menu navigation using Jetpack Compose.

## Technologies Used
- **Frontend:**
  - Kotlin
  - Android Studio
  - Jetpack Compose
- **Backend:**
  - AWS Amplify / Cognito for authentication
  - AWS RDS
- **Other Tools:**
  - GitHub for version control
  - Square APIs for safe carded transactions.
 
## Setup and Installation
  - TBD

## Usage
  - Launch App
  - Sign in or Create Account
  - Browse the menu
  - Check promotinal offers and reward points.
  - Customize your drink
  - Place Order and recieve confirmation
  - Sign out

## Project Files
  * `/composeApp` is for code that will be shared across your Compose Multiplatform applications.
  It contains several subfolders:
    - `commonMain` is for code that’s common for all targets.
    - Other folders are for Kotlin code that will be compiled for only the platform indicated in the folder name.
      For example, if you want to use Apple’s CoreCrypto for the iOS part of your Kotlin app,
      `iosMain` would be the right folder for such calls.

  * `/iosApp` contains iOS applications. Even if you’re sharing your UI with Compose Multiplatform, 
  you need this entry point for your iOS app. This is also where you should add SwiftUI code for your project.

  * `/server` is for the Ktor server application.

  * `/shared` is for the code that will be shared between all targets in the project.
  The most important subfolder is `commonMain`. If preferred, you can add code to the platform-specific folders here too.


Learn more about [Kotlin Multiplatform](https://www.jetbrains.com/help/kotlin-multiplatform-dev/get-started.html)…
