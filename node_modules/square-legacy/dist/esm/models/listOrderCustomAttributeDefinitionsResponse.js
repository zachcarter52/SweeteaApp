import { array, lazy, object, optional, string } from '../schema';
import { customAttributeDefinitionSchema, } from './customAttributeDefinition';
import { errorSchema } from './error';
export const listOrderCustomAttributeDefinitionsResponseSchema = object({
    customAttributeDefinitions: [
        'custom_attribute_definitions',
        array(lazy(() => customAttributeDefinitionSchema)),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listOrderCustomAttributeDefinitionsResponse.js.map