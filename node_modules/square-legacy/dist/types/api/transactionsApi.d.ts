import { ApiResponse, RequestOptions } from '../core';
import { CaptureTransactionResponse } from '../models/captureTransactionResponse';
import { ListTransactionsResponse } from '../models/listTransactionsResponse';
import { RetrieveTransactionResponse } from '../models/retrieveTransactionResponse';
import { VoidTransactionResponse } from '../models/voidTransactionResponse';
import { BaseApi } from './baseApi';
export declare class TransactionsApi extends BaseApi {
    /**
     * Lists transactions for a particular location.
     *
     * Transactions include payment information from sales and exchanges and refund
     * information from returns and exchanges.
     *
     * Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50
     *
     * @param locationId  The ID of the location to list transactions for.
     * @param beginTime   The beginning of the requested reporting period, in RFC 3339 format.  See [Date
     *                              ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for
     *                              details on date inclusivity/exclusivity.  Default value: The current time minus one
     *                              year.
     * @param endTime     The end of the requested reporting period, in RFC 3339 format.  See [Date
     *                              ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for
     *                              details on date inclusivity/exclusivity.  Default value: The current time.
     * @param sortOrder   The order in which results are listed in the response (`ASC` for oldest first,
     *                              `DESC` for newest first).  Default value: `DESC`
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this to
     *                              retrieve the next set of results for your original query.  See [Paginating
     *                              results](https://developer.squareup.com/docs/working-with-apis/pagination) for more
     *                              information.
     * @return Response from the API call
     * @deprecated
     */
    listTransactions(locationId: string, beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListTransactionsResponse>>;
    /**
     * Retrieves details for a single transaction.
     *
     * @param locationId     The ID of the transaction's associated location.
     * @param transactionId  The ID of the transaction to retrieve.
     * @return Response from the API call
     * @deprecated
     */
    retrieveTransaction(locationId: string, transactionId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveTransactionResponse>>;
    /**
     * Captures a transaction that was created with the [Charge](api-endpoint:Transactions-Charge)
     * endpoint with a `delay_capture` value of `true`.
     *
     *
     * See [Delayed capture transactions](https://developer.squareup.
     * com/docs/payments/transactions/overview#delayed-capture)
     * for more information.
     *
     * @param locationId
     * @param transactionId
     * @return Response from the API call
     * @deprecated
     */
    captureTransaction(locationId: string, transactionId: string, requestOptions?: RequestOptions): Promise<ApiResponse<CaptureTransactionResponse>>;
    /**
     * Cancels a transaction that was created with the [Charge](api-endpoint:Transactions-Charge)
     * endpoint with a `delay_capture` value of `true`.
     *
     *
     * See [Delayed capture transactions](https://developer.squareup.
     * com/docs/payments/transactions/overview#delayed-capture)
     * for more information.
     *
     * @param locationId
     * @param transactionId
     * @return Response from the API call
     * @deprecated
     */
    voidTransaction(locationId: string, transactionId: string, requestOptions?: RequestOptions): Promise<ApiResponse<VoidTransactionResponse>>;
}
