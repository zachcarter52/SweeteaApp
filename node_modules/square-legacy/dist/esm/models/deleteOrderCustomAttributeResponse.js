import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteOrderCustomAttributeResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteOrderCustomAttributeResponse.js.map