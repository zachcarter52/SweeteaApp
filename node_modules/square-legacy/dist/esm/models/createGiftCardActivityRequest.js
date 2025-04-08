import { lazy, object, string } from '../schema';
import { giftCardActivitySchema } from './giftCardActivity';
export const createGiftCardActivityRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    giftCardActivity: [
        'gift_card_activity',
        lazy(() => giftCardActivitySchema),
    ],
});
//# sourceMappingURL=createGiftCardActivityRequest.js.map