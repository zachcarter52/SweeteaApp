import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteCustomerGroupResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteCustomerGroupResponse.js.map