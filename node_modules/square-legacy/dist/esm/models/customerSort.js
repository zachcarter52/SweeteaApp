import { object, optional, string } from '../schema';
export const customerSortSchema = object({
    field: ['field', optional(string())],
    order: ['order', optional(string())],
});
//# sourceMappingURL=customerSort.js.map