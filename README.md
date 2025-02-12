![sweetealogo_homepage](https://github.com/user-attachments/assets/8d8cfbfe-0bc3-4473-8b66-901572748894)

# Sweetea Boba Mobile Ordering App -

Sweetea is a boba company which serves high-quality boba drinks and desserts in Roseville, Fair Oaks, and Auburn. We have designed a mobile application for Android and iOS to assist with ordering operations and provide users with a seamless experience to browse, customize, and purchase their favorite drinks and desserts. Built using Kotlin and Jetpack Compose with AWS Amplify and Amazon RDS for backend services.

## Participants
- James McDole https://github.com/ZOrangeBandit
- Spencer Green https://github.com/scg88
- Zach Carter https://github.com/zachcarter52
- Chenbin Wu https://github.com/Megpoidgumi
- Maria Flores-Rivera https://github.com/mariafloresrivera
- Aditya Nori https://github.com/adityanori
- Andrew Xu https://github.com/andy1xu
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
  - Apple Store Download
  - Google Play Store Download

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

## ERD
![image](https://github.com/user-attachments/assets/f6208f7e-51c6-4738-9cb6-a6c2a795253b)


## Testing

## Deployment

## Developer Instructions

## Timeline
  - 1 Oct 2024:  Project development began.
  - 20 Oct 2024: First commits, UI started and initial database setup.
  - 30 Oct 2024: Navigation implemented and store functionality setup.
  - 2 Nov 2024: Login backend functionality setup.
  - 17 Nov 2024: Further UI development including rewards page, account page, home page, menu page.

  Future development projections
  - Jan 2025: Fully implement up to date menu browsing, drink customizations, and order placing capabilities including communication with Square POS system.
  - Feb 2025: Fully implement Google maps store locator and password reset capabilities. Also, creation of an admin portal for easy update of menu items and images as well as ability to 86 items that are out of stock.
  - Mar 2025: Implement ability for users to view order history and receive updates via notifications regarding their order status. Employees should have ability to update reward and event information.
  - Apr 2025: Focus on refining details, including consistent details in fonts and sizing for a professional experience. Deploy application.
