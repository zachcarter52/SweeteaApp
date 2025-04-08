import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const orderRoundingAdjustmentSchema = object({
    uid: ['uid', optional(nullable(string()))],
    name: ['name', optional(nullable(string()))],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
});
//# sourceMappingURL=orderRoundingAdjustment.js.map