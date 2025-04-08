import { array, nullable, object, optional, string } from '../schema';
export const bulkRetrieveVendorsRequestSchema = object({ vendorIds: ['vendor_ids', optional(nullable(array(string())))] });
//# sourceMappingURL=bulkRetrieveVendorsRequest.js.map