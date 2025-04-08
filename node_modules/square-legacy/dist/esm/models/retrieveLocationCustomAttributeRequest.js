import { boolean, nullable, number, object, optional } from '../schema';
export const retrieveLocationCustomAttributeRequestSchema = object({
    withDefinition: ['with_definition', optional(nullable(boolean()))],
    version: ['version', optional(number())],
});
//# sourceMappingURL=retrieveLocationCustomAttributeRequest.js.map