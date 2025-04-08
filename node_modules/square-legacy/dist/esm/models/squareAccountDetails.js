import { array, lazy, nullable, object, optional, string, } from '../schema';
import { errorSchema } from './error';
export const squareAccountDetailsSchema = object({
    paymentSourceToken: ['payment_source_token', optional(nullable(string()))],
    errors: ['errors', optional(nullable(array(lazy(() => errorSchema))))],
});
//# sourceMappingURL=squareAccountDetails.js.map