import { array, lazy, object, optional } from '../schema';
import { checkoutSchema } from './checkout';
import { errorSchema } from './error';
export const createCheckoutResponseSchema = object({
    checkout: ['checkout', optional(lazy(() => checkoutSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=createCheckoutResponse.js.map