import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const addGroupToCustomerResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=addGroupToCustomerResponse.js.map