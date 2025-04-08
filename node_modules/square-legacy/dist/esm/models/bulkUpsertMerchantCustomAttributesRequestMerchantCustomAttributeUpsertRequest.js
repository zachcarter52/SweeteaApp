import { lazy, nullable, object, optional, string } from '../schema';
import { customAttributeSchema } from './customAttribute';
export const bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequestSchema = object({
    merchantId: ['merchant_id', string()],
    customAttribute: ['custom_attribute', lazy(() => customAttributeSchema)],
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
});
//# sourceMappingURL=bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest.js.map