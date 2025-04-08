import { array, nullable, object, optional, string } from '../schema';
export const searchVendorsRequestFilterSchema = object({
    name: ['name', optional(nullable(array(string())))],
    status: ['status', optional(nullable(array(string())))],
});
//# sourceMappingURL=searchVendorsRequestFilter.js.map