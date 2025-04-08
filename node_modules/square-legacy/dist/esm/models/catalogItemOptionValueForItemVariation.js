import { nullable, object, optional, string } from '../schema';
export const catalogItemOptionValueForItemVariationSchema = object({
    itemOptionId: ['item_option_id', optional(nullable(string()))],
    itemOptionValueId: ['item_option_value_id', optional(nullable(string()))],
});
//# sourceMappingURL=catalogItemOptionValueForItemVariation.js.map