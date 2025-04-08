import { array, nullable, object, optional, string } from '../schema';
export const customerCreationSourceFilterSchema = object({
    values: ['values', optional(nullable(array(string())))],
    rule: ['rule', optional(string())],
});
//# sourceMappingURL=customerCreationSourceFilter.js.map