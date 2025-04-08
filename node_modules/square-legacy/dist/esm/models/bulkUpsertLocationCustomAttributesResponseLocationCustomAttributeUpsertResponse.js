import { array, lazy, object, optional, string } from '../schema';
import { customAttributeSchema } from './customAttribute';
import { errorSchema } from './error';
export const bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponseSchema = object({
    locationId: ['location_id', optional(string())],
    customAttribute: [
        'custom_attribute',
        optional(lazy(() => customAttributeSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse.js.map