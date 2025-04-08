import { lazy, object, optional, string } from '../schema';
import { loyaltyEventAccumulatePointsSchema, } from './loyaltyEventAccumulatePoints';
import { loyaltyEventAccumulatePromotionPointsSchema, } from './loyaltyEventAccumulatePromotionPoints';
import { loyaltyEventAdjustPointsSchema, } from './loyaltyEventAdjustPoints';
import { loyaltyEventCreateRewardSchema, } from './loyaltyEventCreateReward';
import { loyaltyEventDeleteRewardSchema, } from './loyaltyEventDeleteReward';
import { loyaltyEventExpirePointsSchema, } from './loyaltyEventExpirePoints';
import { loyaltyEventOtherSchema, } from './loyaltyEventOther';
import { loyaltyEventRedeemRewardSchema, } from './loyaltyEventRedeemReward';
export const loyaltyEventSchema = object({
    id: ['id', string()],
    type: ['type', string()],
    createdAt: ['created_at', string()],
    accumulatePoints: [
        'accumulate_points',
        optional(lazy(() => loyaltyEventAccumulatePointsSchema)),
    ],
    createReward: [
        'create_reward',
        optional(lazy(() => loyaltyEventCreateRewardSchema)),
    ],
    redeemReward: [
        'redeem_reward',
        optional(lazy(() => loyaltyEventRedeemRewardSchema)),
    ],
    deleteReward: [
        'delete_reward',
        optional(lazy(() => loyaltyEventDeleteRewardSchema)),
    ],
    adjustPoints: [
        'adjust_points',
        optional(lazy(() => loyaltyEventAdjustPointsSchema)),
    ],
    loyaltyAccountId: ['loyalty_account_id', string()],
    locationId: ['location_id', optional(string())],
    source: ['source', string()],
    expirePoints: [
        'expire_points',
        optional(lazy(() => loyaltyEventExpirePointsSchema)),
    ],
    otherEvent: ['other_event', optional(lazy(() => loyaltyEventOtherSchema))],
    accumulatePromotionPoints: [
        'accumulate_promotion_points',
        optional(lazy(() => loyaltyEventAccumulatePromotionPointsSchema)),
    ],
});
//# sourceMappingURL=loyaltyEvent.js.map