import { nullable, number, object, optional, string } from '../schema';
export const listDevicesRequestSchema = object({
    cursor: ['cursor', optional(nullable(string()))],
    sortOrder: ['sort_order', optional(string())],
    limit: ['limit', optional(nullable(number()))],
    locationId: ['location_id', optional(nullable(string()))],
});
//# sourceMappingURL=listDevicesRequest.js.map