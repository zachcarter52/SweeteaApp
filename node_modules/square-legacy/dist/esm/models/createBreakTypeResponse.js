import { array, lazy, object, optional } from '../schema';
import { breakTypeSchema } from './breakType';
import { errorSchema } from './error';
export const createBreakTypeResponseSchema = object({
    breakType: ['break_type', optional(lazy(() => breakTypeSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=createBreakTypeResponse.js.map