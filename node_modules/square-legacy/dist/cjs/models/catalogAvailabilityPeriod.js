"use strict";
exports.__esModule = true;
exports.catalogAvailabilityPeriodSchema = void 0;
var schema_1 = require("../schema");
exports.catalogAvailabilityPeriodSchema = (0, schema_1.object)({
    startLocalTime: ['start_local_time', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    endLocalTime: ['end_local_time', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    dayOfWeek: ['day_of_week', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=catalogAvailabilityPeriod.js.map