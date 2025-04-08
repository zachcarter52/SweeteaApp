import { array, lazy, object, optional } from '../schema';
import { bookingSchema } from './booking';
import { errorSchema } from './error';
export const retrieveBookingResponseSchema = object({
    booking: ['booking', optional(lazy(() => bookingSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=retrieveBookingResponse.js.map