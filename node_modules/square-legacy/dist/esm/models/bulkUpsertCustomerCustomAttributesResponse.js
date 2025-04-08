import { array, dict, lazy, object, optional } from '../schema';
import { bulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponseSchema, } from './bulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse';
import { errorSchema } from './error';
export const bulkUpsertCustomerCustomAttributesResponseSchema = object({
    values: [
        'values',
        optional(dict(lazy(() => bulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkUpsertCustomerCustomAttributesResponse.js.map