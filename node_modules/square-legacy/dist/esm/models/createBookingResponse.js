import { array, lazy, object, optional } from '../schema';
import { bookingSchema } from './booking';
import { errorSchema } from './error';
export const createBookingResponseSchema = object({
    booking: ['booking', optional(lazy(() => bookingSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=createBookingResponse.js.map