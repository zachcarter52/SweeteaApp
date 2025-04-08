import { array, lazy, object, optional } from '../schema';
import { disputeSchema } from './dispute';
import { errorSchema } from './error';
export const acceptDisputeResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    dispute: ['dispute', optional(lazy(() => disputeSchema))],
});
//# sourceMappingURL=acceptDisputeResponse.js.map