import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const orderReturnTipSchema = object({
    uid: ['uid', optional(nullable(string()))],
    appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
    sourceTenderUid: ['source_tender_uid', optional(nullable(string()))],
    sourceTenderId: ['source_tender_id', optional(nullable(string()))],
});
//# sourceMappingURL=orderReturnTip.js.map