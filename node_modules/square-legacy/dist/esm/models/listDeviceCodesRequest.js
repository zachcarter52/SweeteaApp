import { array, nullable, object, optional, string } from '../schema';
export const listDeviceCodesRequestSchema = object({
    cursor: ['cursor', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
    productType: ['product_type', optional(string())],
    status: ['status', optional(nullable(array(string())))],
});
//# sourceMappingURL=listDeviceCodesRequest.js.map