package org.example.sweetea.dataclasses.local

import android.content.Context
import android.net.ConnectivityManager
import androidx.compose.ui.platform.LocalContext
import dev.jordond.connectivity.Connectivity
import kotlinx.coroutines.coroutineScope
import okhttp3.CacheControl
import okhttp3.Interceptor
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Response
import org.example.sweetea.Constants
import org.example.sweetea.dataclasses.retrieved.CategoryData
import org.example.sweetea.dataclasses.retrieved.LocationData
import org.example.sweetea.dataclasses.retrieved.ProductData
import org.example.sweetea.dataclasses.retrieved.SquareApiRequest
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import java.util.concurrent.TimeUnit


private class AppCacheInterceptor: Interceptor {
    override fun intercept(chain: Interceptor.Chain): Response {
        val response: Response = chain.proceed(chain.request())
        val cacheControl = CacheControl.Builder()
            .maxAge(15, TimeUnit.MINUTES)
            .build()
        return response.newBuilder()
            .header("Cache-Control", "public, only-if-cached, max-stale=${cacheControl.toString()}")
            .removeHeader("Pragma")
            .build()
    }
}

class UseCacheInterceptor(
    private val networkOnline: Boolean,
): Interceptor{
    override fun intercept(chain: Interceptor.Chain): Response {
        val request = chain.request().newBuilder()
        if(!networkOnline) request.cacheControl(CacheControl.FORCE_CACHE)
        return chain.proceed(request.build())
    }
}

class RetrofitServiceHandler(
    val internetStatus: Boolean
){
    private fun createRequestClient(): OkHttpClient{
        return OkHttpClient.Builder()
            .addNetworkInterceptor(AppCacheInterceptor())
            .addInterceptor(UseCacheInterceptor(internetStatus))
            .build()
    }

    private val retrofit:Retrofit by lazy {
        Retrofit.Builder()
            .client(createRequestClient())
            .baseUrl(Constants.BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }
    val squareService: SquareApiService by lazy {
        retrofit.create(SquareApiService::class.java)
    }
}
