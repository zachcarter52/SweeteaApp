import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const giftCardActivityRefundSchema = object({
    redeemActivityId: ['redeem_activity_id', optional(nullable(string()))],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    referenceId: ['reference_id', optional(nullable(string()))],
    paymentId: ['payment_id', optional(string())],
});
//# sourceMappingURL=giftCardActivityRefund.js.map