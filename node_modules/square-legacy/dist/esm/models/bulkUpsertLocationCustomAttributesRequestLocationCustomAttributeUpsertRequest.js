import { lazy, nullable, object, optional, string } from '../schema';
import { customAttributeSchema } from './customAttribute';
export const bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequestSchema = object({
    locationId: ['location_id', string()],
    customAttribute: ['custom_attribute', lazy(() => customAttributeSchema)],
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
});
//# sourceMappingURL=bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest.js.map