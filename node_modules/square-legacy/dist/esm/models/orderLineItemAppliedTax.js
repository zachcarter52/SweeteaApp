import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const orderLineItemAppliedTaxSchema = object({
    uid: ['uid', optional(nullable(string()))],
    taxUid: ['tax_uid', string()],
    appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
});
//# sourceMappingURL=orderLineItemAppliedTax.js.map