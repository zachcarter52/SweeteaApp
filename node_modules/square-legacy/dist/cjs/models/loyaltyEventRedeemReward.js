"use strict";
exports.__esModule = true;
exports.loyaltyEventRedeemRewardSchema = void 0;
var schema_1 = require("../schema");
exports.loyaltyEventRedeemRewardSchema = (0, schema_1.object)({
    loyaltyProgramId: ['loyalty_program_id', (0, schema_1.string)()],
    rewardId: ['reward_id', (0, schema_1.optional)((0, schema_1.string)())],
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=loyaltyEventRedeemReward.js.map