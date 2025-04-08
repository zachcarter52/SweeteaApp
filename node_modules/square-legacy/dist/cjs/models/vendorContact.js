"use strict";
exports.__esModule = true;
exports.vendorContactSchema = void 0;
var schema_1 = require("../schema");
exports.vendorContactSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    emailAddress: ['email_address', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    phoneNumber: ['phone_number', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    removed: ['removed', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    ordinal: ['ordinal', (0, schema_1.number)()]
});
//# sourceMappingURL=vendorContact.js.map