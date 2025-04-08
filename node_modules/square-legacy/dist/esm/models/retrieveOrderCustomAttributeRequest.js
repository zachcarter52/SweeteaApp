import { boolean, nullable, number, object, optional } from '../schema';
export const retrieveOrderCustomAttributeRequestSchema = object({
    version: ['version', optional(number())],
    withDefinition: ['with_definition', optional(nullable(boolean()))],
});
//# sourceMappingURL=retrieveOrderCustomAttributeRequest.js.map