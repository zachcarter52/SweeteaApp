import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { vendorSchema } from './vendor';
export const retrieveVendorResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    vendor: ['vendor', optional(lazy(() => vendorSchema))],
});
//# sourceMappingURL=retrieveVendorResponse.js.map