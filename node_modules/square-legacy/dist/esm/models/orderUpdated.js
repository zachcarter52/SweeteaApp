import { nullable, number, object, optional, string } from '../schema';
export const orderUpdatedSchema = object({
    orderId: ['order_id', optional(nullable(string()))],
    version: ['version', optional(number())],
    locationId: ['location_id', optional(nullable(string()))],
    state: ['state', optional(string())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
});
//# sourceMappingURL=orderUpdated.js.map