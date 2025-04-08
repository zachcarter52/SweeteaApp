"use strict";
exports.__esModule = true;
exports.loyaltyEventExpirePointsSchema = void 0;
var schema_1 = require("../schema");
exports.loyaltyEventExpirePointsSchema = (0, schema_1.object)({
    loyaltyProgramId: ['loyalty_program_id', (0, schema_1.string)()],
    points: ['points', (0, schema_1.number)()]
});
//# sourceMappingURL=loyaltyEventExpirePoints.js.map