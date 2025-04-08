import { Schema } from '../schema';
import { Error } from './error';
import { Transaction } from './transaction';
/**
 * Defines the fields that are included in the response body of
 * a request to the [ListTransactions](api-endpoint:Transactions-ListTransactions) endpoint.
 * One of `errors` or `transactions` is present in a given response (never both).
 */
export interface ListTransactionsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** An array of transactions that match your query. */
    transactions?: Transaction[];
    /**
     * A pagination cursor for retrieving the next set of results,
     * if any remain. Provide this value as the `cursor` parameter in a subsequent
     * request to this endpoint.
     * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     */
    cursor?: string;
}
export declare const listTransactionsResponseSchema: Schema<ListTransactionsResponse>;
