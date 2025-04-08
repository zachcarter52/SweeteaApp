import { lazy, object } from '../schema';
import { searchAvailabilityQuerySchema, } from './searchAvailabilityQuery';
export const searchAvailabilityRequestSchema = object({ query: ['query', lazy(() => searchAvailabilityQuerySchema)] });
//# sourceMappingURL=searchAvailabilityRequest.js.map