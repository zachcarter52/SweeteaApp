import { lazy, object, optional } from '../schema';
import { timeRangeSchema } from './timeRange';
export const searchOrdersDateTimeFilterSchema = object({
    createdAt: ['created_at', optional(lazy(() => timeRangeSchema))],
    updatedAt: ['updated_at', optional(lazy(() => timeRangeSchema))],
    closedAt: ['closed_at', optional(lazy(() => timeRangeSchema))],
});
//# sourceMappingURL=searchOrdersDateTimeFilter.js.map