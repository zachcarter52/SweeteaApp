import { lazy, object, optional } from '../schema';
import { terminalRefundQueryFilterSchema, } from './terminalRefundQueryFilter';
import { terminalRefundQuerySortSchema, } from './terminalRefundQuerySort';
export const terminalRefundQuerySchema = object({
    filter: ['filter', optional(lazy(() => terminalRefundQueryFilterSchema))],
    sort: ['sort', optional(lazy(() => terminalRefundQuerySortSchema))],
});
//# sourceMappingURL=terminalRefundQuery.js.map