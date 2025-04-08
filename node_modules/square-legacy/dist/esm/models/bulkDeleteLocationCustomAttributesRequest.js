import { dict, lazy, object } from '../schema';
import { bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequestSchema, } from './bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest';
export const bulkDeleteLocationCustomAttributesRequestSchema = object({
    values: [
        'values',
        dict(lazy(() => bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequestSchema)),
    ],
});
//# sourceMappingURL=bulkDeleteLocationCustomAttributesRequest.js.map