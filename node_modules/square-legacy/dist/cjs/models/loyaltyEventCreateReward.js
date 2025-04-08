"use strict";
exports.__esModule = true;
exports.loyaltyEventCreateRewardSchema = void 0;
var schema_1 = require("../schema");
exports.loyaltyEventCreateRewardSchema = (0, schema_1.object)({
    loyaltyProgramId: ['loyalty_program_id', (0, schema_1.string)()],
    rewardId: ['reward_id', (0, schema_1.optional)((0, schema_1.string)())],
    points: ['points', (0, schema_1.number)()]
});
//# sourceMappingURL=loyaltyEventCreateReward.js.map