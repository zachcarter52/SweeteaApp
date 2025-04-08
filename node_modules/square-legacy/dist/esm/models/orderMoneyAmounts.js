import { lazy, object, optional } from '../schema';
import { moneySchema } from './money';
export const orderMoneyAmountsSchema = object({
    totalMoney: ['total_money', optional(lazy(() => moneySchema))],
    taxMoney: ['tax_money', optional(lazy(() => moneySchema))],
    discountMoney: ['discount_money', optional(lazy(() => moneySchema))],
    tipMoney: ['tip_money', optional(lazy(() => moneySchema))],
    serviceChargeMoney: [
        'service_charge_money',
        optional(lazy(() => moneySchema)),
    ],
});
//# sourceMappingURL=orderMoneyAmounts.js.map