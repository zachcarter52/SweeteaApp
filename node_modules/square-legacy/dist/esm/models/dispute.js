import { array, lazy, nullable, number, object, optional, string, } from '../schema';
import { disputedPaymentSchema } from './disputedPayment';
import { moneySchema } from './money';
export const disputeSchema = object({
    disputeId: ['dispute_id', optional(nullable(string()))],
    id: ['id', optional(string())],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    reason: ['reason', optional(string())],
    state: ['state', optional(string())],
    dueAt: ['due_at', optional(nullable(string()))],
    disputedPayment: [
        'disputed_payment',
        optional(lazy(() => disputedPaymentSchema)),
    ],
    evidenceIds: ['evidence_ids', optional(nullable(array(string())))],
    cardBrand: ['card_brand', optional(string())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    brandDisputeId: ['brand_dispute_id', optional(nullable(string()))],
    reportedDate: ['reported_date', optional(nullable(string()))],
    reportedAt: ['reported_at', optional(nullable(string()))],
    version: ['version', optional(number())],
    locationId: ['location_id', optional(nullable(string()))],
});
//# sourceMappingURL=dispute.js.map