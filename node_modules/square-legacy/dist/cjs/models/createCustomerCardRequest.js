"use strict";
exports.__esModule = true;
exports.createCustomerCardRequestSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
exports.createCustomerCardRequestSchema = (0, schema_1.object)({
    cardNonce: ['card_nonce', (0, schema_1.string)()],
    billingAddress: ['billing_address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    cardholderName: ['cardholder_name', (0, schema_1.optional)((0, schema_1.string)())],
    verificationToken: ['verification_token', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=createCustomerCardRequest.js.map