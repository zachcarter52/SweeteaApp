import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { giftCardActivitySchema } from './giftCardActivity';
export const createGiftCardActivityResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    giftCardActivity: [
        'gift_card_activity',
        optional(lazy(() => giftCardActivitySchema)),
    ],
});
//# sourceMappingURL=createGiftCardActivityResponse.js.map