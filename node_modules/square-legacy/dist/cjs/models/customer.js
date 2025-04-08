"use strict";
exports.__esModule = true;
exports.customerSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
var card_1 = require("./card");
var customerPreferences_1 = require("./customerPreferences");
var customerTaxIds_1 = require("./customerTaxIds");
exports.customerSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    cards: ['cards', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return card_1.cardSchema; }))))],
    givenName: ['given_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    familyName: ['family_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    nickname: ['nickname', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    companyName: ['company_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    emailAddress: ['email_address', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    address: ['address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    phoneNumber: ['phone_number', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    birthday: ['birthday', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    note: ['note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    preferences: ['preferences', (0, schema_1.optional)((0, schema_1.lazy)(function () { return customerPreferences_1.customerPreferencesSchema; }))],
    creationSource: ['creation_source', (0, schema_1.optional)((0, schema_1.string)())],
    groupIds: ['group_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    segmentIds: ['segment_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    version: ['version', (0, schema_1.optional)((0, schema_1.bigint)())],
    taxIds: ['tax_ids', (0, schema_1.optional)((0, schema_1.lazy)(function () { return customerTaxIds_1.customerTaxIdsSchema; }))]
});
//# sourceMappingURL=customer.js.map