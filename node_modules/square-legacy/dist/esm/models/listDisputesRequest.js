import { array, nullable, object, optional, string } from '../schema';
export const listDisputesRequestSchema = object({
    cursor: ['cursor', optional(nullable(string()))],
    states: ['states', optional(nullable(array(string())))],
    locationId: ['location_id', optional(nullable(string()))],
});
//# sourceMappingURL=listDisputesRequest.js.map