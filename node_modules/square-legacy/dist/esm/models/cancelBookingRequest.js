import { nullable, number, object, optional, string } from '../schema';
export const cancelBookingRequestSchema = object({
    idempotencyKey: ['idempotency_key', optional(nullable(string()))],
    bookingVersion: ['booking_version', optional(nullable(number()))],
});
//# sourceMappingURL=cancelBookingRequest.js.map