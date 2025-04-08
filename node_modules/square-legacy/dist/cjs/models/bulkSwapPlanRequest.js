"use strict";
exports.__esModule = true;
exports.bulkSwapPlanRequestSchema = void 0;
var schema_1 = require("../schema");
exports.bulkSwapPlanRequestSchema = (0, schema_1.object)({
    newPlanVariationId: ['new_plan_variation_id', (0, schema_1.string)()],
    oldPlanVariationId: ['old_plan_variation_id', (0, schema_1.string)()],
    locationId: ['location_id', (0, schema_1.string)()]
});
//# sourceMappingURL=bulkSwapPlanRequest.js.map