import { nullable, object, optional, string } from '../schema';
export const paymentBalanceActivityAutomaticSavingsDetailSchema = object({
    paymentId: ['payment_id', optional(nullable(string()))],
    payoutId: ['payout_id', optional(nullable(string()))],
});
//# sourceMappingURL=paymentBalanceActivityAutomaticSavingsDetail.js.map