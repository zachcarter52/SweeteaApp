"use strict";
exports.__esModule = true;
exports.adjustLoyaltyPointsRequestSchema = void 0;
var schema_1 = require("../schema");
var loyaltyEventAdjustPoints_1 = require("./loyaltyEventAdjustPoints");
exports.adjustLoyaltyPointsRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    adjustPoints: ['adjust_points', (0, schema_1.lazy)(function () { return loyaltyEventAdjustPoints_1.loyaltyEventAdjustPointsSchema; })],
    allowNegativeBalance: [
        'allow_negative_balance',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ]
});
//# sourceMappingURL=adjustLoyaltyPointsRequest.js.map