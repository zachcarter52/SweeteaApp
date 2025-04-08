import { Schema } from '../schema';
import { GiftCardActivityActivate } from './giftCardActivityActivate';
import { GiftCardActivityAdjustDecrement } from './giftCardActivityAdjustDecrement';
import { GiftCardActivityAdjustIncrement } from './giftCardActivityAdjustIncrement';
import { GiftCardActivityBlock } from './giftCardActivityBlock';
import { GiftCardActivityClearBalance } from './giftCardActivityClearBalance';
import { GiftCardActivityDeactivate } from './giftCardActivityDeactivate';
import { GiftCardActivityImport } from './giftCardActivityImport';
import { GiftCardActivityImportReversal } from './giftCardActivityImportReversal';
import { GiftCardActivityLoad } from './giftCardActivityLoad';
import { GiftCardActivityRedeem } from './giftCardActivityRedeem';
import { GiftCardActivityRefund } from './giftCardActivityRefund';
import { GiftCardActivityTransferBalanceFrom } from './giftCardActivityTransferBalanceFrom';
import { GiftCardActivityTransferBalanceTo } from './giftCardActivityTransferBalanceTo';
import { GiftCardActivityUnblock } from './giftCardActivityUnblock';
import { GiftCardActivityUnlinkedActivityRefund } from './giftCardActivityUnlinkedActivityRefund';
import { Money } from './money';
/**
 * Represents an action performed on a [gift card]($m/GiftCard) that affects its state or balance.
 * A gift card activity contains information about a specific activity type. For example, a `REDEEM` activity
 * includes a `redeem_activity_details` field that contains information about the redemption.
 */
export interface GiftCardActivity {
    /** The Square-assigned ID of the gift card activity. */
    id?: string;
    /** Indicates the type of [gift card activity]($m/GiftCardActivity). */
    type: string;
    /** The ID of the [business location](entity:Location) where the activity occurred. */
    locationId: string;
    /** The timestamp when the gift card activity was created, in RFC 3339 format. */
    createdAt?: string;
    /**
     * The gift card ID. When creating a gift card activity, `gift_card_id` is not required if
     * `gift_card_gan` is specified.
     */
    giftCardId?: string | null;
    /**
     * The gift card account number (GAN). When creating a gift card activity, `gift_card_gan`
     * is not required if `gift_card_id` is specified.
     */
    giftCardGan?: string | null;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    giftCardBalanceMoney?: Money;
    /** Represents details about a `LOAD` [gift card activity type]($m/GiftCardActivityType). */
    loadActivityDetails?: GiftCardActivityLoad;
    /** Represents details about an `ACTIVATE` [gift card activity type]($m/GiftCardActivityType). */
    activateActivityDetails?: GiftCardActivityActivate;
    /** Represents details about a `REDEEM` [gift card activity type]($m/GiftCardActivityType). */
    redeemActivityDetails?: GiftCardActivityRedeem;
    /** Represents details about a `CLEAR_BALANCE` [gift card activity type]($m/GiftCardActivityType). */
    clearBalanceActivityDetails?: GiftCardActivityClearBalance;
    /** Represents details about a `DEACTIVATE` [gift card activity type]($m/GiftCardActivityType). */
    deactivateActivityDetails?: GiftCardActivityDeactivate;
    /** Represents details about an `ADJUST_INCREMENT` [gift card activity type]($m/GiftCardActivityType). */
    adjustIncrementActivityDetails?: GiftCardActivityAdjustIncrement;
    /** Represents details about an `ADJUST_DECREMENT` [gift card activity type]($m/GiftCardActivityType). */
    adjustDecrementActivityDetails?: GiftCardActivityAdjustDecrement;
    /** Represents details about a `REFUND` [gift card activity type]($m/GiftCardActivityType). */
    refundActivityDetails?: GiftCardActivityRefund;
    /** Represents details about an `UNLINKED_ACTIVITY_REFUND` [gift card activity type]($m/GiftCardActivityType). */
    unlinkedActivityRefundActivityDetails?: GiftCardActivityUnlinkedActivityRefund;
    /**
     * Represents details about an `IMPORT` [gift card activity type]($m/GiftCardActivityType).
     * This activity type is used when Square imports a third-party gift card, in which case the
     * `gan_source` of the gift card is set to `OTHER`.
     */
    importActivityDetails?: GiftCardActivityImport;
    /** Represents details about a `BLOCK` [gift card activity type]($m/GiftCardActivityType). */
    blockActivityDetails?: GiftCardActivityBlock;
    /** Represents details about an `UNBLOCK` [gift card activity type]($m/GiftCardActivityType). */
    unblockActivityDetails?: GiftCardActivityUnblock;
    /** Represents details about an `IMPORT_REVERSAL` [gift card activity type]($m/GiftCardActivityType). */
    importReversalActivityDetails?: GiftCardActivityImportReversal;
    /** Represents details about a `TRANSFER_BALANCE_TO` [gift card activity type]($m/GiftCardActivityType). */
    transferBalanceToActivityDetails?: GiftCardActivityTransferBalanceTo;
    /** Represents details about a `TRANSFER_BALANCE_FROM` [gift card activity type]($m/GiftCardActivityType). */
    transferBalanceFromActivityDetails?: GiftCardActivityTransferBalanceFrom;
}
export declare const giftCardActivitySchema: Schema<GiftCardActivity>;
