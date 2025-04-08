"use strict";
exports.__esModule = true;
exports.redeemLoyaltyRewardRequestSchema = void 0;
var schema_1 = require("../schema");
exports.redeemLoyaltyRewardRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    locationId: ['location_id', (0, schema_1.string)()]
});
//# sourceMappingURL=redeemLoyaltyRewardRequest.js.map