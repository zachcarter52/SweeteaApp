import { array, nullable, object, optional, string } from '../schema';
export const catalogQueryItemVariationsForItemOptionValuesSchema = object({
    itemOptionValueIds: [
        'item_option_value_ids',
        optional(nullable(array(string()))),
    ],
});
//# sourceMappingURL=catalogQueryItemVariationsForItemOptionValues.js.map