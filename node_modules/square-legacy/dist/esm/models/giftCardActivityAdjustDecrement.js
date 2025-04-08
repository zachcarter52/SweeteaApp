import { lazy, object, string } from '../schema';
import { moneySchema } from './money';
export const giftCardActivityAdjustDecrementSchema = object({
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    reason: ['reason', string()],
});
//# sourceMappingURL=giftCardActivityAdjustDecrement.js.map