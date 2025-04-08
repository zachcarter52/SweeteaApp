import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { merchantSchema } from './merchant';
export const retrieveMerchantResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    merchant: ['merchant', optional(lazy(() => merchantSchema))],
});
//# sourceMappingURL=retrieveMerchantResponse.js.map