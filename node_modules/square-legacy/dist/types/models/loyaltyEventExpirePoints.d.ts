import { Schema } from '../schema';
/** Provides metadata when the event `type` is `EXPIRE_POINTS`. */
export interface LoyaltyEventExpirePoints {
    /** The Square-assigned ID of the [loyalty program](entity:LoyaltyProgram). */
    loyaltyProgramId: string;
    /** The number of points expired. */
    points: number;
}
export declare const loyaltyEventExpirePointsSchema: Schema<LoyaltyEventExpirePoints>;
