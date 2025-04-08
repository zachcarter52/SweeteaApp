import { array, dict, lazy, object, optional } from '../schema';
import { bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponseSchema, } from './bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse';
import { errorSchema } from './error';
export const bulkDeleteLocationCustomAttributesResponseSchema = object({
    values: [
        'values',
        dict(lazy(() => bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponseSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkDeleteLocationCustomAttributesResponse.js.map