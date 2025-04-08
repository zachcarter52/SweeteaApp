"use strict";
exports.__esModule = true;
exports.swapPlanRequestSchema = void 0;
var schema_1 = require("../schema");
var phaseInput_1 = require("./phaseInput");
exports.swapPlanRequestSchema = (0, schema_1.object)({
    newPlanVariationId: ['new_plan_variation_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    phases: ['phases', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return phaseInput_1.phaseInputSchema; }))))]
});
//# sourceMappingURL=swapPlanRequest.js.map