import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteBreakTypeResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteBreakTypeResponse.js.map