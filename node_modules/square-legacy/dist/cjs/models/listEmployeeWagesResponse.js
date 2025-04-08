"use strict";
exports.__esModule = true;
exports.listEmployeeWagesResponseSchema = void 0;
var schema_1 = require("../schema");
var employeeWage_1 = require("./employeeWage");
var error_1 = require("./error");
exports.listEmployeeWagesResponseSchema = (0, schema_1.object)({
    employeeWages: [
        'employee_wages',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return employeeWage_1.employeeWageSchema; }))),
    ],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=listEmployeeWagesResponse.js.map