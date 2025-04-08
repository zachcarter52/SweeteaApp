"use strict";
exports.__esModule = true;
exports.vendorSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
var vendorContact_1 = require("./vendorContact");
exports.vendorSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    address: ['address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    contacts: [
        'contacts',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return vendorContact_1.vendorContactSchema; })))),
    ],
    accountNumber: ['account_number', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    note: ['note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=vendor.js.map