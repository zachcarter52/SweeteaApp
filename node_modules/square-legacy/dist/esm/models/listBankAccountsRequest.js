import { nullable, number, object, optional, string } from '../schema';
export const listBankAccountsRequestSchema = object({
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
    locationId: ['location_id', optional(nullable(string()))],
});
//# sourceMappingURL=listBankAccountsRequest.js.map