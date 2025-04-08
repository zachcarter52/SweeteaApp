import { nullable, object, optional, string } from '../schema';
export const retrieveInventoryChangesRequestSchema = object({
    locationIds: ['location_ids', optional(nullable(string()))],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=retrieveInventoryChangesRequest.js.map