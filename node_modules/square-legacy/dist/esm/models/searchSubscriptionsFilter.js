import { array, nullable, object, optional, string } from '../schema';
export const searchSubscriptionsFilterSchema = object({
    customerIds: ['customer_ids', optional(nullable(array(string())))],
    locationIds: ['location_ids', optional(nullable(array(string())))],
    sourceNames: ['source_names', optional(nullable(array(string())))],
});
//# sourceMappingURL=searchSubscriptionsFilter.js.map