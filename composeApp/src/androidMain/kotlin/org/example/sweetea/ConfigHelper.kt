package org.example.sweetea

import com.squareup.moshi.Moshi
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory
import java.util.UUID


class ConfigHelper {
    companion object {
        fun printCurlCommand(nonce: String){
            val uuid: String = UUID.randomUUID().toString()
            println("SweeteaApp: Payment token (nonce) generated by In-App Payment SDK: " + nonce)
            println("SweeteaApp: Run this curl command to charge the nonce:\n"
                        + "curl --request POST https://connect.squareupsandbox.com/v2/payments \\\n"
                        + "--header \"Content-Type: application/json\" \\\n"
                        + "--header \"Authorization: Bearer YOUR_ACCESS_TOKEN\" \\\n"
                        + "--header \"Accept: application/json\" \\\n"
                        + "--data \'{\n"
                        + "\"idempotency_key\": \"" + uuid + "\",\n"
                        + "\"amount_money\": {\n"
                        + "\"amount\": 100,\n"
                        + "\"currency\": \"USD\"},\n"
                        + "\"source_id\": \"" + nonce + "\""
                        + "}\'")
        }

        fun createRetroFitInstance(): Retrofit{
            val moshi = Moshi.Builder().build()
            val interceptor: HttpLoggingInterceptor = HttpLoggingInterceptor()
            interceptor.setLevel(HttpLoggingInterceptor.Level.BODY)
            return Retrofit.Builder().client(OkHttpClient().newBuilder().addInterceptor(interceptor).build()).baseUrl(Constants.CHARGE_SERVER_URL).addConverterFactory(MoshiConverterFactory.create(moshi)).build()
        }
    }
}