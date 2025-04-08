import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { giftCardSchema } from './giftCard';
export const createGiftCardResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    giftCard: ['gift_card', optional(lazy(() => giftCardSchema))],
});
//# sourceMappingURL=createGiftCardResponse.js.map