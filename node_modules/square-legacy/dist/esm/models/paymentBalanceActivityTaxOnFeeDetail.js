import { nullable, object, optional, string } from '../schema';
export const paymentBalanceActivityTaxOnFeeDetailSchema = object({
    paymentId: ['payment_id', optional(nullable(string()))],
    taxRateDescription: ['tax_rate_description', optional(nullable(string()))],
});
//# sourceMappingURL=paymentBalanceActivityTaxOnFeeDetail.js.map