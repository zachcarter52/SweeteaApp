import { array, lazy, nullable, object, optional, string, } from '../schema';
import { timeRangeSchema } from './timeRange';
export const searchEventsFilterSchema = object({
    eventTypes: ['event_types', optional(nullable(array(string())))],
    merchantIds: ['merchant_ids', optional(nullable(array(string())))],
    locationIds: ['location_ids', optional(nullable(array(string())))],
    createdAt: ['created_at', optional(lazy(() => timeRangeSchema))],
});
//# sourceMappingURL=searchEventsFilter.js.map