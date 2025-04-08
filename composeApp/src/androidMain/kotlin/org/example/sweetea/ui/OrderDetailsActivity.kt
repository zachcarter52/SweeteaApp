package org.example.sweetea.ui

//import com.google.firebase.firestore.FirebaseFirestore

//firestore database for example
class OrderDetailsActivity {
/*    private lateinit var orderId: String
    private val db = FirebaseFirestore.getInstance()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_order_details)

        // Get order ID from the intent
        orderId = intent.getStringExtra("ORDER_ID") ?: return

        // Load order details
        fetchOrderDetails()
    }

    private fun fetchOrderDetails() {
        val orderTextView: TextView = findViewById(R.id.orderDetailsTextView)

        db.collection("orders").document(orderId).get()
            .addOnSuccessListener { document ->
                if (document != null && document.exists()) {
                    val orderInfo = """
                        Order ID: ${document.id}
                        Customer: ${document.getString("customerName")}
                        Items: ${document.get("items")}
                        Total: $${document.getDouble("totalPrice")}
                        Status: ${document.getString("status")}
                    """.trimIndent()

                    orderTextView.text = orderInfo
                }
            }
    }*/
}