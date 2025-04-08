import { dict, lazy, object } from '../schema';
import { updateVendorRequestSchema, } from './updateVendorRequest';
export const bulkUpdateVendorsRequestSchema = object({ vendors: ['vendors', dict(lazy(() => updateVendorRequestSchema))] });
//# sourceMappingURL=bulkUpdateVendorsRequest.js.map