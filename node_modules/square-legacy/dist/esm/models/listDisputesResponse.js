import { array, lazy, object, optional, string } from '../schema';
import { disputeSchema } from './dispute';
import { errorSchema } from './error';
export const listDisputesResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    disputes: ['disputes', optional(array(lazy(() => disputeSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listDisputesResponse.js.map