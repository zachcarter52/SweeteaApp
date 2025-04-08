import { dict, lazy, object } from '../schema';
import { bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequestSchema, } from './bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest';
export const bulkUpsertCustomerCustomAttributesRequestSchema = object({
    values: [
        'values',
        dict(lazy(() => bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequestSchema)),
    ],
});
//# sourceMappingURL=bulkUpsertCustomerCustomAttributesRequest.js.map