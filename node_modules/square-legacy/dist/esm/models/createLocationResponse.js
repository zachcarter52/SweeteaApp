import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { locationSchema } from './location';
export const createLocationResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    location: ['location', optional(lazy(() => locationSchema))],
});
//# sourceMappingURL=createLocationResponse.js.map