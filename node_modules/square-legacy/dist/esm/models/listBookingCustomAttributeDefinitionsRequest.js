import { nullable, number, object, optional, string } from '../schema';
export const listBookingCustomAttributeDefinitionsRequestSchema = object({
    limit: ['limit', optional(nullable(number()))],
    cursor: ['cursor', optional(nullable(string()))],
});
//# sourceMappingURL=listBookingCustomAttributeDefinitionsRequest.js.map