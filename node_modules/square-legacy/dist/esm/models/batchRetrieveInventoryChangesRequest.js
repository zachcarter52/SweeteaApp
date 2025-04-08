import { array, nullable, number, object, optional, string, } from '../schema';
export const batchRetrieveInventoryChangesRequestSchema = object({
    catalogObjectIds: [
        'catalog_object_ids',
        optional(nullable(array(string()))),
    ],
    locationIds: ['location_ids', optional(nullable(array(string())))],
    types: ['types', optional(nullable(array(string())))],
    states: ['states', optional(nullable(array(string())))],
    updatedAfter: ['updated_after', optional(nullable(string()))],
    updatedBefore: ['updated_before', optional(nullable(string()))],
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
});
//# sourceMappingURL=batchRetrieveInventoryChangesRequest.js.map