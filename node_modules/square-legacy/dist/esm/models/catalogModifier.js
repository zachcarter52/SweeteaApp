import { array, lazy, nullable, number, object, optional, string, } from '../schema';
import { modifierLocationOverridesSchema, } from './modifierLocationOverrides';
import { moneySchema } from './money';
export const catalogModifierSchema = object({
    name: ['name', optional(nullable(string()))],
    priceMoney: ['price_money', optional(lazy(() => moneySchema))],
    ordinal: ['ordinal', optional(nullable(number()))],
    modifierListId: ['modifier_list_id', optional(nullable(string()))],
    locationOverrides: [
        'location_overrides',
        optional(nullable(array(lazy(() => modifierLocationOverridesSchema)))),
    ],
    imageId: ['image_id', optional(nullable(string()))],
});
//# sourceMappingURL=catalogModifier.js.map