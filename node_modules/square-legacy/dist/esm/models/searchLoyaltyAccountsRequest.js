import { lazy, number, object, optional, string } from '../schema';
import { searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema, } from './searchLoyaltyAccountsRequestLoyaltyAccountQuery';
export const searchLoyaltyAccountsRequestSchema = object({
    query: [
        'query',
        optional(lazy(() => searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema)),
    ],
    limit: ['limit', optional(number())],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchLoyaltyAccountsRequest.js.map