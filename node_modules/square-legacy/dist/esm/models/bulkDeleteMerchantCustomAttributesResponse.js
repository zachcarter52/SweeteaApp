import { array, dict, lazy, object, optional } from '../schema';
import { bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponseSchema, } from './bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse';
import { errorSchema } from './error';
export const bulkDeleteMerchantCustomAttributesResponseSchema = object({
    values: [
        'values',
        dict(lazy(() => bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponseSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkDeleteMerchantCustomAttributesResponse.js.map