import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { giftCardSchema } from './giftCard';
export const retrieveGiftCardResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    giftCard: ['gift_card', optional(lazy(() => giftCardSchema))],
});
//# sourceMappingURL=retrieveGiftCardResponse.js.map