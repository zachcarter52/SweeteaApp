import { dict, lazy, object } from '../schema';
import { bulkDeleteOrderCustomAttributesRequestDeleteCustomAttributeSchema, } from './bulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute';
export const bulkDeleteOrderCustomAttributesRequestSchema = object({
    values: [
        'values',
        dict(lazy(() => bulkDeleteOrderCustomAttributesRequestDeleteCustomAttributeSchema)),
    ],
});
//# sourceMappingURL=bulkDeleteOrderCustomAttributesRequest.js.map