import { lazy, object, optional, string } from '../schema';
import { searchVendorsRequestFilterSchema, } from './searchVendorsRequestFilter';
import { searchVendorsRequestSortSchema, } from './searchVendorsRequestSort';
export const searchVendorsRequestSchema = object({
    filter: ['filter', optional(lazy(() => searchVendorsRequestFilterSchema))],
    sort: ['sort', optional(lazy(() => searchVendorsRequestSortSchema))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchVendorsRequest.js.map