"use strict";
exports.__esModule = true;
exports.deviceComponentDetailsApplicationDetailsSchema = void 0;
var schema_1 = require("../schema");
exports.deviceComponentDetailsApplicationDetailsSchema = (0, schema_1.object)({
    applicationType: ['application_type', (0, schema_1.optional)((0, schema_1.string)())],
    version: ['version', (0, schema_1.optional)((0, schema_1.string)())],
    sessionLocation: ['session_location', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    deviceCodeId: ['device_code_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=deviceComponentDetailsApplicationDetails.js.map