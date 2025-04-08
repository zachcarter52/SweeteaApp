import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { refundSchema } from './refund';
export const createRefundResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refund: ['refund', optional(lazy(() => refundSchema))],
});
//# sourceMappingURL=createRefundResponse.js.map