import { lazy, object, optional } from '../schema';
import { shiftFilterSchema } from './shiftFilter';
import { shiftSortSchema } from './shiftSort';
export const shiftQuerySchema = object({
    filter: ['filter', optional(lazy(() => shiftFilterSchema))],
    sort: ['sort', optional(lazy(() => shiftSortSchema))],
});
//# sourceMappingURL=shiftQuery.js.map