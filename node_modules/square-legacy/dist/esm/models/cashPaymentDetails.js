import { lazy, object, optional } from '../schema';
import { moneySchema } from './money';
export const cashPaymentDetailsSchema = object({
    buyerSuppliedMoney: ['buyer_supplied_money', lazy(() => moneySchema)],
    changeBackMoney: ['change_back_money', optional(lazy(() => moneySchema))],
});
//# sourceMappingURL=cashPaymentDetails.js.map