import { nullable, object, optional, string } from '../schema';
export const retrieveInventoryCountRequestSchema = object({
    locationIds: ['location_ids', optional(nullable(string()))],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=retrieveInventoryCountRequest.js.map