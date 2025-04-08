import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { payoutSchema } from './payout';
export const listPayoutsResponseSchema = object({
    payouts: ['payouts', optional(array(lazy(() => payoutSchema)))],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listPayoutsResponse.js.map