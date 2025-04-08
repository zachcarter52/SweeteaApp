import { array, lazy, object, optional, string } from '../schema';
import { bookingSchema } from './booking';
import { errorSchema } from './error';
export const listBookingsResponseSchema = object({
    bookings: ['bookings', optional(array(lazy(() => bookingSchema)))],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listBookingsResponse.js.map