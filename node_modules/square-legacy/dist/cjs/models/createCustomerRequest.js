"use strict";
exports.__esModule = true;
exports.createCustomerRequestSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
var customerTaxIds_1 = require("./customerTaxIds");
exports.createCustomerRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.string)())],
    givenName: ['given_name', (0, schema_1.optional)((0, schema_1.string)())],
    familyName: ['family_name', (0, schema_1.optional)((0, schema_1.string)())],
    companyName: ['company_name', (0, schema_1.optional)((0, schema_1.string)())],
    nickname: ['nickname', (0, schema_1.optional)((0, schema_1.string)())],
    emailAddress: ['email_address', (0, schema_1.optional)((0, schema_1.string)())],
    address: ['address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    phoneNumber: ['phone_number', (0, schema_1.optional)((0, schema_1.string)())],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.string)())],
    note: ['note', (0, schema_1.optional)((0, schema_1.string)())],
    birthday: ['birthday', (0, schema_1.optional)((0, schema_1.string)())],
    taxIds: ['tax_ids', (0, schema_1.optional)((0, schema_1.lazy)(function () { return customerTaxIds_1.customerTaxIdsSchema; }))]
});
//# sourceMappingURL=createCustomerRequest.js.map