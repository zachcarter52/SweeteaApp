import { bigint, nullable, object, optional, string } from '../schema';
export const catalogQueryRangeSchema = object({
    attributeName: ['attribute_name', string()],
    attributeMinValue: ['attribute_min_value', optional(nullable(bigint()))],
    attributeMaxValue: ['attribute_max_value', optional(nullable(bigint()))],
});
//# sourceMappingURL=catalogQueryRange.js.map