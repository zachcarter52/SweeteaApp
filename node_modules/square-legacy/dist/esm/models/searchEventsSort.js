import { object, optional, string } from '../schema';
export const searchEventsSortSchema = object({
    field: ['field', optional(string())],
    order: ['order', optional(string())],
});
//# sourceMappingURL=searchEventsSort.js.map