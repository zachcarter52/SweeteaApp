import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const processingFeeSchema = object({
    effectiveAt: ['effective_at', optional(nullable(string()))],
    type: ['type', optional(nullable(string()))],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
});
//# sourceMappingURL=processingFee.js.map