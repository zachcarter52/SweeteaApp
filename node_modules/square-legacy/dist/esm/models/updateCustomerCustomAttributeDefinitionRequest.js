import { lazy, nullable, object, optional, string } from '../schema';
import { customAttributeDefinitionSchema, } from './customAttributeDefinition';
export const updateCustomerCustomAttributeDefinitionRequestSchema = object({
    customAttributeDefinition: [
        'custom_attribute_definition',
        lazy(() => customAttributeDefinitionSchema),
    ],
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
});
//# sourceMappingURL=updateCustomerCustomAttributeDefinitionRequest.js.map