"use strict";
exports.__esModule = true;
exports.retrieveEmployeeResponseSchema = void 0;
var schema_1 = require("../schema");
var employee_1 = require("./employee");
var error_1 = require("./error");
exports.retrieveEmployeeResponseSchema = (0, schema_1.object)({
    employee: ['employee', (0, schema_1.optional)((0, schema_1.lazy)(function () { return employee_1.employeeSchema; }))],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=retrieveEmployeeResponse.js.map