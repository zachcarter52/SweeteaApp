import { bigint, boolean, dict, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const orderLineItemTaxSchema = object({
    uid: ['uid', optional(nullable(string()))],
    catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
    catalogVersion: ['catalog_version', optional(nullable(bigint()))],
    name: ['name', optional(nullable(string()))],
    type: ['type', optional(string())],
    percentage: ['percentage', optional(nullable(string()))],
    metadata: ['metadata', optional(nullable(dict(string())))],
    appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
    scope: ['scope', optional(string())],
    autoApplied: ['auto_applied', optional(boolean())],
});
//# sourceMappingURL=orderLineItemTax.js.map