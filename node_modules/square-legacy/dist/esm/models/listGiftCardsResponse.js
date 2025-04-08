import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { giftCardSchema } from './giftCard';
export const listGiftCardsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    giftCards: ['gift_cards', optional(array(lazy(() => giftCardSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listGiftCardsResponse.js.map