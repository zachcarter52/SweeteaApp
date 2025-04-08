import { lazy, object, string } from '../schema';
import { loyaltyAccountSchema } from './loyaltyAccount';
export const createLoyaltyAccountRequestSchema = object({
    loyaltyAccount: ['loyalty_account', lazy(() => loyaltyAccountSchema)],
    idempotencyKey: ['idempotency_key', string()],
});
//# sourceMappingURL=createLoyaltyAccountRequest.js.map