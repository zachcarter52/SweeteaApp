import { nullable, object, optional, string } from '../schema';
export const paymentBalanceActivityDisputeDetailSchema = object({
    paymentId: ['payment_id', optional(nullable(string()))],
    disputeId: ['dispute_id', optional(nullable(string()))],
});
//# sourceMappingURL=paymentBalanceActivityDisputeDetail.js.map