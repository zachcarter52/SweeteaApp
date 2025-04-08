import { lazy, nullable, object, optional, string } from '../schema';
import { bookingSchema } from './booking';
export const updateBookingRequestSchema = object({
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
    booking: ['booking', lazy(() => bookingSchema)],
});
//# sourceMappingURL=updateBookingRequest.js.map