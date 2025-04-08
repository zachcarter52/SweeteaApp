import { boolean, lazy, nullable, object, optional, string, } from '../schema';
import { destinationDetailsCashRefundDetailsSchema, } from './destinationDetailsCashRefundDetails';
import { destinationDetailsExternalRefundDetailsSchema, } from './destinationDetailsExternalRefundDetails';
import { moneySchema } from './money';
export const refundPaymentRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    appFeeMoney: ['app_fee_money', optional(lazy(() => moneySchema))],
    paymentId: ['payment_id', optional(nullable(string()))],
    destinationId: ['destination_id', optional(nullable(string()))],
    unlinked: ['unlinked', optional(nullable(boolean()))],
    locationId: ['location_id', optional(nullable(string()))],
    customerId: ['customer_id', optional(nullable(string()))],
    reason: ['reason', optional(nullable(string()))],
    paymentVersionToken: ['payment_version_token', optional(nullable(string()))],
    teamMemberId: ['team_member_id', optional(nullable(string()))],
    cashDetails: [
        'cash_details',
        optional(lazy(() => destinationDetailsCashRefundDetailsSchema)),
    ],
    externalDetails: [
        'external_details',
        optional(lazy(() => destinationDetailsExternalRefundDetailsSchema)),
    ],
});
//# sourceMappingURL=refundPaymentRequest.js.map