import { dict, lazy, object } from '../schema';
import { vendorSchema } from './vendor';
export const bulkCreateVendorsRequestSchema = object({ vendors: ['vendors', dict(lazy(() => vendorSchema))] });
//# sourceMappingURL=bulkCreateVendorsRequest.js.map