import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
export const updateItemModifierListsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    updatedAt: ['updated_at', optional(string())],
});
//# sourceMappingURL=updateItemModifierListsResponse.js.map