import { nullable, object, optional, string } from '../schema';
export const catalogIdMappingSchema = object({
    clientObjectId: ['client_object_id', optional(nullable(string()))],
    objectId: ['object_id', optional(nullable(string()))],
});
//# sourceMappingURL=catalogIdMapping.js.map