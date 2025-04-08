import { array, lazy, object, optional, string } from '../schema';
import { customAttributeDefinitionSchema, } from './customAttributeDefinition';
import { errorSchema } from './error';
export const listBookingCustomAttributeDefinitionsResponseSchema = object({
    customAttributeDefinitions: [
        'custom_attribute_definitions',
        optional(array(lazy(() => customAttributeDefinitionSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listBookingCustomAttributeDefinitionsResponse.js.map