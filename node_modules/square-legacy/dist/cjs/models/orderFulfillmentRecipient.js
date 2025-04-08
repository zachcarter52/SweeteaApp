"use strict";
exports.__esModule = true;
exports.orderFulfillmentRecipientSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
exports.orderFulfillmentRecipientSchema = (0, schema_1.object)({
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    displayName: ['display_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    emailAddress: ['email_address', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    phoneNumber: ['phone_number', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    address: ['address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))]
});
//# sourceMappingURL=orderFulfillmentRecipient.js.map