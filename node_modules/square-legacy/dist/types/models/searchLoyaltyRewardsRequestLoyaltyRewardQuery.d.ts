import { Schema } from '../schema';
/** The set of search requirements. */
export interface SearchLoyaltyRewardsRequestLoyaltyRewardQuery {
    /** The ID of the [loyalty account](entity:LoyaltyAccount) to which the loyalty reward belongs. */
    loyaltyAccountId: string;
    /** The status of the loyalty reward. */
    status?: string;
}
export declare const searchLoyaltyRewardsRequestLoyaltyRewardQuerySchema: Schema<SearchLoyaltyRewardsRequestLoyaltyRewardQuery>;
