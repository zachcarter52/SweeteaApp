import { array, lazy, nullable, object, optional, string, } from '../schema';
import { loyaltyAccountMappingSchema, } from './loyaltyAccountMapping';
export const searchLoyaltyAccountsRequestLoyaltyAccountQuerySchema = object({
    mappings: [
        'mappings',
        optional(nullable(array(lazy(() => loyaltyAccountMappingSchema)))),
    ],
    customerIds: ['customer_ids', optional(nullable(array(string())))],
});
//# sourceMappingURL=searchLoyaltyAccountsRequestLoyaltyAccountQuery.js.map