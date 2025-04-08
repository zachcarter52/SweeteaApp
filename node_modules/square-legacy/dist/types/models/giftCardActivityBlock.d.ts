import { Schema } from '../schema';
/** Represents details about a `BLOCK` [gift card activity type]($m/GiftCardActivityType). */
export interface GiftCardActivityBlock {
    /** Indicates the reason for blocking a [gift card]($m/GiftCard). */
    reason: string;
}
export declare const giftCardActivityBlockSchema: Schema<GiftCardActivityBlock>;
