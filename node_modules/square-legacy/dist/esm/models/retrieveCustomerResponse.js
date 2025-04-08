import { array, lazy, object, optional } from '../schema';
import { customerSchema } from './customer';
import { errorSchema } from './error';
export const retrieveCustomerResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    customer: ['customer', optional(lazy(() => customerSchema))],
});
//# sourceMappingURL=retrieveCustomerResponse.js.map