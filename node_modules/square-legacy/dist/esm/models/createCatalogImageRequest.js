import { boolean, lazy, object, optional, string } from '../schema';
import { catalogObjectSchema } from './catalogObject';
export const createCatalogImageRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    objectId: ['object_id', optional(string())],
    image: ['image', lazy(() => catalogObjectSchema)],
    isPrimary: ['is_primary', optional(boolean())],
});
//# sourceMappingURL=createCatalogImageRequest.js.map