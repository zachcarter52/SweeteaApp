import { lazy, object, optional } from '../schema';
import { searchEventsFilterSchema, } from './searchEventsFilter';
import { searchEventsSortSchema } from './searchEventsSort';
export const searchEventsQuerySchema = object({
    filter: ['filter', optional(lazy(() => searchEventsFilterSchema))],
    sort: ['sort', optional(lazy(() => searchEventsSortSchema))],
});
//# sourceMappingURL=searchEventsQuery.js.map