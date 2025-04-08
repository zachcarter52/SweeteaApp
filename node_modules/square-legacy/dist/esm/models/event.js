import { lazy, nullable, object, optional, string } from '../schema';
import { eventDataSchema } from './eventData';
export const eventSchema = object({
    merchantId: ['merchant_id', optional(nullable(string()))],
    locationId: ['location_id', optional(nullable(string()))],
    type: ['type', optional(nullable(string()))],
    eventId: ['event_id', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    data: ['data', optional(lazy(() => eventDataSchema))],
});
//# sourceMappingURL=event.js.map