import { lazy, number, object, optional, string } from '../schema';
import { searchEventsQuerySchema, } from './searchEventsQuery';
export const searchEventsRequestSchema = object({
    cursor: ['cursor', optional(string())],
    limit: ['limit', optional(number())],
    query: ['query', optional(lazy(() => searchEventsQuerySchema))],
});
//# sourceMappingURL=searchEventsRequest.js.map