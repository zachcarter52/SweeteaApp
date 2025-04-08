import { lazy, object, optional, string } from '../schema';
import { customAttributeDefinitionSchema, } from './customAttributeDefinition';
export const createBookingCustomAttributeDefinitionRequestSchema = object({
    customAttributeDefinition: [
        'custom_attribute_definition',
        lazy(() => customAttributeDefinitionSchema),
    ],
    idempotencyKey: ['idempotency_key', optional(string())],
});
//# sourceMappingURL=createBookingCustomAttributeDefinitionRequest.js.map