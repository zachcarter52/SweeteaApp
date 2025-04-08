import { lazy, object, optional } from '../schema';
import { locationSchema } from './location';
export const updateLocationRequestSchema = object({ location: ['location', optional(lazy(() => locationSchema))] });
//# sourceMappingURL=updateLocationRequest.js.map