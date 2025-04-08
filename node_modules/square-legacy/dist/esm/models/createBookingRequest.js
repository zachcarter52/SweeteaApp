import { lazy, object, optional, string } from '../schema';
import { bookingSchema } from './booking';
export const createBookingRequestSchema = object({
    idempotencyKey: ['idempotency_key', optional(string())],
    booking: ['booking', lazy(() => bookingSchema)],
});
//# sourceMappingURL=createBookingRequest.js.map