import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
export const bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponseSchema = object({
    locationId: ['location_id', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse.js.map