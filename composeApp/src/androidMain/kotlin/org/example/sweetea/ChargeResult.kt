package org.example.sweetea

class ChargeResult(public val success: Boolean, public val networkError: Boolean, public val errorMessage: String) {
    companion object {
        fun success(): ChargeResult {
            return ChargeResult(true, false, null.toString())
        }

        fun error(message: String): ChargeResult {
            return ChargeResult(false, false, message)
        }

        fun networkError() : ChargeResult{
            return ChargeResult(false, true, null.toString())
        }
    }
}