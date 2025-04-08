import { Schema } from '../schema';
/** Represents details about a `CLEAR_BALANCE` [gift card activity type]($m/GiftCardActivityType). */
export interface GiftCardActivityClearBalance {
    /** Indicates the reason for clearing the balance of a [gift card]($m/GiftCard). */
    reason: string;
}
export declare const giftCardActivityClearBalanceSchema: Schema<GiftCardActivityClearBalance>;
