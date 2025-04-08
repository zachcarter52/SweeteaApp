import { nullable, object, optional, string } from '../schema';
export const paymentBalanceActivityAutomaticSavingsReversedDetailSchema = object({
    paymentId: ['payment_id', optional(nullable(string()))],
    payoutId: ['payout_id', optional(nullable(string()))],
});
//# sourceMappingURL=paymentBalanceActivityAutomaticSavingsReversedDetail.js.map