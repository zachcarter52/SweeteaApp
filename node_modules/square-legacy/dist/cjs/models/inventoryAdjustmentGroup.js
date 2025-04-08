"use strict";
exports.__esModule = true;
exports.inventoryAdjustmentGroupSchema = void 0;
var schema_1 = require("../schema");
exports.inventoryAdjustmentGroupSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    rootAdjustmentId: ['root_adjustment_id', (0, schema_1.optional)((0, schema_1.string)())],
    fromState: ['from_state', (0, schema_1.optional)((0, schema_1.string)())],
    toState: ['to_state', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=inventoryAdjustmentGroup.js.map