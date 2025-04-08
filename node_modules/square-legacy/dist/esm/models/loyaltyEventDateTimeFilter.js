import { lazy, object } from '../schema';
import { timeRangeSchema } from './timeRange';
export const loyaltyEventDateTimeFilterSchema = object({ createdAt: ['created_at', lazy(() => timeRangeSchema)] });
//# sourceMappingURL=loyaltyEventDateTimeFilter.js.map