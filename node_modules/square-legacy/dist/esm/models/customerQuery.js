import { lazy, object, optional } from '../schema';
import { customerFilterSchema } from './customerFilter';
import { customerSortSchema } from './customerSort';
export const customerQuerySchema = object({
    filter: ['filter', optional(lazy(() => customerFilterSchema))],
    sort: ['sort', optional(lazy(() => customerSortSchema))],
});
//# sourceMappingURL=customerQuery.js.map