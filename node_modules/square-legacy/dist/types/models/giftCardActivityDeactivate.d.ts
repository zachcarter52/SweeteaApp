import { Schema } from '../schema';
/** Represents details about a `DEACTIVATE` [gift card activity type]($m/GiftCardActivityType). */
export interface GiftCardActivityDeactivate {
    /** Indicates the reason for deactivating a [gift card]($m/GiftCard). */
    reason: string;
}
export declare const giftCardActivityDeactivateSchema: Schema<GiftCardActivityDeactivate>;
