import { object, optional, string } from '../schema';
export const shiftSortSchema = object({
    field: ['field', optional(string())],
    order: ['order', optional(string())],
});
//# sourceMappingURL=shiftSort.js.map