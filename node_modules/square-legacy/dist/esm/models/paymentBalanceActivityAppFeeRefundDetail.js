import { nullable, object, optional, string } from '../schema';
export const paymentBalanceActivityAppFeeRefundDetailSchema = object({
    paymentId: ['payment_id', optional(nullable(string()))],
    refundId: ['refund_id', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
});
//# sourceMappingURL=paymentBalanceActivityAppFeeRefundDetail.js.map