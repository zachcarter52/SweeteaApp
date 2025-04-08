"use strict";
exports.__esModule = true;
exports.loyaltyPromotionAvailableTimeDataSchema = void 0;
var schema_1 = require("../schema");
exports.loyaltyPromotionAvailableTimeDataSchema = (0, schema_1.object)({
    startDate: ['start_date', (0, schema_1.optional)((0, schema_1.string)())],
    endDate: ['end_date', (0, schema_1.optional)((0, schema_1.string)())],
    timePeriods: ['time_periods', (0, schema_1.array)((0, schema_1.string)())]
});
//# sourceMappingURL=loyaltyPromotionAvailableTimeData.js.map