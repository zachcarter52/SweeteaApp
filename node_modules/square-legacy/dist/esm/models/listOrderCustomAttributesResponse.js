import { array, lazy, object, optional, string } from '../schema';
import { customAttributeSchema } from './customAttribute';
import { errorSchema } from './error';
export const listOrderCustomAttributesResponseSchema = object({
    customAttributes: [
        'custom_attributes',
        optional(array(lazy(() => customAttributeSchema))),
    ],
    cursor: ['cursor', optional(string())],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
});
//# sourceMappingURL=listOrderCustomAttributesResponse.js.map