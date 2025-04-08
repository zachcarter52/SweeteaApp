import { array, dict, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { upsertOrderCustomAttributeResponseSchema, } from './upsertOrderCustomAttributeResponse';
export const bulkUpsertOrderCustomAttributesResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    values: [
        'values',
        dict(lazy(() => upsertOrderCustomAttributeResponseSchema)),
    ],
});
//# sourceMappingURL=bulkUpsertOrderCustomAttributesResponse.js.map