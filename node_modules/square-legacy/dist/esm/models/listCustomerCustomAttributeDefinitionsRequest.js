import { nullable, number, object, optional, string } from '../schema';
export const listCustomerCustomAttributeDefinitionsRequestSchema = object({
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=listCustomerCustomAttributeDefinitionsRequest.js.map