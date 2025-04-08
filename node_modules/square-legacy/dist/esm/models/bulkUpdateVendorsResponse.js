import { array, dict, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { updateVendorResponseSchema, } from './updateVendorResponse';
export const bulkUpdateVendorsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    responses: [
        'responses',
        optional(dict(lazy(() => updateVendorResponseSchema))),
    ],
});
//# sourceMappingURL=bulkUpdateVendorsResponse.js.map