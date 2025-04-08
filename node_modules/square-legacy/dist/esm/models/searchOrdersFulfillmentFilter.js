import { array, nullable, object, optional, string } from '../schema';
export const searchOrdersFulfillmentFilterSchema = object({
    fulfillmentTypes: [
        'fulfillment_types',
        optional(nullable(array(string()))),
    ],
    fulfillmentStates: [
        'fulfillment_states',
        optional(nullable(array(string()))),
    ],
});
//# sourceMappingURL=searchOrdersFulfillmentFilter.js.map