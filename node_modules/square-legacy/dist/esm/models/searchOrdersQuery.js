import { lazy, object, optional } from '../schema';
import { searchOrdersFilterSchema, } from './searchOrdersFilter';
import { searchOrdersSortSchema } from './searchOrdersSort';
export const searchOrdersQuerySchema = object({
    filter: ['filter', optional(lazy(() => searchOrdersFilterSchema))],
    sort: ['sort', optional(lazy(() => searchOrdersSortSchema))],
});
//# sourceMappingURL=searchOrdersQuery.js.map