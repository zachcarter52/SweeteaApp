![sweetealogo_homepage](https://github.com/user-attachments/assets/8d8cfbfe-0bc3-4473-8b66-901572748894)

# Sweetea Boba Mobile Ordering App -

Sweetea is a boba company which serves high-quality boba drinks and desserts. 
They currently have three locations within the Greater Sacramento area: Fair Oaks, Roseville, 
and Auburn. While they have found success within the market, they are still a relatively new 
local business that has to compete with larger, national and international franchises. Even the Roseville
location has 8 other boba shops within a 5-mile radius.


As such, we have designed a mobile application for Android and iOS to assist with ordering operations and 
provide users with a seamless experience to browse, customize, and purchase their favorite drinks 
and desserts. This mobile application is designed to encourage repeat customers by streamlining order creation, 
rewards account registration, and menu browsing.



## Participants
- James McDole https://github.com/ZOrangeBandit
- Spencer Green https://github.com/scg88
- Zach Carter https://github.com/zachcarter52
- Chenbin Wu https://github.com/Megpoidgumi
- Maria Flores-Rivera https://github.com/mariafloresrivera
- Andy Xu https://github.com/andy1xu
- Samuel Rudey https://github.com/JesterSam

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [Usage](#usage)
5. [Project Files](#project-files)
6. [ERD](#erd)
7. [Testing](#testing)
8. [Deployment](#deployment)
9. [Developer Instructions](#developer-instructions)
10. [Timeline](#timeline)



## Features
- User authentication (Sign Up, Log In, Log Out) via AWS Cognito.
- Browse the Sweetea menu of drinks, desserts and merchandise.
- Customize drinks with a variety of toppings.
- Navigate the menu smoothly with search options and a favorites bar.
- Create and modify a checkout cart, with options to 'favorite' an item.
- Location search for nearest stores.
- Secure order processing and confirmation using Square and Amazon RDS.
- View account order history.


## Technologies Used
- **Frontend:**
  - Kotlin
  - Swift
  - Android Studio
  - Xcode
  - Jetpack Compose
- **Backend:**
  - AWS Amplify / Cognito for authentication
  - AWS RDS
- **Other Tools:**
  - GitHub for version control
  - Square APIs for safe carded transactions.
 
## Setup and Installation
  - Apple Store Download
  - Google Play Store Download

## Usage
  - Launch App
  - Sign in or Create Account
  - Browse and search the menu
  - Check promotional offers and reward points.
  - Customize and modify drink
  - View and modify checkout cart
  - Create payments, place order, and receive confirmation
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

## ERD
![image](https://github.com/user-attachments/assets/f6208f7e-51c6-4738-9cb6-a6c2a795253b)


## Testing
Testing the application can be done in a few steps. Note that you'll need to create a new 
`amplifyconfiguration.json` file. Learn more [here] (https://docs.amplify.aws/gen1/android/start/project-setup/use-existing-resources/)…
  1. Clone this GitHub repository and open using Android Studio. You can also use '> git clone https://github.com/zachcarter52/SweeteaApp.git'.
  2. Create and configure an `amplifyconfiguration.json` file to the root directory. 
<br>The file can be found through: composeApp > src > androidMain > res > raw 
  3. You can run the test configurations individually or hit "All Tests" in the upper right-hand side of Android Studio, located next to the displayed AVD. By default, this will say "composeApp", 
but you can use the drop-down menu to select the test. 
  4. Click on the play button to build and run the the test. 


## Deployment
Deployment will require setting up a few environment variables. For security, this project requires a 
`PrivateConstants.kt` file. This will include: 
- `DATABASE_HOST`
- `DATABASE_PORT`
- `DATABASE_USERNAME`
- `DATABASE_PASSWORD`
- `SQUARE_USER_ID`
- `SITE_ID`

This file will need to be updated under 
`/shared` > `src` > `commonMain` > `kotlin` > `org.example.sweetea` > `Constants.kt`



## Developer Instructions
**Prerequisites:**
- Familiarity with Kotlin. Visit the [Kotlin Documentation] (https://kotlinlang.org/docs/home.html) for more.

Clone this repository and open in Android Studio. Configure a compatible Android Virtual Device. 

Sync the Gradle build files to run the application. 

MacOS users can also open in Android Studio and use Xcode to check the iOS workspace. 
The `.xcworkspace` can be found under `/iosApp`.
See the Project Files section for more details on each portion of the development files. 
