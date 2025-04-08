import { boolean, nullable, number, object, optional, string, } from '../schema';
export const listCustomerCustomAttributesRequestSchema = object({
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
    withDefinitions: ['with_definitions', optional(nullable(boolean()))],
});
//# sourceMappingURL=listCustomerCustomAttributesRequest.js.map