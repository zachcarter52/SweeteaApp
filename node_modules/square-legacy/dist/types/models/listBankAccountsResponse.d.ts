import { Schema } from '../schema';
import { BankAccount } from './bankAccount';
import { Error } from './error';
/** Response object returned by ListBankAccounts. */
export interface ListBankAccountsResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /** List of BankAccounts associated with this account. */
    bankAccounts?: BankAccount[];
    /**
     * When a response is truncated, it includes a cursor that you can
     * use in a subsequent request to fetch next set of bank accounts.
     * If empty, this is the final response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
}
export declare const listBankAccountsResponseSchema: Schema<ListBankAccountsResponse>;
