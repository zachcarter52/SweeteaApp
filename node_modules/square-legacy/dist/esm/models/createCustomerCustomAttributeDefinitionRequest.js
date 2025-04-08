import { lazy, object, optional, string } from '../schema';
import { customAttributeDefinitionSchema, } from './customAttributeDefinition';
export const createCustomerCustomAttributeDefinitionRequestSchema = object({
    customAttributeDefinition: [
        'custom_attribute_definition',
        lazy(() => customAttributeDefinitionSchema),
    ],
    idempotencyKey: ['idempotency_key', optional(string())],
});
//# sourceMappingURL=createCustomerCustomAttributeDefinitionRequest.js.map