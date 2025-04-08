import { array, lazy, object, optional } from '../schema';
import { customAttributeDefinitionSchema, } from './customAttributeDefinition';
import { errorSchema } from './error';
export const createOrderCustomAttributeDefinitionResponseSchema = object({
    customAttributeDefinition: [
        'custom_attribute_definition',
        optional(lazy(() => customAttributeDefinitionSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=createOrderCustomAttributeDefinitionResponse.js.map