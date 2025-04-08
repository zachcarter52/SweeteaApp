import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const disableEventsResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=disableEventsResponse.js.map