"use strict";
exports.__esModule = true;
exports.cardSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
exports.cardSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    cardBrand: ['card_brand', (0, schema_1.optional)((0, schema_1.string)())],
    last4: ['last_4', (0, schema_1.optional)((0, schema_1.string)())],
    expMonth: ['exp_month', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    expYear: ['exp_year', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    cardholderName: ['cardholder_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    billingAddress: ['billing_address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    fingerprint: ['fingerprint', (0, schema_1.optional)((0, schema_1.string)())],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    merchantId: ['merchant_id', (0, schema_1.optional)((0, schema_1.string)())],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    enabled: ['enabled', (0, schema_1.optional)((0, schema_1.boolean)())],
    cardType: ['card_type', (0, schema_1.optional)((0, schema_1.string)())],
    prepaidType: ['prepaid_type', (0, schema_1.optional)((0, schema_1.string)())],
    bin: ['bin', (0, schema_1.optional)((0, schema_1.string)())],
    version: ['version', (0, schema_1.optional)((0, schema_1.bigint)())],
    cardCoBrand: ['card_co_brand', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=card.js.map