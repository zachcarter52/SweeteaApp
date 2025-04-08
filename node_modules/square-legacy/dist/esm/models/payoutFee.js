import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const payoutFeeSchema = object({
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    effectiveAt: ['effective_at', optional(nullable(string()))],
    type: ['type', optional(string())],
});
//# sourceMappingURL=payoutFee.js.map