import { array, lazy, nullable, object, optional, string, } from '../schema';
import { deviceCheckoutOptionsSchema, } from './deviceCheckoutOptions';
import { moneySchema } from './money';
import { paymentOptionsSchema } from './paymentOptions';
export const terminalCheckoutSchema = object({
    id: ['id', optional(string())],
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    referenceId: ['reference_id', optional(nullable(string()))],
    note: ['note', optional(nullable(string()))],
    orderId: ['order_id', optional(nullable(string()))],
    paymentOptions: [
        'payment_options',
        optional(lazy(() => paymentOptionsSchema)),
    ],
    deviceOptions: ['device_options', lazy(() => deviceCheckoutOptionsSchema)],
    deadlineDuration: ['deadline_duration', optional(nullable(string()))],
    status: ['status', optional(string())],
    cancelReason: ['cancel_reason', optional(string())],
    paymentIds: ['payment_ids', optional(array(string()))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    appId: ['app_id', optional(string())],
    locationId: ['location_id', optional(string())],
    paymentType: ['payment_type', optional(string())],
    teamMemberId: ['team_member_id', optional(nullable(string()))],
    customerId: ['customer_id', optional(nullable(string()))],
    appFeeMoney: ['app_fee_money', optional(lazy(() => moneySchema))],
    statementDescriptionIdentifier: [
        'statement_description_identifier',
        optional(nullable(string())),
    ],
    tipMoney: ['tip_money', optional(lazy(() => moneySchema))],
});
//# sourceMappingURL=terminalCheckout.js.map