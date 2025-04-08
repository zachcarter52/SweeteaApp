import { nullable, object, optional, string } from '../schema';
export const deviceCodeSchema = object({
    id: ['id', optional(string())],
    name: ['name', optional(nullable(string()))],
    code: ['code', optional(string())],
    deviceId: ['device_id', optional(string())],
    productType: ['product_type', string()],
    locationId: ['location_id', optional(nullable(string()))],
    status: ['status', optional(string())],
    pairBy: ['pair_by', optional(string())],
    createdAt: ['created_at', optional(string())],
    statusChangedAt: ['status_changed_at', optional(string())],
    pairedAt: ['paired_at', optional(string())],
});
//# sourceMappingURL=deviceCode.js.map