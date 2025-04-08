import { nullable, object, optional, string } from '../schema';
export const paymentBalanceActivityRefundDetailSchema = object({
    paymentId: ['payment_id', optional(nullable(string()))],
    refundId: ['refund_id', optional(nullable(string()))],
});
//# sourceMappingURL=paymentBalanceActivityRefundDetail.js.map