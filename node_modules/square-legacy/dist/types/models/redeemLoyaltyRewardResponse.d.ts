import { Schema } from '../schema';
import { Error } from './error';
import { LoyaltyEvent } from './loyaltyEvent';
/** A response that includes the `LoyaltyEvent` published for redeeming the reward. */
export interface RedeemLoyaltyRewardResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Provides information about a loyalty event.
     * For more information, see [Search for Balance-Changing Loyalty Events](https://developer.squareup.com/docs/loyalty-api/loyalty-events).
     */
    event?: LoyaltyEvent;
}
export declare const redeemLoyaltyRewardResponseSchema: Schema<RedeemLoyaltyRewardResponse>;
