import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const enableEventsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=enableEventsResponse.js.map