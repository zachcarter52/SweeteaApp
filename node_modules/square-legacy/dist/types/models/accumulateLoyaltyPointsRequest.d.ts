import { Schema } from '../schema';
import { LoyaltyEventAccumulatePoints } from './loyaltyEventAccumulatePoints';
/** Represents an [AccumulateLoyaltyPoints]($e/Loyalty/AccumulateLoyaltyPoints) request. */
export interface AccumulateLoyaltyPointsRequest {
    /** Provides metadata when the event `type` is `ACCUMULATE_POINTS`. */
    accumulatePoints: LoyaltyEventAccumulatePoints;
    /**
     * A unique string that identifies the `AccumulateLoyaltyPoints` request.
     * Keys can be any valid string but must be unique for every request.
     */
    idempotencyKey: string;
    /** The [location](entity:Location) where the purchase was made. */
    locationId: string;
}
export declare const accumulateLoyaltyPointsRequestSchema: Schema<AccumulateLoyaltyPointsRequest>;
