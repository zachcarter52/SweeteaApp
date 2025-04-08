import { lazy, nullable, object, optional, string } from '../schema';
import { customAttributeSchema } from './customAttribute';
export const upsertCustomerCustomAttributeRequestSchema = object({
    customAttribute: ['custom_attribute', lazy(() => customAttributeSchema)],
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
});
//# sourceMappingURL=upsertCustomerCustomAttributeRequest.js.map