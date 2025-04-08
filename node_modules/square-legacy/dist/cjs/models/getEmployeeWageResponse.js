"use strict";
exports.__esModule = true;
exports.getEmployeeWageResponseSchema = void 0;
var schema_1 = require("../schema");
var employeeWage_1 = require("./employeeWage");
var error_1 = require("./error");
exports.getEmployeeWageResponseSchema = (0, schema_1.object)({
    employeeWage: ['employee_wage', (0, schema_1.optional)((0, schema_1.lazy)(function () { return employeeWage_1.employeeWageSchema; }))],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=getEmployeeWageResponse.js.map