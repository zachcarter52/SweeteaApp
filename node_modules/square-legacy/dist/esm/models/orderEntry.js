import { nullable, number, object, optional, string } from '../schema';
export const orderEntrySchema = object({
    orderId: ['order_id', optional(nullable(string()))],
    version: ['version', optional(number())],
    locationId: ['location_id', optional(nullable(string()))],
});
//# sourceMappingURL=orderEntry.js.map