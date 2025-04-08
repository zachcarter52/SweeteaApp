import { array, dict, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { retrieveBookingResponseSchema, } from './retrieveBookingResponse';
export const bulkRetrieveBookingsResponseSchema = object({
    bookings: [
        'bookings',
        optional(dict(lazy(() => retrieveBookingResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkRetrieveBookingsResponse.js.map