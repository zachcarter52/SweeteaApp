import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const giftCardActivityRedeemSchema = object({
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    paymentId: ['payment_id', optional(string())],
    referenceId: ['reference_id', optional(nullable(string()))],
    status: ['status', optional(string())],
});
//# sourceMappingURL=giftCardActivityRedeem.js.map