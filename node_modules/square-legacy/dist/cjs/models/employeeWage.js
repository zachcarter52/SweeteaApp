"use strict";
exports.__esModule = true;
exports.employeeWageSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.employeeWageSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    employeeId: ['employee_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    title: ['title', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    hourlyRate: ['hourly_rate', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))]
});
//# sourceMappingURL=employeeWage.js.map