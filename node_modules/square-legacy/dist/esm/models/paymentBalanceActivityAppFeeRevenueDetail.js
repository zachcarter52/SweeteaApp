import { nullable, object, optional, string } from '../schema';
export const paymentBalanceActivityAppFeeRevenueDetailSchema = object({
    paymentId: ['payment_id', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
});
//# sourceMappingURL=paymentBalanceActivityAppFeeRevenueDetail.js.map