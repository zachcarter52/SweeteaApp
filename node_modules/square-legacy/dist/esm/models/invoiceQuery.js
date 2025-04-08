import { lazy, object, optional } from '../schema';
import { invoiceFilterSchema } from './invoiceFilter';
import { invoiceSortSchema } from './invoiceSort';
export const invoiceQuerySchema = object({
    filter: ['filter', lazy(() => invoiceFilterSchema)],
    sort: ['sort', optional(lazy(() => invoiceSortSchema))],
});
//# sourceMappingURL=invoiceQuery.js.map