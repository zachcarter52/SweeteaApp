import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { refundSchema } from './refund';
export const listRefundsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    refunds: ['refunds', optional(array(lazy(() => refundSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listRefundsResponse.js.map