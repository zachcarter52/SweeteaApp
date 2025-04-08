import { Schema } from '../schema';
import { Error } from './error';
import { LoyaltyAccount } from './loyaltyAccount';
/** A response that includes loyalty accounts that satisfy the search criteria. */
export interface SearchLoyaltyAccountsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * The loyalty accounts that met the search criteria,
     * in order of creation date.
     */
    loyaltyAccounts?: LoyaltyAccount[];
    /**
     * The pagination cursor to use in a subsequent
     * request. If empty, this is the final response.
     * For more information,
     * see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
}
export declare const searchLoyaltyAccountsResponseSchema: Schema<SearchLoyaltyAccountsResponse>;
