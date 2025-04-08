import { array, object, string } from '../schema';
export const catalogQuerySetSchema = object({
    attributeName: ['attribute_name', string()],
    attributeValues: ['attribute_values', array(string())],
});
//# sourceMappingURL=catalogQuerySet.js.map