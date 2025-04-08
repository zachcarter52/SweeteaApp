"use strict";
exports.__esModule = true;
exports.loyaltyEventAccumulatePointsSchema = void 0;
var schema_1 = require("../schema");
exports.loyaltyEventAccumulatePointsSchema = (0, schema_1.object)({
    loyaltyProgramId: ['loyalty_program_id', (0, schema_1.optional)((0, schema_1.string)())],
    points: ['points', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=loyaltyEventAccumulatePoints.js.map