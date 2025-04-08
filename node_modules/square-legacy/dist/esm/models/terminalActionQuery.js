import { lazy, object, optional } from '../schema';
import { terminalActionQueryFilterSchema, } from './terminalActionQueryFilter';
import { terminalActionQuerySortSchema, } from './terminalActionQuerySort';
export const terminalActionQuerySchema = object({
    filter: ['filter', optional(lazy(() => terminalActionQueryFilterSchema))],
    sort: ['sort', optional(lazy(() => terminalActionQuerySortSchema))],
});
//# sourceMappingURL=terminalActionQuery.js.map