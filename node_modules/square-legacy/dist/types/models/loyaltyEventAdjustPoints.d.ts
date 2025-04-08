import { Schema } from '../schema';
/** Provides metadata when the event `type` is `ADJUST_POINTS`. */
export interface LoyaltyEventAdjustPoints {
    /** The Square-assigned ID of the [loyalty program](entity:LoyaltyProgram). */
    loyaltyProgramId?: string;
    /** The number of points added or removed. */
    points: number;
    /** The reason for the adjustment of points. */
    reason?: string | null;
}
export declare const loyaltyEventAdjustPointsSchema: Schema<LoyaltyEventAdjustPoints>;
