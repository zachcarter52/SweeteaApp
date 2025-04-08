import { lazy, object, optional } from '../schema';
import { moneySchema } from './money';
export const destinationDetailsCashRefundDetailsSchema = object({
    sellerSuppliedMoney: ['seller_supplied_money', lazy(() => moneySchema)],
    changeBackMoney: ['change_back_money', optional(lazy(() => moneySchema))],
});
//# sourceMappingURL=destinationDetailsCashRefundDetails.js.map