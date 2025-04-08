import { lazy, object } from '../schema';
import { searchAvailabilityFilterSchema, } from './searchAvailabilityFilter';
export const searchAvailabilityQuerySchema = object({ filter: ['filter', lazy(() => searchAvailabilityFilterSchema)] });
//# sourceMappingURL=searchAvailabilityQuery.js.map