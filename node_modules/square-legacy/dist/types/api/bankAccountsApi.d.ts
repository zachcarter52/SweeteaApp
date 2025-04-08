import { ApiResponse, RequestOptions } from '../core';
import { GetBankAccountByV1IdResponse } from '../models/getBankAccountByV1IdResponse';
import { GetBankAccountResponse } from '../models/getBankAccountResponse';
import { ListBankAccountsResponse } from '../models/listBankAccountsResponse';
import { BaseApi } from './baseApi';
export declare class BankAccountsApi extends BaseApi {
    /**
     * Returns a list of [BankAccount]($m/BankAccount) objects linked to a Square account.
     *
     * @param cursor      The pagination cursor returned by a previous call to this endpoint. Use it in the
     *                              next `ListBankAccounts` request to retrieve the next set  of results.  See the
     *                              [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide
     *                              for more information.
     * @param limit       Upper limit on the number of bank accounts to return in the response.  Currently,
     *                              1000 is the largest supported limit. You can specify a limit  of up to 1000 bank
     *                              accounts. This is also the default limit.
     * @param locationId  Location ID. You can specify this optional filter  to retrieve only the linked bank
     *                              accounts belonging to a specific location.
     * @return Response from the API call
     */
    listBankAccounts(cursor?: string, limit?: number, locationId?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListBankAccountsResponse>>;
    /**
     * Returns details of a [BankAccount]($m/BankAccount) identified by V1 bank account ID.
     *
     * @param v1BankAccountId    Connect V1 ID of the desired `BankAccount`. For more information, see
     *                                     [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https:
     *                                     //developer.squareup.com/docs/bank-accounts-api#retrieve-a-bank-account-by-
     *                                     using-an-id-issued-by-v1-bank-accounts-api).
     * @return Response from the API call
     */
    getBankAccountByV1Id(v1BankAccountId: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetBankAccountByV1IdResponse>>;
    /**
     * Returns details of a [BankAccount]($m/BankAccount)
     * linked to a Square account.
     *
     * @param bankAccountId   Square-issued ID of the desired `BankAccount`.
     * @return Response from the API call
     */
    getBankAccount(bankAccountId: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetBankAccountResponse>>;
}
