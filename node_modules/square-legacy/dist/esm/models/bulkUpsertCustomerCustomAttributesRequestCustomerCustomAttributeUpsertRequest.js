import { lazy, nullable, object, optional, string } from '../schema';
import { customAttributeSchema } from './customAttribute';
export const bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequestSchema = object({
    customerId: ['customer_id', string()],
    customAttribute: ['custom_attribute', lazy(() => customAttributeSchema)],
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
});
//# sourceMappingURL=bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest.js.map