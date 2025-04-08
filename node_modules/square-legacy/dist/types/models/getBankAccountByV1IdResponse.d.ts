import { Schema } from '../schema';
import { BankAccount } from './bankAccount';
import { Error } from './error';
/** Response object returned by GetBankAccountByV1Id. */
export interface GetBankAccountByV1IdResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /**
     * Represents a bank account. For more information about
     * linking a bank account to a Square account, see
     * [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
     */
    bankAccount?: BankAccount;
}
export declare const getBankAccountByV1IdResponseSchema: Schema<GetBankAccountByV1IdResponse>;
