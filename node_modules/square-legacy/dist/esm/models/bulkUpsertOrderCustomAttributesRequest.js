import { dict, lazy, object } from '../schema';
import { bulkUpsertOrderCustomAttributesRequestUpsertCustomAttributeSchema, } from './bulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute';
export const bulkUpsertOrderCustomAttributesRequestSchema = object({
    values: [
        'values',
        dict(lazy(() => bulkUpsertOrderCustomAttributesRequestUpsertCustomAttributeSchema)),
    ],
});
//# sourceMappingURL=bulkUpsertOrderCustomAttributesRequest.js.map