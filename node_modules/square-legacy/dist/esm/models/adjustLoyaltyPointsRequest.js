import { boolean, lazy, nullable, object, optional, string, } from '../schema';
import { loyaltyEventAdjustPointsSchema, } from './loyaltyEventAdjustPoints';
export const adjustLoyaltyPointsRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    adjustPoints: ['adjust_points', lazy(() => loyaltyEventAdjustPointsSchema)],
    allowNegativeBalance: [
        'allow_negative_balance',
        optional(nullable(boolean())),
    ],
});
//# sourceMappingURL=adjustLoyaltyPointsRequest.js.map