import { dict, lazy, object } from '../schema';
import { bulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequestSchema, } from './bulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest';
export const bulkDeleteMerchantCustomAttributesRequestSchema = object({
    values: [
        'values',
        dict(lazy(() => bulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequestSchema)),
    ],
});
//# sourceMappingURL=bulkDeleteMerchantCustomAttributesRequest.js.map