import { bigint, dict, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const orderLineItemModifierSchema = object({
    uid: ['uid', optional(nullable(string()))],
    catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
    catalogVersion: ['catalog_version', optional(nullable(bigint()))],
    name: ['name', optional(nullable(string()))],
    quantity: ['quantity', optional(nullable(string()))],
    basePriceMoney: ['base_price_money', optional(lazy(() => moneySchema))],
    totalPriceMoney: ['total_price_money', optional(lazy(() => moneySchema))],
    metadata: ['metadata', optional(nullable(dict(string())))],
});
//# sourceMappingURL=orderLineItemModifier.js.map