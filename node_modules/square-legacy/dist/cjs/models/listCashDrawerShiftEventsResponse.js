"use strict";
exports.__esModule = true;
exports.listCashDrawerShiftEventsResponseSchema = void 0;
var schema_1 = require("../schema");
var cashDrawerShiftEvent_1 = require("./cashDrawerShiftEvent");
var error_1 = require("./error");
exports.listCashDrawerShiftEventsResponseSchema = (0, schema_1.object)({
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    cashDrawerShiftEvents: [
        'cash_drawer_shift_events',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return cashDrawerShiftEvent_1.cashDrawerShiftEventSchema; }))),
    ]
});
//# sourceMappingURL=listCashDrawerShiftEventsResponse.js.map