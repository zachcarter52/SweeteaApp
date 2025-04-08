import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse.js.map