import { array, lazy, number, object, optional, string, } from '../schema';
import { searchSubscriptionsQuerySchema, } from './searchSubscriptionsQuery';
export const searchSubscriptionsRequestSchema = object({
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
    query: ['query', optional(lazy(() => searchSubscriptionsQuerySchema))],
    include: ['include', optional(array(string()))],
});
//# sourceMappingURL=searchSubscriptionsRequest.js.map