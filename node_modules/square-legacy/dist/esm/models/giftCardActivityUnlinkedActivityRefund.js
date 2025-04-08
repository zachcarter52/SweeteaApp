import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const giftCardActivityUnlinkedActivityRefundSchema = object({
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    referenceId: ['reference_id', optional(nullable(string()))],
    paymentId: ['payment_id', optional(string())],
});
//# sourceMappingURL=giftCardActivityUnlinkedActivityRefund.js.map