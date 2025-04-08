import { lazy, object, optional, string } from '../schema';
import { customAttributeDefinitionSchema, } from './customAttributeDefinition';
export const createMerchantCustomAttributeDefinitionRequestSchema = object({
    customAttributeDefinition: [
        'custom_attribute_definition',
        lazy(() => customAttributeDefinitionSchema),
    ],
    idempotencyKey: ['idempotency_key', optional(string())],
});
//# sourceMappingURL=createMerchantCustomAttributeDefinitionRequest.js.map