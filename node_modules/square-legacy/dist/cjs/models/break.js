"use strict";
exports.__esModule = true;
exports.breakSchema = void 0;
var schema_1 = require("../schema");
exports.breakSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    startAt: ['start_at', (0, schema_1.string)()],
    endAt: ['end_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    breakTypeId: ['break_type_id', (0, schema_1.string)()],
    name: ['name', (0, schema_1.string)()],
    expectedDuration: ['expected_duration', (0, schema_1.string)()],
    isPaid: ['is_paid', (0, schema_1.boolean)()]
});
//# sourceMappingURL=break.js.map