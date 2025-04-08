import { array, lazy, object, optional } from '../schema';
import { bookingSchema } from './booking';
import { errorSchema } from './error';
export const cancelBookingResponseSchema = object({
    booking: ['booking', optional(lazy(() => bookingSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=cancelBookingResponse.js.map