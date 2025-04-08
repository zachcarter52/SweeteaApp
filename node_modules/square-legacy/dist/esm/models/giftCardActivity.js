import { lazy, nullable, object, optional, string } from '../schema';
import { giftCardActivityActivateSchema, } from './giftCardActivityActivate';
import { giftCardActivityAdjustDecrementSchema, } from './giftCardActivityAdjustDecrement';
import { giftCardActivityAdjustIncrementSchema, } from './giftCardActivityAdjustIncrement';
import { giftCardActivityBlockSchema, } from './giftCardActivityBlock';
import { giftCardActivityClearBalanceSchema, } from './giftCardActivityClearBalance';
import { giftCardActivityDeactivateSchema, } from './giftCardActivityDeactivate';
import { giftCardActivityImportSchema, } from './giftCardActivityImport';
import { giftCardActivityImportReversalSchema, } from './giftCardActivityImportReversal';
import { giftCardActivityLoadSchema, } from './giftCardActivityLoad';
import { giftCardActivityRedeemSchema, } from './giftCardActivityRedeem';
import { giftCardActivityRefundSchema, } from './giftCardActivityRefund';
import { giftCardActivityTransferBalanceFromSchema, } from './giftCardActivityTransferBalanceFrom';
import { giftCardActivityTransferBalanceToSchema, } from './giftCardActivityTransferBalanceTo';
import { giftCardActivityUnblockSchema, } from './giftCardActivityUnblock';
import { giftCardActivityUnlinkedActivityRefundSchema, } from './giftCardActivityUnlinkedActivityRefund';
import { moneySchema } from './money';
export const giftCardActivitySchema = object({
    id: ['id', optional(string())],
    type: ['type', string()],
    locationId: ['location_id', string()],
    createdAt: ['created_at', optional(string())],
    giftCardId: ['gift_card_id', optional(nullable(string()))],
    giftCardGan: ['gift_card_gan', optional(nullable(string()))],
    giftCardBalanceMoney: [
        'gift_card_balance_money',
        optional(lazy(() => moneySchema)),
    ],
    loadActivityDetails: [
        'load_activity_details',
        optional(lazy(() => giftCardActivityLoadSchema)),
    ],
    activateActivityDetails: [
        'activate_activity_details',
        optional(lazy(() => giftCardActivityActivateSchema)),
    ],
    redeemActivityDetails: [
        'redeem_activity_details',
        optional(lazy(() => giftCardActivityRedeemSchema)),
    ],
    clearBalanceActivityDetails: [
        'clear_balance_activity_details',
        optional(lazy(() => giftCardActivityClearBalanceSchema)),
    ],
    deactivateActivityDetails: [
        'deactivate_activity_details',
        optional(lazy(() => giftCardActivityDeactivateSchema)),
    ],
    adjustIncrementActivityDetails: [
        'adjust_increment_activity_details',
        optional(lazy(() => giftCardActivityAdjustIncrementSchema)),
    ],
    adjustDecrementActivityDetails: [
        'adjust_decrement_activity_details',
        optional(lazy(() => giftCardActivityAdjustDecrementSchema)),
    ],
    refundActivityDetails: [
        'refund_activity_details',
        optional(lazy(() => giftCardActivityRefundSchema)),
    ],
    unlinkedActivityRefundActivityDetails: [
        'unlinked_activity_refund_activity_details',
        optional(lazy(() => giftCardActivityUnlinkedActivityRefundSchema)),
    ],
    importActivityDetails: [
        'import_activity_details',
        optional(lazy(() => giftCardActivityImportSchema)),
    ],
    blockActivityDetails: [
        'block_activity_details',
        optional(lazy(() => giftCardActivityBlockSchema)),
    ],
    unblockActivityDetails: [
        'unblock_activity_details',
        optional(lazy(() => giftCardActivityUnblockSchema)),
    ],
    importReversalActivityDetails: [
        'import_reversal_activity_details',
        optional(lazy(() => giftCardActivityImportReversalSchema)),
    ],
    transferBalanceToActivityDetails: [
        'transfer_balance_to_activity_details',
        optional(lazy(() => giftCardActivityTransferBalanceToSchema)),
    ],
    transferBalanceFromActivityDetails: [
        'transfer_balance_from_activity_details',
        optional(lazy(() => giftCardActivityTransferBalanceFromSchema)),
    ],
});
//# sourceMappingURL=giftCardActivity.js.map