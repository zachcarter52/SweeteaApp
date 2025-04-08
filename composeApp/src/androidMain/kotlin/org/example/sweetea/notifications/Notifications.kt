package org.example.sweetea.notifications

//import androidx.core.content.PendingIntentCompat
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.os.Build
import androidx.core.app.NotificationCompat
import org.example.sweetea.R
import org.example.sweetea.ui.OrderDetailsActivity

object Notifications {
    private const val CHANNEL_ID = "my_channel_id"

    fun createNotificationChannel(context: Context) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                CHANNEL_ID,
                "Order Updates",
                NotificationManager.IMPORTANCE_HIGH
            ).apply {
                description = "Notifications for new orders"
            }
            val manager = context.getSystemService(NotificationManager::class.java)
            manager.createNotificationChannel(channel)

        }
    }

    fun showOrderNotification(context: Context, orderId: String) {
        val intent = Intent(context, OrderDetailsActivity::class.java).apply {
            putExtra("ORDER_ID", orderId)
        }
        val pendingIntent = PendingIntent.getActivity(
            context, 0, intent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        val builder = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_launcher_sweetea_foreground)
            .setContentTitle("New Order Received")
            .setContentText("Order #$orderId has been placed.")
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setContentIntent(pendingIntent)
            .setAutoCancel(true)

        val notificationManager = context.getSystemService(NotificationManager::class.java)
        notificationManager.notify(orderId.hashCode(), builder.build())
    }

}