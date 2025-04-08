import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { shiftSchema } from './shift';
export const createShiftResponseSchema = object({
    shift: ['shift', optional(lazy(() => shiftSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=createShiftResponse.js.map