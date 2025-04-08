"use strict";
exports.__esModule = true;
exports.listEmployeeWagesRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listEmployeeWagesRequestSchema = (0, schema_1.object)({
    employeeId: ['employee_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=listEmployeeWagesRequest.js.map