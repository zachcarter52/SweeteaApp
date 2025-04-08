import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteLocationCustomAttributeResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteLocationCustomAttributeResponse.js.map