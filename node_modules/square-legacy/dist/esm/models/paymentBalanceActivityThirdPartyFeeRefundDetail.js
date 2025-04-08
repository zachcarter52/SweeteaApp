import { nullable, object, optional, string } from '../schema';
export const paymentBalanceActivityThirdPartyFeeRefundDetailSchema = object({
    paymentId: ['payment_id', optional(nullable(string()))],
    refundId: ['refund_id', optional(nullable(string()))],
});
//# sourceMappingURL=paymentBalanceActivityThirdPartyFeeRefundDetail.js.map