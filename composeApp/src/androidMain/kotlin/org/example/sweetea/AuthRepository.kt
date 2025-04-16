package org.example.sweetea

interface AuthRepository {
    fun signInUser(email: String, password: String, onResult: (Boolean, String?) -> Unit)
    //fun signUpUser(email: String, password: String, username: String, onResult: (Boolean, String?) -> Unit)

}