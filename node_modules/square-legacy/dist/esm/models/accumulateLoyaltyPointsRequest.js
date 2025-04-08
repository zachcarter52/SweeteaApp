import { lazy, object, string } from '../schema';
import { loyaltyEventAccumulatePointsSchema, } from './loyaltyEventAccumulatePoints';
export const accumulateLoyaltyPointsRequestSchema = object({
    accumulatePoints: [
        'accumulate_points',
        lazy(() => loyaltyEventAccumulatePointsSchema),
    ],
    idempotencyKey: ['idempotency_key', string()],
    locationId: ['location_id', string()],
});
//# sourceMappingURL=accumulateLoyaltyPointsRequest.js.map