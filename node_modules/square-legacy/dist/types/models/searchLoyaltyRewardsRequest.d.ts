import { Schema } from '../schema';
import { SearchLoyaltyRewardsRequestLoyaltyRewardQuery } from './searchLoyaltyRewardsRequestLoyaltyRewardQuery';
/** A request to search for loyalty rewards. */
export interface SearchLoyaltyRewardsRequest {
    /** The set of search requirements. */
    query?: SearchLoyaltyRewardsRequestLoyaltyRewardQuery;
    /** The maximum number of results to return in the response. The default value is 30. */
    limit?: number;
    /**
     * A pagination cursor returned by a previous call to
     * this endpoint. Provide this to retrieve the next set of
     * results for the original query.
     * For more information,
     * see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
}
export declare const searchLoyaltyRewardsRequestSchema: Schema<SearchLoyaltyRewardsRequest>;
