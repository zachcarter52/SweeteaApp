import { array, dict, lazy, object, optional } from '../schema';
import { bulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponseSchema, } from './bulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse';
import { errorSchema } from './error';
export const bulkUpsertMerchantCustomAttributesResponseSchema = object({
    values: [
        'values',
        optional(dict(lazy(() => bulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkUpsertMerchantCustomAttributesResponse.js.map