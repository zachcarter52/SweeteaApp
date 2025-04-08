import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteShiftResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=deleteShiftResponse.js.map