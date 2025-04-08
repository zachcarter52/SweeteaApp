import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteBookingCustomAttributeResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteBookingCustomAttributeResponse.js.map