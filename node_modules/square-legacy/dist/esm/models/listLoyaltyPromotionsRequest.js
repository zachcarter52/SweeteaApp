import { nullable, number, object, optional, string } from '../schema';
export const listLoyaltyPromotionsRequestSchema = object({
    status: ['status', optional(string())],
    cursor: ['cursor', optional(nullable(string()))],
    limit: ['limit', optional(nullable(number()))],
});
//# sourceMappingURL=listLoyaltyPromotionsRequest.js.map