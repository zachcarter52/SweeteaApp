import { dict, lazy, object } from '../schema';
import { bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequestSchema, } from './bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest';
export const bulkUpsertMerchantCustomAttributesRequestSchema = object({
    values: [
        'values',
        dict(lazy(() => bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequestSchema)),
    ],
});
//# sourceMappingURL=bulkUpsertMerchantCustomAttributesRequest.js.map