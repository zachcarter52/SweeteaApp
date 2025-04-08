import { array, dict, lazy, object, optional } from '../schema';
import { bookingCustomAttributeUpsertResponseSchema, } from './bookingCustomAttributeUpsertResponse';
import { errorSchema } from './error';
export const bulkUpsertBookingCustomAttributesResponseSchema = object({
    values: [
        'values',
        optional(dict(lazy(() => bookingCustomAttributeUpsertResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkUpsertBookingCustomAttributesResponse.js.map