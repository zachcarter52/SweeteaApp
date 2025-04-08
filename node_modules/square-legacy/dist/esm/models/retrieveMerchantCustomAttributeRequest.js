import { boolean, nullable, number, object, optional } from '../schema';
export const retrieveMerchantCustomAttributeRequestSchema = object({
    withDefinition: ['with_definition', optional(nullable(boolean()))],
    version: ['version', optional(number())],
});
//# sourceMappingURL=retrieveMerchantCustomAttributeRequest.js.map