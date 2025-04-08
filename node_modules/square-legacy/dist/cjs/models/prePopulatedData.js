"use strict";
exports.__esModule = true;
exports.prePopulatedDataSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
exports.prePopulatedDataSchema = (0, schema_1.object)({
    buyerEmail: ['buyer_email', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    buyerPhoneNumber: ['buyer_phone_number', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    buyerAddress: ['buyer_address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))]
});
//# sourceMappingURL=prePopulatedData.js.map