import { boolean, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const modifierLocationOverridesSchema = object({
    locationId: ['location_id', optional(nullable(string()))],
    priceMoney: ['price_money', optional(lazy(() => moneySchema))],
    soldOut: ['sold_out', optional(boolean())],
});
//# sourceMappingURL=modifierLocationOverrides.js.map