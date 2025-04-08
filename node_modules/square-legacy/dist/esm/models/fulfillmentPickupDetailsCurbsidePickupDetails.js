import { nullable, object, optional, string } from '../schema';
export const fulfillmentPickupDetailsCurbsidePickupDetailsSchema = object({
    curbsideDetails: ['curbside_details', optional(nullable(string()))],
    buyerArrivedAt: ['buyer_arrived_at', optional(nullable(string()))],
});
//# sourceMappingURL=fulfillmentPickupDetailsCurbsidePickupDetails.js.map