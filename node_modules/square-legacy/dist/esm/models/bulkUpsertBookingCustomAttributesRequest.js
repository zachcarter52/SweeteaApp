import { dict, lazy, object } from '../schema';
import { bookingCustomAttributeUpsertRequestSchema, } from './bookingCustomAttributeUpsertRequest';
export const bulkUpsertBookingCustomAttributesRequestSchema = object({
    values: [
        'values',
        dict(lazy(() => bookingCustomAttributeUpsertRequestSchema)),
    ],
});
//# sourceMappingURL=bulkUpsertBookingCustomAttributesRequest.js.map