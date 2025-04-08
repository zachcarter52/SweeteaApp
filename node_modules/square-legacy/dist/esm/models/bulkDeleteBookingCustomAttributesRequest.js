import { dict, lazy, object } from '../schema';
import { bookingCustomAttributeDeleteRequestSchema, } from './bookingCustomAttributeDeleteRequest';
export const bulkDeleteBookingCustomAttributesRequestSchema = object({
    values: [
        'values',
        dict(lazy(() => bookingCustomAttributeDeleteRequestSchema)),
    ],
});
//# sourceMappingURL=bulkDeleteBookingCustomAttributesRequest.js.map