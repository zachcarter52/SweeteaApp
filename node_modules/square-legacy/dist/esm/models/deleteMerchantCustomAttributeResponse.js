import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteMerchantCustomAttributeResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteMerchantCustomAttributeResponse.js.map