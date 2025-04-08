import { boolean, nullable, object, optional, string } from '../schema';
export const inventoryCountSchema = object({
    catalogObjectId: ['catalog_object_id', optional(nullable(string()))],
    catalogObjectType: ['catalog_object_type', optional(nullable(string()))],
    state: ['state', optional(string())],
    locationId: ['location_id', optional(nullable(string()))],
    quantity: ['quantity', optional(nullable(string()))],
    calculatedAt: ['calculated_at', optional(string())],
    isEstimated: ['is_estimated', optional(boolean())],
});
//# sourceMappingURL=inventoryCount.js.map