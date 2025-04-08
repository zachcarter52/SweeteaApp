"use strict";
exports.__esModule = true;
exports.loyaltyEventSchema = void 0;
var schema_1 = require("../schema");
var loyaltyEventAccumulatePoints_1 = require("./loyaltyEventAccumulatePoints");
var loyaltyEventAccumulatePromotionPoints_1 = require("./loyaltyEventAccumulatePromotionPoints");
var loyaltyEventAdjustPoints_1 = require("./loyaltyEventAdjustPoints");
var loyaltyEventCreateReward_1 = require("./loyaltyEventCreateReward");
var loyaltyEventDeleteReward_1 = require("./loyaltyEventDeleteReward");
var loyaltyEventExpirePoints_1 = require("./loyaltyEventExpirePoints");
var loyaltyEventOther_1 = require("./loyaltyEventOther");
var loyaltyEventRedeemReward_1 = require("./loyaltyEventRedeemReward");
exports.loyaltyEventSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.string)()],
    type: ['type', (0, schema_1.string)()],
    createdAt: ['created_at', (0, schema_1.string)()],
    accumulatePoints: [
        'accumulate_points',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyEventAccumulatePoints_1.loyaltyEventAccumulatePointsSchema; })),
    ],
    createReward: [
        'create_reward',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyEventCreateReward_1.loyaltyEventCreateRewardSchema; })),
    ],
    redeemReward: [
        'redeem_reward',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyEventRedeemReward_1.loyaltyEventRedeemRewardSchema; })),
    ],
    deleteReward: [
        'delete_reward',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyEventDeleteReward_1.loyaltyEventDeleteRewardSchema; })),
    ],
    adjustPoints: [
        'adjust_points',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyEventAdjustPoints_1.loyaltyEventAdjustPointsSchema; })),
    ],
    loyaltyAccountId: ['loyalty_account_id', (0, schema_1.string)()],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.string)())],
    source: ['source', (0, schema_1.string)()],
    expirePoints: [
        'expire_points',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyEventExpirePoints_1.loyaltyEventExpirePointsSchema; })),
    ],
    otherEvent: ['other_event', (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyEventOther_1.loyaltyEventOtherSchema; }))],
    accumulatePromotionPoints: [
        'accumulate_promotion_points',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyEventAccumulatePromotionPoints_1.loyaltyEventAccumulatePromotionPointsSchema; })),
    ]
});
//# sourceMappingURL=loyaltyEvent.js.map