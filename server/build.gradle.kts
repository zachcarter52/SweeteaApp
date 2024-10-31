plugins {
    alias(libs.plugins.kotlinJvm)
    alias(libs.plugins.ktor)
    application
}

group = "org.example.site.square.site.square.sweeteaus"
version = "1.0.0"
application {
    mainClass.set("org.example.site.square.site.square.sweeteaus.ApplicationKt")
    applicationDefaultJvmArgs = listOf("-Dio.ktor.development=${extra["io.ktor.development"] ?: "false"}")
}

dependencies {
    implementation(projects.shared)
    implementation(libs.logback)
    implementation(libs.ktor.server.core)
    implementation(libs.ktor.server.netty)
    implementation(libs.ktor.server.host)
    implementation(libs.ktor.server.config.yaml)
    implementation(libs.exposed.core)
    implementation(libs.exposed.jdbc)
    testImplementation(libs.ktor.server.tests)
    testImplementation(libs.kotlin.test.junit)
}