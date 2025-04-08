import { dict, lazy, object } from '../schema';
import { bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequestSchema, } from './bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest';
export const bulkUpsertLocationCustomAttributesRequestSchema = object({
    values: [
        'values',
        dict(lazy(() => bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequestSchema)),
    ],
});
//# sourceMappingURL=bulkUpsertLocationCustomAttributesRequest.js.map