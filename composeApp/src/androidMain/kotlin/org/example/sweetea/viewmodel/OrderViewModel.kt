package org.example.sweetea.viewmodel

//import com.google.firebase.firestore.FirebaseFirestore
import android.app.Application
import androidx.lifecycle.AndroidViewModel
import com.google.firebase.firestore.FirebaseFirestore
import org.example.sweetea.notifications.Notifications

class OrderViewModel(application: Application): AndroidViewModel(application) {
    //firestore database for example
    private val db = FirebaseFirestore.getInstance()

    fun listenForNewOrders() {
        db.collection("orders")
            .addSnapshotListener { snapshots, error ->
                if (error != null) return@addSnapshotListener

                for (doc in snapshots!!.documentChanges) {
                    if (doc.type == com.google.firebase.firestore.DocumentChange.Type.ADDED) {
                        val orderId = doc.document.id
                        Notifications.showOrderNotification(getApplication(), orderId)
                    }
                }
            }
    }

}