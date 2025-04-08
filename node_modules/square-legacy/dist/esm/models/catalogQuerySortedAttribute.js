import { nullable, object, optional, string } from '../schema';
export const catalogQuerySortedAttributeSchema = object({
    attributeName: ['attribute_name', string()],
    initialAttributeValue: [
        'initial_attribute_value',
        optional(nullable(string())),
    ],
    sortOrder: ['sort_order', optional(string())],
});
//# sourceMappingURL=catalogQuerySortedAttribute.js.map