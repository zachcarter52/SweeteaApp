import { lazy, object, optional } from '../schema';
import { loyaltyEventFilterSchema, } from './loyaltyEventFilter';
export const loyaltyEventQuerySchema = object({
    filter: ['filter', optional(lazy(() => loyaltyEventFilterSchema))],
});
//# sourceMappingURL=loyaltyEventQuery.js.map