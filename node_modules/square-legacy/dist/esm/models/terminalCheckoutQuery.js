import { lazy, object, optional } from '../schema';
import { terminalCheckoutQueryFilterSchema, } from './terminalCheckoutQueryFilter';
import { terminalCheckoutQuerySortSchema, } from './terminalCheckoutQuerySort';
export const terminalCheckoutQuerySchema = object({
    filter: ['filter', optional(lazy(() => terminalCheckoutQueryFilterSchema))],
    sort: ['sort', optional(lazy(() => terminalCheckoutQuerySortSchema))],
});
//# sourceMappingURL=terminalCheckoutQuery.js.map