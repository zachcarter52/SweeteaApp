import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const removeGroupFromCustomerResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=removeGroupFromCustomerResponse.js.map