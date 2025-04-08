import { array, lazy, object, optional } from '../schema';
import { availabilitySchema } from './availability';
import { errorSchema } from './error';
export const searchAvailabilityResponseSchema = object({
    availabilities: [
        'availabilities',
        optional(array(lazy(() => availabilitySchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=searchAvailabilityResponse.js.map