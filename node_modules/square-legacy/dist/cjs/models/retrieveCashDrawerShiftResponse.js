"use strict";
exports.__esModule = true;
exports.retrieveCashDrawerShiftResponseSchema = void 0;
var schema_1 = require("../schema");
var cashDrawerShift_1 = require("./cashDrawerShift");
var error_1 = require("./error");
exports.retrieveCashDrawerShiftResponseSchema = (0, schema_1.object)({
    cashDrawerShift: [
        'cash_drawer_shift',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return cashDrawerShift_1.cashDrawerShiftSchema; })),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=retrieveCashDrawerShiftResponse.js.map