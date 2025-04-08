import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { paymentSchema } from './payment';
export const listPaymentsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    payments: ['payments', optional(array(lazy(() => paymentSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listPaymentsResponse.js.map