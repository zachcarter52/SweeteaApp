"use strict";
exports.__esModule = true;
exports.loyaltyEventAdjustPointsSchema = void 0;
var schema_1 = require("../schema");
exports.loyaltyEventAdjustPointsSchema = (0, schema_1.object)({
    loyaltyProgramId: ['loyalty_program_id', (0, schema_1.optional)((0, schema_1.string)())],
    points: ['points', (0, schema_1.number)()],
    reason: ['reason', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=loyaltyEventAdjustPoints.js.map