package org.example.sweetea.database.model;

import kotlinx.serialization.Serializable;
import kotlinx.datetime.LocalDate;

@Serializable
data class Account(
  val accountID: ULong,
  var emailAddress: String,
  var phoneNumber: String,
  var dateClosed: LocalDate?
)
