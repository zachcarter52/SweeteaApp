import { Schema } from '../schema';
import { LoyaltyAccountMapping } from './loyaltyAccountMapping';
/** The search criteria for the loyalty accounts. */
export interface SearchLoyaltyAccountsRequestLoyaltyAccountQuery {
    /**
     * The set of mappings to use in the loyalty account search.
     * This cannot be combined with `customer_ids`.
     * Max: 30 mappings
     */
    mappings?: LoyaltyAccountMapping[] | null;
    /**
     * The set of customer IDs to use in the loyalty account search.
     * This cannot be combined with `mappings`.
     * Max: 30 customer IDs
     */
    customerIds?: string[] | null;
}
export declare const searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema: Schema<SearchLoyaltyAccountsRequestLoyaltyAccountQuery>;
