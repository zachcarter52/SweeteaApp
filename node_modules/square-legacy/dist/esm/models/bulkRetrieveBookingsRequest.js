import { array, object, string } from '../schema';
export const bulkRetrieveBookingsRequestSchema = object({ bookingIds: ['booking_ids', array(string())] });
//# sourceMappingURL=bulkRetrieveBookingsRequest.js.map