import { array, dict, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { retrieveVendorResponseSchema, } from './retrieveVendorResponse';
export const bulkRetrieveVendorsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    responses: [
        'responses',
        optional(dict(lazy(() => retrieveVendorResponseSchema))),
    ],
});
//# sourceMappingURL=bulkRetrieveVendorsResponse.js.map