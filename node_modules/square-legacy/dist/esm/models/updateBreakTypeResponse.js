import { array, lazy, object, optional } from '../schema';
import { breakTypeSchema } from './breakType';
import { errorSchema } from './error';
export const updateBreakTypeResponseSchema = object({
    breakType: ['break_type', optional(lazy(() => breakTypeSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=updateBreakTypeResponse.js.map