import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { vendorSchema } from './vendor';
export const searchVendorsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    vendors: ['vendors', optional(array(lazy(() => vendorSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchVendorsResponse.js.map