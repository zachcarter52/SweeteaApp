import { lazy, object, optional } from '../schema';
import { searchSubscriptionsFilterSchema, } from './searchSubscriptionsFilter';
export const searchSubscriptionsQuerySchema = object({ filter: ['filter', optional(lazy(() => searchSubscriptionsFilterSchema))] });
//# sourceMappingURL=searchSubscriptionsQuery.js.map