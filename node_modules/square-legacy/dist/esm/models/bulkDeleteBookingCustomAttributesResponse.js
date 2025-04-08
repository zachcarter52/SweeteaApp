import { array, dict, lazy, object, optional } from '../schema';
import { bookingCustomAttributeDeleteResponseSchema, } from './bookingCustomAttributeDeleteResponse';
import { errorSchema } from './error';
export const bulkDeleteBookingCustomAttributesResponseSchema = object({
    values: [
        'values',
        optional(dict(lazy(() => bookingCustomAttributeDeleteResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkDeleteBookingCustomAttributesResponse.js.map