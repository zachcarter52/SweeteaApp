import { boolean, nullable, number, object, optional } from '../schema';
export const retrieveCustomerCustomAttributeRequestSchema = object({
    withDefinition: ['with_definition', optional(nullable(boolean()))],
    version: ['version', optional(number())],
});
//# sourceMappingURL=retrieveCustomerCustomAttributeRequest.js.map