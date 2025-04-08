import { object, string } from '../schema';
export const redeemLoyaltyRewardRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    locationId: ['location_id', string()],
});
//# sourceMappingURL=redeemLoyaltyRewardRequest.js.map