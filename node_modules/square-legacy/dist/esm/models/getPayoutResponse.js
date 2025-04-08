import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { payoutSchema } from './payout';
export const getPayoutResponseSchema = object({
    payout: ['payout', optional(lazy(() => payoutSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=getPayoutResponse.js.map