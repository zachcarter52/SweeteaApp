"use strict";
exports.__esModule = true;
exports.breakTypeSchema = void 0;
var schema_1 = require("../schema");
exports.breakTypeSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    locationId: ['location_id', (0, schema_1.string)()],
    breakName: ['break_name', (0, schema_1.string)()],
    expectedDuration: ['expected_duration', (0, schema_1.string)()],
    isPaid: ['is_paid', (0, schema_1.boolean)()],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=breakType.js.map