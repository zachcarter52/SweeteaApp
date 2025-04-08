import { nullable, number, object, optional, string } from '../schema';
export const catalogItemOptionValueSchema = object({
    itemOptionId: ['item_option_id', optional(nullable(string()))],
    name: ['name', optional(nullable(string()))],
    description: ['description', optional(nullable(string()))],
    color: ['color', optional(nullable(string()))],
    ordinal: ['ordinal', optional(nullable(number()))],
});
//# sourceMappingURL=catalogItemOptionValue.js.map