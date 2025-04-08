import { Schema } from '../schema';
/** Provides metadata when the event `type` is `OTHER`. */
export interface LoyaltyEventOther {
    /** The Square-assigned ID of the [loyalty program](entity:LoyaltyProgram). */
    loyaltyProgramId: string;
    /** The number of points added or removed. */
    points: number;
}
export declare const loyaltyEventOtherSchema: Schema<LoyaltyEventOther>;
