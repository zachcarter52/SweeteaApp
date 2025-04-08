import { array, lazy, object, optional, string } from '../schema';
import { breakTypeSchema } from './breakType';
import { errorSchema } from './error';
export const listBreakTypesResponseSchema = object({
    breakTypes: ['break_types', optional(array(lazy(() => breakTypeSchema)))],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listBreakTypesResponse.js.map