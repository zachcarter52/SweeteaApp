import { dict, nullable, number, object, optional, string, unknown, } from '../schema';
export const customAttributeDefinitionSchema = object({
    key: ['key', optional(nullable(string()))],
    schema: ['schema', optional(nullable(dict(unknown())))],
    name: ['name', optional(nullable(string()))],
    description: ['description', optional(nullable(string()))],
    visibility: ['visibility', optional(string())],
    version: ['version', optional(number())],
    updatedAt: ['updated_at', optional(string())],
    createdAt: ['created_at', optional(string())],
});
//# sourceMappingURL=customAttributeDefinition.js.map