"use strict";
exports.__esModule = true;
exports.workweekConfigSchema = void 0;
var schema_1 = require("../schema");
exports.workweekConfigSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    startOfWeek: ['start_of_week', (0, schema_1.string)()],
    startOfDayLocalTime: ['start_of_day_local_time', (0, schema_1.string)()],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=workweekConfig.js.map