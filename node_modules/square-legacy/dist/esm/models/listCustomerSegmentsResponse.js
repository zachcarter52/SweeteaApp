import { array, lazy, object, optional, string } from '../schema';
import { customerSegmentSchema } from './customerSegment';
import { errorSchema } from './error';
export const listCustomerSegmentsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    segments: ['segments', optional(array(lazy(() => customerSegmentSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listCustomerSegmentsResponse.js.map