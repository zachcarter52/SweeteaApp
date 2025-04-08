import { array, nullable, number, object, optional, string, } from '../schema';
export const batchRetrieveInventoryCountsRequestSchema = object({
    catalogObjectIds: [
        'catalog_object_ids',
        optional(nullable(array(string()))),
    ],
    locationIds: ['location_ids', optional(nullable(array(string())))],
    updatedAfter: ['updated_after', optional(nullable(string()))],
    cursor: ['cursor', optional(nullable(string()))],
    states: ['states', optional(nullable(array(string())))],
    limit: ['limit', optional(nullable(number()))],
});
//# sourceMappingURL=batchRetrieveInventoryCountsRequest.js.map