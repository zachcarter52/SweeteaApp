import { lazy, nullable, object, optional, string } from '../schema';
import { customAttributeSchema } from './customAttribute';
export const bulkUpsertOrderCustomAttributesRequestUpsertCustomAttributeSchema = object({
    customAttribute: ['custom_attribute', lazy(() => customAttributeSchema)],
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
    orderId: ['order_id', string()],
});
//# sourceMappingURL=bulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute.js.map