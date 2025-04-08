import { array, lazy, object, optional } from '../schema';
import { customerSegmentSchema } from './customerSegment';
import { errorSchema } from './error';
export const retrieveCustomerSegmentResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    segment: ['segment', optional(lazy(() => customerSegmentSchema))],
});
//# sourceMappingURL=retrieveCustomerSegmentResponse.js.map