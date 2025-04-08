import { Schema } from '../schema';
/** Filter events by loyalty account. */
export interface LoyaltyEventLoyaltyAccountFilter {
    /** The ID of the [loyalty account](entity:LoyaltyAccount) associated with loyalty events. */
    loyaltyAccountId: string;
}
export declare const loyaltyEventLoyaltyAccountFilterSchema: Schema<LoyaltyEventLoyaltyAccountFilter>;
