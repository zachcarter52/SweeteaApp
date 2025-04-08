import { Schema } from '../schema';
import { GiftCardActivity } from './giftCardActivity';
/** A request to create a gift card activity. */
export interface CreateGiftCardActivityRequest {
    /** A unique string that identifies the `CreateGiftCardActivity` request. */
    idempotencyKey: string;
    /**
     * Represents an action performed on a [gift card]($m/GiftCard) that affects its state or balance.
     * A gift card activity contains information about a specific activity type. For example, a `REDEEM` activity
     * includes a `redeem_activity_details` field that contains information about the redemption.
     */
    giftCardActivity: GiftCardActivity;
}
export declare const createGiftCardActivityRequestSchema: Schema<CreateGiftCardActivityRequest>;
