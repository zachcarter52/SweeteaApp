import { nullable, object, optional, string } from '../schema';
export const paymentBalanceActivityOpenDisputeDetailSchema = object({
    paymentId: ['payment_id', optional(nullable(string()))],
    disputeId: ['dispute_id', optional(nullable(string()))],
});
//# sourceMappingURL=paymentBalanceActivityOpenDisputeDetail.js.map