import { bigint, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const orderReturnLineItemModifierSchema = object({
    uid: ['uid', optional(nullable(string()))],
    sourceModifierUid: ['source_modifier_uid', optional(nullable(string()))],
    catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
    catalogVersion: ['catalog_version', optional(nullable(bigint()))],
    name: ['name', optional(nullable(string()))],
    basePriceMoney: ['base_price_money', optional(lazy(() => moneySchema))],
    totalPriceMoney: ['total_price_money', optional(lazy(() => moneySchema))],
    quantity: ['quantity', optional(nullable(string()))],
});
//# sourceMappingURL=orderReturnLineItemModifier.js.map