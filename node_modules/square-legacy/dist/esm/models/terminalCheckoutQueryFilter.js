import { lazy, nullable, object, optional, string } from '../schema';
import { timeRangeSchema } from './timeRange';
export const terminalCheckoutQueryFilterSchema = object({
    deviceId: ['device_id', optional(nullable(string()))],
    createdAt: ['created_at', optional(lazy(() => timeRangeSchema))],
    status: ['status', optional(nullable(string()))],
});
//# sourceMappingURL=terminalCheckoutQueryFilter.js.map