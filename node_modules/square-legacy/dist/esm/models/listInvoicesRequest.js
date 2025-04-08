import { nullable, number, object, optional, string } from '../schema';
export const listInvoicesRequestSchema = object({
    locationId: ['location_id', string()],
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
});
//# sourceMappingURL=listInvoicesRequest.js.map