import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { loyaltyAccountSchema } from './loyaltyAccount';
export const searchLoyaltyAccountsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    loyaltyAccounts: [
        'loyalty_accounts',
        optional(array(lazy(() => loyaltyAccountSchema))),
    ],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchLoyaltyAccountsResponse.js.map