import { array, nullable, object, optional, string } from '../schema';
export const batchRetrieveOrdersRequestSchema = object({
    locationId: ['location_id', optional(nullable(string()))],
    orderIds: ['order_ids', array(string())],
});
//# sourceMappingURL=batchRetrieveOrdersRequest.js.map