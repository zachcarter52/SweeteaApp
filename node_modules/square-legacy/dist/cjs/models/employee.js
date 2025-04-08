"use strict";
exports.__esModule = true;
exports.employeeSchema = void 0;
var schema_1 = require("../schema");
exports.employeeSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    firstName: ['first_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    lastName: ['last_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    email: ['email', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    phoneNumber: ['phone_number', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locationIds: ['location_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    isOwner: ['is_owner', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=employee.js.map