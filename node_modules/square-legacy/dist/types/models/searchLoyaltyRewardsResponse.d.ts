import { Schema } from '../schema';
import { Error } from './error';
import { LoyaltyReward } from './loyaltyReward';
/** A response that includes the loyalty rewards satisfying the search criteria. */
export interface SearchLoyaltyRewardsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * The loyalty rewards that satisfy the search criteria.
     * These are returned in descending order by `updated_at`.
     */
    rewards?: LoyaltyReward[];
    /**
     * The pagination cursor to be used in a subsequent
     * request. If empty, this is the final response.
     */
    cursor?: string;
}
export declare const searchLoyaltyRewardsResponseSchema: Schema<SearchLoyaltyRewardsResponse>;
