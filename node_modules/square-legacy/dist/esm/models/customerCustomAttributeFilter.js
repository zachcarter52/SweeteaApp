import { lazy, object, optional, string } from '../schema';
import { customerCustomAttributeFilterValueSchema, } from './customerCustomAttributeFilterValue';
import { timeRangeSchema } from './timeRange';
export const customerCustomAttributeFilterSchema = object({
    key: ['key', string()],
    filter: [
        'filter',
        optional(lazy(() => customerCustomAttributeFilterValueSchema)),
    ],
    updatedAt: ['updated_at', optional(lazy(() => timeRangeSchema))],
});
//# sourceMappingURL=customerCustomAttributeFilter.js.map