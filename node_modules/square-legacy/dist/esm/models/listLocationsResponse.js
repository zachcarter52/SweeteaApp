import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { locationSchema } from './location';
export const listLocationsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    locations: ['locations', optional(array(lazy(() => locationSchema)))],
});
//# sourceMappingURL=listLocationsResponse.js.map