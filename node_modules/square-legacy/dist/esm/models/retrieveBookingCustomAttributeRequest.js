import { boolean, nullable, number, object, optional } from '../schema';
export const retrieveBookingCustomAttributeRequestSchema = object({
    withDefinition: ['with_definition', optional(nullable(boolean()))],
    version: ['version', optional(number())],
});
//# sourceMappingURL=retrieveBookingCustomAttributeRequest.js.map