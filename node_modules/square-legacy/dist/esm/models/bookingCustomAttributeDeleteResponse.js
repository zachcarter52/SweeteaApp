import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
export const bookingCustomAttributeDeleteResponseSchema = object({
    bookingId: ['booking_id', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bookingCustomAttributeDeleteResponse.js.map