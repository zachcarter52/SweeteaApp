import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { vendorSchema } from './vendor';
export const updateVendorResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    vendor: ['vendor', optional(lazy(() => vendorSchema))],
});
//# sourceMappingURL=updateVendorResponse.js.map