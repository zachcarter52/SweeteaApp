import { lazy, object, string } from '../schema';
import { moneySchema } from './money';
export const giftCardActivityAdjustIncrementSchema = object({
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    reason: ['reason', string()],
});
//# sourceMappingURL=giftCardActivityAdjustIncrement.js.map