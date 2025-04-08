import { Schema } from '../schema';
import { Error } from './error';
import { LoyaltyEvent } from './loyaltyEvent';
/** Represents an [AdjustLoyaltyPoints]($e/Loyalty/AdjustLoyaltyPoints) request. */
export interface AdjustLoyaltyPointsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Provides information about a loyalty event.
     * For more information, see [Search for Balance-Changing Loyalty Events](https://developer.squareup.com/docs/loyalty-api/loyalty-events).
     */
    event?: LoyaltyEvent;
}
export declare const adjustLoyaltyPointsResponseSchema: Schema<AdjustLoyaltyPointsResponse>;
