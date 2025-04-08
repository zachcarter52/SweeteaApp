"use strict";
exports.__esModule = true;
exports.calculateLoyaltyPointsResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
exports.calculateLoyaltyPointsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    points: ['points', (0, schema_1.optional)((0, schema_1.number)())],
    promotionPoints: ['promotion_points', (0, schema_1.optional)((0, schema_1.number)())]
});
//# sourceMappingURL=calculateLoyaltyPointsResponse.js.map