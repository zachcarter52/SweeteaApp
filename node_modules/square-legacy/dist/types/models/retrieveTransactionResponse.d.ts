import { Schema } from '../schema';
import { Error } from './error';
import { Transaction } from './transaction';
/**
 * Defines the fields that are included in the response body of
 * a request to the [RetrieveTransaction](api-endpoint:Transactions-RetrieveTransaction) endpoint.
 * One of `errors` or `transaction` is present in a given response (never both).
 */
export interface RetrieveTransactionResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Represents a transaction processed with Square, either with the
     * Connect API or with Square Point of Sale.
     * The `tenders` field of this object lists all methods of payment used to pay in
     * the transaction.
     */
    transaction?: Transaction;
}
export declare const retrieveTransactionResponseSchema: Schema<RetrieveTransactionResponse>;
