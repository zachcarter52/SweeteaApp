import { lazy, object, optional } from '../schema';
import { moneySchema } from './money';
export const tenderCashDetailsSchema = object({
    buyerTenderedMoney: [
        'buyer_tendered_money',
        optional(lazy(() => moneySchema)),
    ],
    changeBackMoney: ['change_back_money', optional(lazy(() => moneySchema))],
});
//# sourceMappingURL=tenderCashDetails.js.map