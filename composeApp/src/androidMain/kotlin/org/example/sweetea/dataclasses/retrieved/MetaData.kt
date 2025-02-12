package org.example.sweetea.dataclasses.retrieved

data class MetaData (
    val pagination: PaginationData
)

data class PaginationData (
    val total: Int,
    val count: Int,
    val per_page: Int,
    val current_page: Int,
    val total_pages: Int,
)
