import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { destinationDetailsSchema, } from './destinationDetails';
import { moneySchema } from './money';
import { processingFeeSchema } from './processingFee';
export const paymentRefundSchema = object({
    id: ['id', string()],
    status: ['status', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
    unlinked: ['unlinked', optional(boolean())],
    destinationType: ['destination_type', optional(nullable(string()))],
    destinationDetails: [
        'destination_details',
        optional(lazy(() => destinationDetailsSchema)),
    ],
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    appFeeMoney: ['app_fee_money', optional(lazy(() => moneySchema))],
    processingFee: [
        'processing_fee',
        optional(nullable(array(lazy(() => processingFeeSchema)))),
    ],
    paymentId: ['payment_id', optional(nullable(string()))],
    orderId: ['order_id', optional(nullable(string()))],
    reason: ['reason', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    teamMemberId: ['team_member_id', optional(string())],
    terminalRefundId: ['terminal_refund_id', optional(string())],
});
//# sourceMappingURL=paymentRefund.js.map