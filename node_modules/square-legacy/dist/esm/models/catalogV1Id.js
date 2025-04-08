import { nullable, object, optional, string } from '../schema';
export const catalogV1IdSchema = object({
    catalogV1Id: ['catalog_v1_id', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
});
//# sourceMappingURL=catalogV1Id.js.map