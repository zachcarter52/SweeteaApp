import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteCustomerResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteCustomerResponse.js.map