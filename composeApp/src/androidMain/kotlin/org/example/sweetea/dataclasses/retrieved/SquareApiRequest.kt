package org.example.sweetea.dataclasses.retrieved

/*Used as a wrapper, for json replies following the format
{
    data: {
        ...RequestType...
    }
    meta: {
        ...MetaData...
    }
}
 */
data class SquareApiRequest <RequestType> (
    val data: List<RequestType>,
    val meta: MetaData
)

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

/*Similar to the SquareApiRequest class, but without the meta field:
{
    data: {
        ...DataType...
    }
}
 */
data class Data<DataType>(
    val data: DataType
)
