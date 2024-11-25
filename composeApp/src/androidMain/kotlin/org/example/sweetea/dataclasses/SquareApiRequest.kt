package org.example.sweetea.dataclasses

data class SquareApiRequest <RequestType> (
    val data: List<RequestType>,
    val meta: MetaData
)

data class Data<T>(
    val data: T
)
