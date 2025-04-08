import { array, lazy, number, object, optional } from '../schema';
import { errorSchema } from './error';
import { merchantSchema } from './merchant';
export const listMerchantsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    merchant: ['merchant', optional(array(lazy(() => merchantSchema)))],
    cursor: ['cursor', optional(number())],
});
//# sourceMappingURL=listMerchantsResponse.js.map