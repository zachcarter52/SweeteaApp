import { bigint, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const orderReturnTaxSchema = object({
    uid: ['uid', optional(nullable(string()))],
    sourceTaxUid: ['source_tax_uid', optional(nullable(string()))],
    catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
    catalogVersion: ['catalog_version', optional(nullable(bigint()))],
    name: ['name', optional(nullable(string()))],
    type: ['type', optional(string())],
    percentage: ['percentage', optional(nullable(string()))],
    appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
    scope: ['scope', optional(string())],
});
//# sourceMappingURL=orderReturnTax.js.map