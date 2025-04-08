import { array, dict, lazy, object, optional } from '../schema';
import { deleteOrderCustomAttributeResponseSchema, } from './deleteOrderCustomAttributeResponse';
import { errorSchema } from './error';
export const bulkDeleteOrderCustomAttributesResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    values: [
        'values',
        dict(lazy(() => deleteOrderCustomAttributeResponseSchema)),
    ],
});
//# sourceMappingURL=bulkDeleteOrderCustomAttributesResponse.js.map