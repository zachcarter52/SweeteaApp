import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { loyaltyAccountSchema } from './loyaltyAccount';
export const retrieveLoyaltyAccountResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    loyaltyAccount: [
        'loyalty_account',
        optional(lazy(() => loyaltyAccountSchema)),
    ],
});
//# sourceMappingURL=retrieveLoyaltyAccountResponse.js.map