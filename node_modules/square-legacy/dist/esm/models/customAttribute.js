import { lazy, nullable, number, object, optional, string, unknown, } from '../schema';
import { customAttributeDefinitionSchema, } from './customAttributeDefinition';
export const customAttributeSchema = object({
    key: ['key', optional(nullable(string()))],
    value: ['value', optional(nullable(unknown()))],
    version: ['version', optional(number())],
    visibility: ['visibility', optional(string())],
    definition: [
        'definition',
        optional(lazy(() => customAttributeDefinitionSchema)),
    ],
    updatedAt: ['updated_at', optional(string())],
    createdAt: ['created_at', optional(string())],
});
//# sourceMappingURL=customAttribute.js.map