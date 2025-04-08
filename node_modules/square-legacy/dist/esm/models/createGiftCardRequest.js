import { lazy, object, string } from '../schema';
import { giftCardSchema } from './giftCard';
export const createGiftCardRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    locationId: ['location_id', string()],
    giftCard: ['gift_card', lazy(() => giftCardSchema)],
});
//# sourceMappingURL=createGiftCardRequest.js.map