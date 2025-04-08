"use strict";
exports.__esModule = true;
exports.bulkCreateCustomerDataSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
var customerTaxIds_1 = require("./customerTaxIds");
exports.bulkCreateCustomerDataSchema = (0, schema_1.object)({
    givenName: ['given_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    familyName: ['family_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    companyName: ['company_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    nickname: ['nickname', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    emailAddress: ['email_address', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    address: ['address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    phoneNumber: ['phone_number', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    note: ['note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    birthday: ['birthday', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    taxIds: ['tax_ids', (0, schema_1.optional)((0, schema_1.lazy)(function () { return customerTaxIds_1.customerTaxIdsSchema; }))]
});
//# sourceMappingURL=bulkCreateCustomerData.js.map