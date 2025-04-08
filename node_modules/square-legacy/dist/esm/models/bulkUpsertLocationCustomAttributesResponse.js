import { array, dict, lazy, object, optional } from '../schema';
import { bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponseSchema, } from './bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse';
import { errorSchema } from './error';
export const bulkUpsertLocationCustomAttributesResponseSchema = object({
    values: [
        'values',
        optional(dict(lazy(() => bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponseSchema))),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkUpsertLocationCustomAttributesResponse.js.map