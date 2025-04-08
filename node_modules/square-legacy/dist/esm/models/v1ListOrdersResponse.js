import { array, lazy, object, optional } from '../schema';
import { v1OrderSchema } from './v1Order';
export const v1ListOrdersResponseSchema = object({
    items: ['items', optional(array(lazy(() => v1OrderSchema)))],
});
//# sourceMappingURL=v1ListOrdersResponse.js.map