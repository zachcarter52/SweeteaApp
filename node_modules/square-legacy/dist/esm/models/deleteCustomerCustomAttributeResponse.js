import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteCustomerCustomAttributeResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteCustomerCustomAttributeResponse.js.map