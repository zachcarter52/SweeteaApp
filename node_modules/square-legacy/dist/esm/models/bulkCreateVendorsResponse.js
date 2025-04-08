import { array, dict, lazy, object, optional } from '../schema';
import { createVendorResponseSchema, } from './createVendorResponse';
import { errorSchema } from './error';
export const bulkCreateVendorsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    responses: [
        'responses',
        optional(dict(lazy(() => createVendorResponseSchema))),
    ],
});
//# sourceMappingURL=bulkCreateVendorsResponse.js.map