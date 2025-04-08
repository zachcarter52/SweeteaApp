import { array, boolean, lazy, number, object, optional, string, } from '../schema';
import { searchOrdersQuerySchema, } from './searchOrdersQuery';
export const searchOrdersRequestSchema = object({
    locationIds: ['location_ids', optional(array(string()))],
    cursor: ['cursor', optional(string())],
    query: ['query', optional(lazy(() => searchOrdersQuerySchema))],
    limit: ['limit', optional(number())],
    returnEntries: ['return_entries', optional(boolean())],
});
//# sourceMappingURL=searchOrdersRequest.js.map