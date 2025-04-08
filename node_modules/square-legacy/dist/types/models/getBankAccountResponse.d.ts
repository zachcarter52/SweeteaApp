import { Schema } from '../schema';
import { BankAccount } from './bankAccount';
import { Error } from './error';
/** Response object returned by `GetBankAccount`. */
export interface GetBankAccountResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /**
     * Represents a bank account. For more information about
     * linking a bank account to a Square account, see
     * [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
     */
    bankAccount?: BankAccount;
}
export declare const getBankAccountResponseSchema: Schema<GetBankAccountResponse>;
