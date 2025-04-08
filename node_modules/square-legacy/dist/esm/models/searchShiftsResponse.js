import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { shiftSchema } from './shift';
export const searchShiftsResponseSchema = object({
    shifts: ['shifts', optional(array(lazy(() => shiftSchema)))],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=searchShiftsResponse.js.map