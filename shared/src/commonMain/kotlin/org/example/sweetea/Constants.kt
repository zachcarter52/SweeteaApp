package org.example.sweetea

public class Constants {
    companion object {
        const val DATABASE_HOST = "localhost"
        const val DATABASE_NAME = "SweeteaTest"
        const val SERVER_PORT = 8080
        const val ACCOUNT_SAFE_PERIOD_DAYS = 4*7
        const val DATABASE_USERNAME = PrivateConstants.DATABASE_USERNAME
        const val DATABASE_PASSWORD = PrivateConstants.DATABASE_PASSWORD
        const val SQUARE_USER_ID = PrivateConstants.SQUARE_USER_ID
        const val SITE_ID = PrivateConstants.SITE_ID
        const val BASE_URL = "https://cdn5.editmysite.com/app/store/api/v28/editor/users/${SQUARE_USER_ID}/sites/${SITE_ID}/"
        const val LOCATIONS_ENDPOINT = "store-locations/"
        const val CATEGORY_ENDPOINT = "categories?per_page=50&include=images"
        const val PRODUCTS_ENDPOINT = "products?page=1&per_page=200&include=images,categories,discounts,media_files"
    }
}