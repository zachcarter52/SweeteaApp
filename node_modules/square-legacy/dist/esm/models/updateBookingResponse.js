import { array, lazy, object, optional } from '../schema';
import { bookingSchema } from './booking';
import { errorSchema } from './error';
export const updateBookingResponseSchema = object({
    booking: ['booking', optional(lazy(() => bookingSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=updateBookingResponse.js.map