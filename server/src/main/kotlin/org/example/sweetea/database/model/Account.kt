package org.example.sweetea.database.model;

import kotlinx.datetime.LocalDate
import kotlinx.serialization.Serializable

@Serializable
data class Account(
  val accountID: ULong,
  var emailAddress: String,
  var phoneNumber: String,
  var dateClosed: LocalDate?
)
