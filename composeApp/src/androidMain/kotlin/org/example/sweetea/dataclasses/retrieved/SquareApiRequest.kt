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
