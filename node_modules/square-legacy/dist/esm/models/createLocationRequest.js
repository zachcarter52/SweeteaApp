import { lazy, object, optional } from '../schema';
import { locationSchema } from './location';
export const createLocationRequestSchema = object({ location: ['location', optional(lazy(() => locationSchema))] });
//# sourceMappingURL=createLocationRequest.js.map