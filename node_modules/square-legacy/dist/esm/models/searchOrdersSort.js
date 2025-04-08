import { object, optional, string } from '../schema';
export const searchOrdersSortSchema = object({
    sortField: ['sort_field', string()],
    sortOrder: ['sort_order', optional(string())],
});
//# sourceMappingURL=searchOrdersSort.js.map