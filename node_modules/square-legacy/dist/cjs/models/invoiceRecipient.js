"use strict";
exports.__esModule = true;
exports.invoiceRecipientSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
var invoiceRecipientTaxIds_1 = require("./invoiceRecipientTaxIds");
exports.invoiceRecipientSchema = (0, schema_1.object)({
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    givenName: ['given_name', (0, schema_1.optional)((0, schema_1.string)())],
    familyName: ['family_name', (0, schema_1.optional)((0, schema_1.string)())],
    emailAddress: ['email_address', (0, schema_1.optional)((0, schema_1.string)())],
    address: ['address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    phoneNumber: ['phone_number', (0, schema_1.optional)((0, schema_1.string)())],
    companyName: ['company_name', (0, schema_1.optional)((0, schema_1.string)())],
    taxIds: ['tax_ids', (0, schema_1.optional)((0, schema_1.lazy)(function () { return invoiceRecipientTaxIds_1.invoiceRecipientTaxIdsSchema; }))]
});
//# sourceMappingURL=invoiceRecipient.js.map