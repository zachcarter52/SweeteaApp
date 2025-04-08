import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { invoicePaymentReminderSchema, } from './invoicePaymentReminder';
import { moneySchema } from './money';
export const invoicePaymentRequestSchema = object({
    uid: ['uid', optional(nullable(string()))],
    requestMethod: ['request_method', optional(string())],
    requestType: ['request_type', optional(string())],
    dueDate: ['due_date', optional(nullable(string()))],
    fixedAmountRequestedMoney: [
        'fixed_amount_requested_money',
        optional(lazy(() => moneySchema)),
    ],
    percentageRequested: ['percentage_requested', optional(nullable(string()))],
    tippingEnabled: ['tipping_enabled', optional(nullable(boolean()))],
    automaticPaymentSource: ['automatic_payment_source', optional(string())],
    cardId: ['card_id', optional(nullable(string()))],
    reminders: [
        'reminders',
        optional(nullable(array(lazy(() => invoicePaymentReminderSchema)))),
    ],
    computedAmountMoney: [
        'computed_amount_money',
        optional(lazy(() => moneySchema)),
    ],
    totalCompletedAmountMoney: [
        'total_completed_amount_money',
        optional(lazy(() => moneySchema)),
    ],
    roundingAdjustmentIncludedMoney: [
        'rounding_adjustment_included_money',
        optional(lazy(() => moneySchema)),
    ],
});
//# sourceMappingURL=invoicePaymentRequest.js.map